import React from "react";
import { LegalLayout } from "@/components/LegalLayout";

export default function PrivacyPage() {
  return (
    <LegalLayout
      appName="Sudoku X"
      title="Sudoku X – Privacy Policy"
      subtitle="How we collect, use, and protect your data."
    >
      <p className="text-sm text-slate-500">
        <span className="font-medium">Last updated:</span> November 28, 2025
      </p>

      <p>
        Sudoku X (“the App”, “we”, “our”, “us”) is a mobile game designed to provide a premium Sudoku experience. We respect your privacy and are committed to protecting your personal information.
      </p>

      <p>
        This Privacy Policy explains what information we collect, how we use it, and your rights.
      </p>

      <h2>1. No Account Required</h2>
      <p>
        You do <strong>not</strong> need to create an account to play Sudoku X. We do not ask for your email address, phone number, or password.
      </p>

      <h2>2. Information We Collect</h2>

      <h3>2.1 User Profile Data</h3>
      <p>
        To personalize your experience, we may ask for optional information which is stored locally on your device and synced to our backend using an anonymous identifier:
      </p>
      <ul>
        <li><strong>Nickname:</strong> A display name for leaderboards.</li>
        <li><strong>Country & Region:</strong> To show you relevant local leaderboards.</li>
      </ul>

      <h3>2.2 Gameplay Data</h3>
      <p>
        We collect data about your game progress to provide features like statistics, streaks, and leaderboards:
      </p>
      <ul>
        <li>Game completion times</li>
        <li>Mistakes and hints used</li>
        <li>XP and levels</li>
        <li>Daily challenge results</li>
      </ul>

      <h3>2.3 Technical Data</h3>
      <p>
        We automatically collect certain technical information to improve app performance and stability:
      </p>
      <ul>
        <li>Device type and operating system</li>
        <li>Crash logs and diagnostics</li>
        <li>Anonymous app usage analytics</li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <p>We use your information to:</p>
      <ul>
        <li>Provide and improve the game experience</li>
        <li>Maintain global and local leaderboards</li>
        <li>Track your personal progress and stats</li>
        <li>Deliver daily challenge puzzles</li>
        <li>Send optional notifications (if enabled)</li>
      </ul>

      <h2>4. Third-Party Services</h2>
      <p>We use trusted third-party services to operate the app:</p>
      <ul>
        <li><strong>Supabase:</strong> For secure backend storage of game data and leaderboards.</li>
        <li><strong>AdMob (Google):</strong> To display advertisements (rewarded, interstitial, banner). AdMob may collect data to show personalized ads.</li>
        <li><strong>RevenueCat:</strong> To manage in-app subscriptions (Ad-Free mode).</li>
        <li><strong>Game Center (iOS):</strong> Optional integration for achievements and leaderboards.</li>
      </ul>

      <h2>5. Data Retention</h2>
      <p>
        Since we do not require an account, your data is linked to an anonymous internal ID. If you uninstall the app without backing up your data (e.g., via Game Center or cloud backup), your local progress may be lost.
      </p>
      <p>
        We retain analytics data for a limited period to analyze trends and improve the app.
      </p>

      <h2>6. Your Rights</h2>
      <p>
        You have the right to access, correct, or delete your data. Since we do not have your email, please contact us with your anonymous User ID (found in Settings) if you wish to exercise these rights.
      </p>

      <h2>7. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at:
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
