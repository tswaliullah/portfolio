import type { Metadata } from "next";
import LegalPage from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Account Deletion | Codisim",
  description: "Request deletion of your account and associated data.",
};

export default function AccountDeletionPage() {
  return (
    <LegalPage title="Account Deletion">
      <p>If an app you use provides an account, you can ask us to delete it and the associated personal data.</p>
      <section>
        <h2>How to Request Deletion</h2>
        <p className="mt-3">Email <a href="mailto:waliullah9099@gmail.com?subject=Account%20Deletion%20Request">waliullah9099@gmail.com</a> with the subject "Account Deletion Request." Include the app name and the email address or account identifier used in the app so we can verify and process your request.</p>
      </section>
      <section>
        <h2>What Happens Next</h2>
        <p className="mt-3">We will verify the request and delete your account and associated personal data within a reasonable time, unless we must retain certain information for legal, security, fraud-prevention, or accounting purposes. We will let you know if any information must be retained and why.</p>
      </section>
      <section>
        <h2>Apps Without Accounts</h2>
        <p className="mt-3">If the app does not provide an account, there may be no account data for us to delete. You can still contact us with any privacy question.</p>
      </section>
    </LegalPage>
  );
}
