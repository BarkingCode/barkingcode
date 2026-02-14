/**
 * ElevenLabs Voice Agent Webhook — Send Email Tool
 *
 * Called by the ElevenLabs voice agent when it collects customer information
 * during a conversation. Sends the collected details to the admin via SendGrid.
 *
 * Secured with a shared secret passed as the x-webhook-secret header.
 */
import { NextResponse } from 'next/server'
import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string)

export async function POST(request: Request) {
  try {
    const webhookSecret = request.headers.get('x-webhook-secret')

    if (webhookSecret !== process.env.ELEVENLABS_WEBHOOK_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const {
      customer_first_name,
      customer_last_name,
      customer_email,
      customer_phone_number,
      customer_message,
      project_details,
    } = await request.json()

    const fullName = [customer_first_name, customer_last_name]
      .filter(Boolean)
      .join(' ')

    if (!fullName || !customer_email) {
      return NextResponse.json(
        { error: 'Missing customer name or email' },
        { status: 400 }
      )
    }

    const mailData: sendgrid.MailDataRequired = {
      to: process.env.ADMIN_EMAIL,
      from: { email: process.env.EMAIL_USER as string },
      subject: `Voice Agent Lead: ${fullName}`,
      text: `
New lead from the voice agent:

Name: ${fullName}
Email: ${customer_email}
Phone: ${customer_phone_number ?? 'Not provided'}

Message:
${customer_message ?? 'No message'}

Project Details:
${project_details ?? 'No details provided'}
      `.trim(),
      html: `
<h2>New Lead from Voice Agent</h2>
<p><strong>Name:</strong> ${fullName}</p>
<p><strong>Email:</strong> ${customer_email}</p>
<p><strong>Phone:</strong> ${customer_phone_number ?? 'Not provided'}</p>
<h3>Message</h3>
<p>${customer_message ? customer_message.replace(/\n/g, '<br>') : 'No message'}</p>
<h3>Project Details</h3>
<p>${project_details ? project_details.replace(/\n/g, '<br>') : 'No details provided'}</p>
      `.trim(),
    }

    await sendgrid.send(mailData)

    return NextResponse.json({
      message: `Email sent successfully. The team will reach out to ${fullName} at ${customer_email} soon.`,
    })
  } catch (error) {
    console.error('Voice agent email error:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
