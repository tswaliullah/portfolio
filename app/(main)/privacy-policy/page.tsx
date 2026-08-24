import type { Metadata } from "next";
import LegalPage from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy | Codisim",
  description: "Privacy Policy for mobile applications published by Codisim.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        This Privacy Policy explains how Codisim ("we", "us", or "our") handles information when you use our mobile applications and related services (the "Service").
      </p>

      <section>
        <h2>Information We Collect</h2>
        <p className="mt-3">
          We collect only the information needed to provide and improve the Service. Depending on the features you choose to use, this may include information you submit directly, such as your name, email address, or support request, as well as limited technical information such as device type, operating system, app version, crash reports, and diagnostics.
        </p>
      </section>

      <section>
        <h2>How We Use Information</h2>
        <p className="mt-3">We use information to:</p>
        <ul className="mt-3">
          <li>provide, maintain, and improve the Service;</li>
          <li>respond to support requests and communicate with you;</li>
          <li>protect the security and reliability of the Service; and</li>
          <li>comply with legal obligations.</li>
        </ul>
      </section>

      <section>
        <h2>Sharing of Information</h2>
        <p className="mt-3">
          We do not sell your personal information. We may share information with trusted service providers only when necessary to operate the Service, provide customer support, meet legal requirements, or protect the rights and safety of our users and others.
        </p>
      </section>

      <section>
        <h2>Data Retention and Security</h2>
        <p className="mt-3">
          We retain information only for as long as needed for the purposes described in this policy or as required by law. We use reasonable administrative and technical safeguards to protect information, but no method of transmission or storage is completely secure.
        </p>
      </section>

      <section>
        <h2>Your Choices</h2>
        <p className="mt-3">
          You may contact us to request access to, correction of, or deletion of personal information we hold about you, subject to applicable law. If the app offers an account, you can also request account deletion through our <a href="/account-deletion">Account Deletion page</a>.
        </p>
      </section>

      <section>
        <h2>Children's Privacy</h2>
        <p className="mt-3">
          Our Service is not directed to children under the age at which parental consent is required in their country. We do not knowingly collect personal information from children without appropriate consent.
        </p>
      </section>

      <section>
        <h2>Changes to This Policy</h2>
        <p className="mt-3">
          We may update this policy from time to time. We will post the updated policy on this page and revise the "Last updated" date.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p className="mt-3">
          For privacy questions or requests, email us at <a href="mailto:waliullah9099@gmail.com">waliullah9099@gmail.com</a>.
        </p>
      </section>
    </LegalPage>
  );
}
