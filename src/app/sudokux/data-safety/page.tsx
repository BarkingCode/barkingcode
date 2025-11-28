import React from "react";
import { LegalLayout } from "@/components/LegalLayout";

export default function DataSafetyPage() {
  return (
    <LegalLayout
      appName="Sudoku X"
      title="Sudoku X – Data Safety"
      subtitle="Summary of how Sudoku X handles data for app store disclosures."
    >
      <h2>1. Data Collection Overview</h2>
      <p>Sudoku X collects limited data to support game functionality, analytics, and advertising.</p>

      <ul>
        <li><strong>User ID:</strong> Anonymous internal identifier.</li>
        <li><strong>App Activity:</strong> Game progress, scores, and interactions.</li>
        <li><strong>Device Info:</strong> Device model, OS version, and crash logs.</li>
        <li><strong>Location:</strong> Approximate location (Country/Region) for leaderboards.</li>
      </ul>

      <h2>2. Data Types & Purposes</h2>

      <h3>2.1 App Functionality</h3>
      <p>
        <strong>Data:</strong> Nickname, Game Progress, Settings.<br />
        <strong>Purpose:</strong> To save your game state, track streaks, and maintain your local profile.
      </p>

      <h3>2.2 Analytics</h3>
      <p>
        <strong>Data:</strong> Crash logs, performance metrics, feature usage.<br />
        <strong>Purpose:</strong> To identify bugs, improve stability, and understand how users play the game.
      </p>

      <h3>2.3 Advertising & Marketing</h3>
      <p>
        <strong>Data:</strong> Ad interactions, approximate location.<br />
        <strong>Purpose:</strong> To display rewarded and interstitial ads via AdMob.
      </p>

      <h2>3. Data Sharing</h2>
      <p>
        We do not sell your personal data. We share data with the following third-party service providers solely for app operation:
      </p>
      <ul>
        <li><strong>Google (AdMob):</strong> For advertising.</li>
        <li><strong>Supabase:</strong> For backend data storage.</li>
        <li><strong>RevenueCat:</strong> For subscription management.</li>
      </ul>

      <h2>4. Security</h2>
      <p>
        All data is transmitted over secure (HTTPS) connections. We use industry-standard security practices to protect your information stored on our servers.
      </p>

      <h2>5. Data Deletion</h2>
      <p>
        You can request deletion of your data by contacting support with your anonymous User ID.
      </p>
      <p>
        <strong>Email:</strong>{" "}
        <a
          href="mailto:support@barkingcode.com"
          className="text-sky-600 hover:text-sky-700"
        >
          support@barkingcode.com
        </a>
      </p>
    </LegalLayout>
  );
}
