import React from "react";
import { LegalLayout } from "@/components/LegalLayout";

export default function TermsPage() {
  return (
    <LegalLayout
      appName="X-Sudoku"
      title="X-Sudoku – Terms of Use"
      subtitle="Please read these terms carefully before playing X-Sudoku."
    >
      <p className="text-sm text-slate-500">
        <span className="font-medium">Last updated:</span> November 28, 2025
      </p>

      <p>
        Welcome to X-Sudoku! By downloading or using the app, you agree to the following terms.
      </p>

      <h2>1. Use of the App</h2>
      <p>
        X-Sudoku is provided for personal, non-commercial entertainment purposes. You agree not to misuse the app, attempt to cheat or manipulate leaderboards, or reverse-engineer the software.
      </p>

      <h2>2. Subscriptions & Purchases</h2>
      <p>
        X-Sudoku offers an optional "Ad-Free" subscription.
      </p>
      <ul>
        <li><strong>Price:</strong> $4.99 USD per month (or local equivalent).</li>
        <li><strong>Benefits:</strong> Removes all ads (interstitial, banner, rewarded) and unlocks unlimited gameplay.</li>
        <li><strong>Billing:</strong> Payment is charged to your Apple ID or Google Play account at confirmation of purchase.</li>
        <li><strong>Renewal:</strong> Subscription automatically renews unless canceled at least 24 hours before the end of the current period.</li>
        <li><strong>Management:</strong> You can manage and cancel subscriptions in your device settings.</li>
      </ul>

      <h2>3. Virtual Items</h2>
      <p>
        The app may include virtual items such as hints or game unlocks. These items have no real-world value and cannot be exchanged for cash.
      </p>

      <h2>4. User Conduct</h2>
      <p>
        You agree to maintain a respectful environment. Offensive nicknames or cheating may result in your removal from leaderboards or restriction of access to online features.
      </p>

      <h2>5. Intellectual Property</h2>
      <p>
        All rights, title, and interest in X-Sudoku, including its code, design, and content, are owned by Barking Code.
      </p>

      <h2>6. Disclaimer of Warranties</h2>
      <p>
        The app is provided "as is" without warranties of any kind. We do not guarantee that the app will be error-free or uninterrupted.
      </p>

      <h2>7. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, Barking Code shall not be liable for any indirect, incidental, or consequential damages arising from your use of the app.
      </p>

      <h2>8. Changes to Terms</h2>
      <p>
        We reserve the right to modify these terms at any time. Your continued use of the app constitutes acceptance of the updated terms.
      </p>

      <h2>9. Contact</h2>
      <p>
        If you have any questions about these Terms of Use, please contact us at:
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
