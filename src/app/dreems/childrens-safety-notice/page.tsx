import React from "react";
import { LegalLayout } from "@/components/LegalLayout";

export default function ChildrenSafetyPage() {
  return (
    <LegalLayout
      title="Dreems – Children’s Safety Notice"
      subtitle="How Dreems is designed to keep children safe."
    >
      <p>
        Dreems is designed for <strong>adults to create stories for children</strong>.
        Children should not use the app independently.
      </p>

      <h2>Safety Principles</h2>
      <ul>
        <li>The app does not allow children to create accounts.</li>
        <li>The app does not track or profile children.</li>
        <li>
          Any child information (such as name or age group) is{" "}
          <strong>optional</strong> and used only to personalize a story.
        </li>
        <li>
          No child information is shared, published, or used for advertising.
        </li>
        <li>User-created stories are never made public or sold.</li>
      </ul>

      <h2>If You Have Concerns</h2>
      <p>
        If you believe we have unknowingly collected personal data from a child,
        please contact us and we will delete it as soon as possible.
      </p>
      <p>
        <strong>Email:</strong>{" "}
        <a
          href="mailto:support@barkingcode.com"
          className="text-sky-300 hover:text-sky-200"
        >
          support@barkingcode.com
        </a>
      </p>
    </LegalLayout>
  );
}
