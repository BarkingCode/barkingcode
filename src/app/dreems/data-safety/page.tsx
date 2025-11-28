import React from "react";
import { LegalLayout } from "@/components/LegalLayout";

export default function GooglePlayDataSafetyPage() {
  return (
    <LegalLayout
      appName="Dreems"
      title="Dreems – Google Play Data Safety"
      subtitle="Summary of how Dreems handles data for Google Play disclosure."
    >
      <p className="text-sm text-slate-300">
        <span className="font-medium">Last updated:</span> November 27, 2025
      </p>

      <h2>1. Data Collection Overview</h2>
      <p>Dreems collects limited data necessary for app functionality.</p>

      <ul>
        <li>Personal info (optional story inputs)</li>
        <li>App performance and crash logs</li>
        <li>Purchase information (via platform stores)</li>
      </ul>

      <h2>2. Collected Data Types &amp; Purposes</h2>

      <h3>Personal Info (Optional)</h3>
      <ul>
        <li>Child’s name</li>
        <li>Age group</li>
        <li>Story preferences and themes</li>
      </ul>
      <p>
        <strong>Purpose:</strong> Generate personalized stories. <br />
        <strong>Storage:</strong> Only if the user saves the story. <br />
        <strong>Encryption:</strong> Yes. <br />
        <strong>User deletion:</strong> Supported.
      </p>

      <h3>App Activity &amp; Performance</h3>
      <ul>
        <li>App usage metrics (e.g., number of stories generated)</li>
        <li>Crash logs and diagnostics</li>
      </ul>
      <p>
        <strong>Purpose:</strong> Improve app stability and experience. <br />
        <strong>Storage:</strong> Typically up to 90 days. <br />
        <strong>Encryption:</strong> Yes.
      </p>

      <h3>Purchase Information</h3>
      <p>
        Purchases (such as story packs or tokens) are processed via Apple and
        Google’s payment systems. Dreems itself does not store full payment
        details.
      </p>

      <h2>3. Data Sharing</h2>
      <ul>
        <li>No data is sold.</li>
        <li>No data is shared with advertising networks.</li>
        <li>
          Only necessary data is sent to OpenAI to generate stories and
          illustrations.
        </li>
        <li>OpenAI does not use this data to train public models.</li>
      </ul>

      <h2>4. Security Practices</h2>
      <ul>
        <li>Data encrypted in transit and at rest.</li>
        <li>Supabase row-level security and access control.</li>
        <li>Limited access to production data.</li>
      </ul>

      <h2>5. Data Deletion</h2>
      <p>Users can request deletion of:</p>
      <ul>
        <li>Saved stories</li>
        <li>Optional story input data</li>
        <li>Their full account data</li>
      </ul>
      <p>
        For full deletion requests, contact{" "}
        <a
          href="mailto:support@barkingcode.com"
          className="text-sky-300 hover:text-sky-200"
        >
          support@barkingcode.com
        </a>
        .
      </p>
    </LegalLayout>
  );
}
