import type { Metadata } from "next";
import LegalPage from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service | Codisim",
  description: "Terms of Service for mobile applications published by Codisim.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service">
      <p>These Terms of Service govern your use of mobile applications and related services published by Codisim (the "Service"). By using the Service, you agree to these Terms.</p>
      <section>
        <h2>Use of the Service</h2>
        <p className="mt-3">You may use the Service only in compliance with applicable laws and these Terms. Do not misuse the Service, interfere with its operation, attempt unauthorized access, or use it to harm others.</p>
      </section>
      <section>
        <h2>Content and Availability</h2>
        <p className="mt-3">We may update, modify, suspend, or discontinue any part of the Service when reasonably necessary. We aim to keep the Service available and accurate, but do not guarantee uninterrupted or error-free operation.</p>
      </section>
      <section>
        <h2>Intellectual Property</h2>
        <p className="mt-3">The Service, including its software, design, and content, is owned by Codisim or its licensors and is protected by applicable intellectual-property laws. These Terms do not grant you ownership of the Service.</p>
      </section>
      <section>
        <h2>Disclaimer and Liability</h2>
        <p className="mt-3">The Service is provided on an "as is" and "as available" basis. To the fullest extent permitted by law, Codisim is not liable for indirect, incidental, special, or consequential damages arising from your use of the Service.</p>
      </section>
      <section>
        <h2>Contact</h2>
        <p className="mt-3">Questions about these Terms can be sent to <a href="mailto:waliullah9099@gmail.com">waliullah9099@gmail.com</a>.</p>
      </section>
    </LegalPage>
  );
}
