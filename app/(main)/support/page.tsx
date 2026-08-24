import type { Metadata } from "next";
import LegalPage from "@/components/legal-page";

export const metadata: Metadata = {
  title: "App Support | Codisim",
  description: "Support for mobile applications published by Codisim.",
};

export default function SupportPage() {
  return (
    <LegalPage title="App Support">
      <p>Need help with one of our apps? We are happy to help.</p>
      <section>
        <h2>Contact Support</h2>
        <p className="mt-3">Email <a href="mailto:waliullah9099@gmail.com">waliullah9099@gmail.com</a> with the app name, a description of the issue, and any useful screenshots or error messages. Please do not send passwords or other sensitive information.</p>
      </section>
      <section>
        <h2>Privacy Requests</h2>
        <p className="mt-3">For questions about your data, see our <a href="/privacy-policy">Privacy Policy</a> or email the address above.</p>
      </section>
    </LegalPage>
  );
}
