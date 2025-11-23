import React from "react";
import { LegalLayout } from "@/components/LegalLayout";

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Dreems – Privacy Policy"
      subtitle="How we collect, use, and protect your data."
    >
      <p className="text-sm text-slate-300">
        <span className="font-medium">Last updated:</span> [DATE]
      </p>

      <p>
        Dreems (“the App”, “we”, “our”, “us”) is an AI-powered mobile
        application that allows parents and caregivers to create personalized
        children’s stories. We respect your privacy and are committed to
        protecting your personal information.
      </p>

      <p>
        This Privacy Policy explains what information we collect, how we use it,
        and your rights.
      </p>

      <h2>1. Information We Collect</h2>

      <h3>1.1 Information You Provide</h3>
      <p>When using Dreems, you may provide optional information such as:</p>
      <ul>
        <li>Child’s name</li>
        <li>Child’s age group</li>
        <li>Story preferences, themes, or interests</li>
        <li>Language preferences</li>
      </ul>
      <p>
        This information is used <strong>only</strong> to generate stories and
        is never shared publicly or sold to others.
      </p>
      <p>We do not collect:</p>
      <ul>
        <li>Photos or images of children</li>
        <li>Sensitive personal information</li>
        <li>Content for public posting or a marketplace</li>
      </ul>

      <h3>1.2 Automatically Collected Information</h3>
      <p>
        We may automatically collect certain technical information when you use
        Dreems, such as:
      </p>
      <ul>
        <li>Device type and operating system version</li>
        <li>App usage analytics (e.g., number of stories generated)</li>
        <li>Crash logs and diagnostics</li>
      </ul>
      <p>
        This data helps us improve performance, fix bugs, and understand how the
        app is used.
      </p>

      <h3>1.3 Payment Information</h3>
      <p>
        All purchases in Dreems are processed securely by{" "}
        <strong>Apple In-App Purchases</strong> or{" "}
        <strong>Google Play Billing</strong>. We do not receive or store your
        full payment details such as credit card numbers.
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>We use your information to:</p>
      <ul>
        <li>Generate and personalize children’s stories</li>
        <li>Improve app stability, quality, and performance</li>
        <li>Provide customer support and respond to requests</li>
        <li>Process in-app purchases and maintain purchase history</li>
      </ul>
      <p>We do NOT:</p>
      <ul>
        <li>Sell your personal data</li>
        <li>Share your data with advertisers for targeted ads</li>
        <li>Publish or sell user-generated stories</li>
      </ul>
      <p>
        All stories we sell or display in the app as products are created
        internally by Dreems, not by users.
      </p>

      <h2>3. How We Store &amp; Protect Your Data</h2>
      <p>
        We use <strong>Supabase</strong>, a GDPR-compliant data platform, to
        store and manage data securely.
      </p>
      <p>We apply protections including:</p>
      <ul>
        <li>Encryption in transit and at rest</li>
        <li>Strict role-based access control</li>
        <li>Limited data retention based on purpose</li>
      </ul>
      <p>
        Story inputs (such as a child’s name or age group) are not stored
        permanently unless you save the story in your library.
      </p>

      <h2>4. AI Usage</h2>
      <p>
        Dreems uses the <strong>OpenAI API</strong> to generate stories and
        illustrations. The information you provide in prompts is sent to OpenAI
        only for the purpose of generating that content.
      </p>
      <p>
        According to OpenAI’s API data usage policies, your data is not used to
        train OpenAI’s models.
      </p>

      <h2>5. Children’s Privacy</h2>
      <p>
        Dreems is designed to be used by adults (parents and caregivers) to
        create stories for children. We do not knowingly collect personal
        information directly from children.
      </p>
      <p>
        If you believe that we have unintentionally collected personal data from
        a child, please contact us at{" "}
        <a
          href="mailto:support@barkingcode.com"
          className="text-sky-300 hover:text-sky-200"
        >
          support@barkingcode.com
        </a>{" "}
        and we will delete that information as soon as possible.
      </p>

      <h2>6. Third-Party Service Providers</h2>
      <p>We rely on the following third-party services:</p>
      <ul>
        <li>
          <strong>OpenAI</strong> – for AI-based text and image generation
        </li>
        <li>
          <strong>Supabase</strong> – for secure data storage and authentication
        </li>
        <li>
          <strong>Apple / Google</strong> – for payment processing
        </li>
      </ul>
      <p>
        These providers act as data processors on our behalf and do not own your
        data.
      </p>

      <h2>7. Data Retention</h2>
      <p>We retain data only as long as necessary:</p>
      <ul>
        <li>Saved stories: kept until you delete them</li>
        <li>Technical logs and crash data: up to 90 days</li>
        <li>Account data: kept until you request account deletion</li>
      </ul>

      <h2>8. Your Rights (GDPR / EU Users)</h2>
      <p>If you are located in the EU or UK, you have the right to:</p>
      <ul>
        <li>Access the personal data we hold about you</li>
        <li>Request corrections to inaccurate data</li>
        <li>Request deletion of your data</li>
        <li>Request a copy (export) of your data</li>
        <li>Withdraw consent where processing is based on consent</li>
      </ul>
      <p>
        To exercise any of these rights, contact us at{" "}
        <a
          href="mailto:support@barkingcode.com"
          className="text-sky-300 hover:text-sky-200"
        >
          support@barkingcode.com
        </a>
        .
      </p>

      <h2>9. Contact</h2>
      <p>If you have any questions about this Privacy Policy:</p>
      <p>
        <strong>Email:</strong>{" "}
        <a
          href="mailto:support@barkingcode.com"
          className="text-sky-300 hover:text-sky-200"
        >
          support@barkingcode.com
        </a>
        <br />
        <strong>Website:</strong>{" "}
        <a
          href="https://barkingcode.com"
          target="_blank"
          rel="noreferrer"
          className="text-sky-300 hover:text-sky-200"
        >
          https://barkingcode.com
        </a>
      </p>

      <h2>10. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. If we make
        significant changes, we will notify you inside the app or update the
        “Last updated” date at the top of this page. Continued use of Dreems
        after changes are made means you accept the updated policy.
      </p>
    </LegalLayout>
  );
}
