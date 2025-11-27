import React from "react";
import { LegalLayout } from "@/components/LegalLayout";

export default function AgeSuitabilityPage() {
  return (
    <LegalLayout
      title="Age Suitability"
      subtitle="Information about our content and target audience."
    >
      <p className="text-sm text-slate-500">
        <span className="font-medium">Last updated:</span> November 27, 2025
      </p>

      <p>
        Dreems is a storytelling application designed to bring families together through the magic of personalized stories. We are committed to providing a safe, enriching, and age-appropriate experience for our users.
      </p>

      <h2>1. Target Audience</h2>
      <p>
        Dreems is primarily designed to be used by <strong>parents, guardians, and caregivers</strong> who create stories for and with their children. While the stories are enjoyed by children, the account management, story generation, and settings are intended to be handled by an adult.
      </p>
      <p>
        The app is suitable for children of all ages, with specific content personalization available for different age groups (e.g., toddlers, preschoolers, school-age children).
      </p>

      <h2>2. Content Safety & AI</h2>
      <p>
        Our stories are generated using advanced Artificial Intelligence (AI). We prioritize safety in the following ways:
      </p>
      <ul>
        <li>
          <strong>Strict Content Filters:</strong> We employ robust moderation filters to prevent the generation of inappropriate, violent, or harmful content.
        </li>
        <li>
          <strong>Positive Themes:</strong> Our AI is instructed to prioritize positive, educational, and imaginative themes suitable for children.
        </li>
        <li>
          <strong>Parental Supervision:</strong> Since the app is driven by user prompts, we encourage parents to review stories as they are created.
        </li>
      </ul>

      <h2>3. Privacy & Data Protection</h2>
      <p>
        We take the privacy of our users, especially children, very seriously.
      </p>
      <ul>
        <li>
          <strong>No Direct Collection from Children:</strong> We do not knowingly collect personal information directly from children under 13. All data is provided by the adult account holder.
        </li>
        <li>
          <strong>Data Minimization:</strong> We only use the information provided (such as a child's first name or age) to generate the story. This data is processed securely and is not sold to third parties.
        </li>
      </ul>
      <p>
        For more details, please refer to our <a href="/dreems/privacy-policy" className="text-sky-600 hover:text-sky-700">Privacy Policy</a>.
      </p>

      <h2>4. Advertising & In-App Purchases</h2>
      <p>
        To ensure a distraction-free environment:
      </p>
      <ul>
        <li>
          <strong>No Third-Party Ads:</strong> Dreems is free from third-party advertising.
        </li>
        <li>
          <strong>Gated Purchases:</strong> All subscriptions and in-app purchases are protected by parental gates (OS-level confirmation) to prevent accidental purchases by children.
        </li>
      </ul>

      <h2>5. Contact Us</h2>
      <p>
        If you have any questions or concerns regarding the age suitability of our content, please contact us at:
      </p>
      <p>
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
