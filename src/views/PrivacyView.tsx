/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Shield, Lock, Eye, CheckCircle } from "lucide-react";

interface PrivacyViewProps {
  onNavigate: (view: string) => void;
  id?: string;
}

export default function PrivacyView({ onNavigate, id = "privacy-view" }: PrivacyViewProps) {
  return (
    <div id={id} className="bg-[#F8FAFC] font-sans scroll-smooth min-h-screen">
      {/* Hero Header */}
      <section className="bg-white py-12 md:py-16 border-b border-[#EAECEF]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-10 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="font-heading text-xs uppercase tracking-widest font-black text-[#1997E6]">Trust & Compliance</span>
            <h1 className="font-heading font-black text-[#0F172A] text-3xl md:text-5xl tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-slate-550 text-xs md:text-sm">
              Last Updated: May 26, 2026. Review our commitment to protecting your digital identities, document storage, and portal security.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 max-w-[1200px] mx-auto px-4 md:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Document Content on left */}
          <div className="lg:col-span-8 bg-white p-8 md:p-12 border border-[#EAECEF] space-y-8" style={{ borderRadius: "6px" }}>
            
            <p className="text-sm md:text-base leading-relaxed text-slate-700">
              At **Tumaini Cyber**, we recognize that your personal records, KRA credentials, financial transactions, and certificates are confidential and highly sensitive. Keeping your personal and business data safe is our core policy. This policy explains what information we collect, how it is processed, and our protective encryption measures.
            </p>

            <div className="space-y-4">
              <h3 className="font-heading font-extrabold text-[#0F172A] text-lg border-b border-slate-200 pb-2 flex gap-2 items-center">
                <CheckCircle className="w-5 h-5 text-[#1997E6]" /> 1. Information We Collect
              </h3>
              <p className="text-xs md:text-sm leading-relaxed text-slate-600">
                To assist you with government services or custom printing layouts, we may process:
              </p>
              <ul className="space-y-2 list-disc pl-5 text-xs text-slate-600">
                <li>**Personal Demographics**: Name, national ID number, email, and phone coordinates.</li>
                <li>**Government Credentials**: Login passwords and pins for KRA iTax, eCitizen, HELB, NTSA, SHA or Huduma portals. These are **never** stored permanently on our workstations.</li>
                <li>**Digital Documents**: PDF copies of birth certificates, academic P9 summaries, school leaving certificates, and high-definition photographs.</li>
                <li>**Financial Details**: Standard M-Pesa transaction IDs and numbers needed to verify billing payments.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading font-extrabold text-[#0F172A] text-lg border-b border-slate-200 pb-2 flex gap-2 items-center">
                <Lock className="w-5 h-5 text-[#EF233C]" /> 2. Security & Temporary Custody
              </h3>
              <p className="text-xs md:text-sm leading-relaxed text-slate-600">
                Any file shared via our WhatsApp helpdesk, email, or physical flash disk undergoes a strict temporary custody procedure:
              </p>
              <ul className="space-y-2 list-disc pl-5 text-xs text-slate-600">
                <li>**Immediate File Deletion**: All printed documents or scanned certificates are permanently deleted from our local cyber workstations at the end of every business day.</li>
                <li>**Secure Sessions**: Attendants are strictly trained to log out of your personal KRA iTax or eCitizen sessions instantly after filing or printing is completed. No login tokens stay active.</li>
                <li>**Workstation Cleanups**: We utilize specialized automated software to clean files, browser caches, downloads, and sensitive strings on all public workstations dynamically.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading font-extrabold text-[#0F172A] text-lg border-b border-slate-200 pb-2 flex gap-2 items-center">
                <Eye className="w-5 h-5 text-[#1997E6]" /> 3. Data Disclosures & Local Laws
              </h3>
              <p className="text-xs md:text-sm leading-relaxed text-slate-600">
                Tumaini Cyber respects local privacy regulations, including the **Kenyan Data Protection Act**. We do not lease, trade, sell, or disclose your electronic coordinates, certificates, or documents to external marketers or unauthorized organizations. Any share is strictly limited to completing your active digital service request at your explicit instruction.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading font-extrabold text-[#0F172A] text-lg border-b border-slate-200 pb-2 flex gap-2 items-center">
                <Shield className="w-5 h-5 text-[#EF233C]" /> 4. Contact Our Operations Team
              </h3>
              <p className="text-xs md:text-sm leading-relaxed text-slate-600">
                If you have questions about this policy, want to request immediate deletion of a previously processed layout document, or have any security feedback, please email our support at **privacy@tumainicyber.com**, or walk into Ndemi House in Ongata Rongai.
              </p>
            </div>

            <div className="pt-4 flex justify-start gap-4">
              <button
                onClick={() => onNavigate("home")}
                className="bg-[#1E293B] hover:bg-[#0F172A] text-white font-heading text-xs font-bold tracking-wider uppercase px-6 py-3.5 cursor-pointer"
                style={{ borderRadius: "4px" }}
              >
                Back to Safety Home
              </button>
            </div>

          </div>

          {/* Quick Stats sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-50 border border-[#EAECEF] p-6 space-y-4" style={{ borderRadius: "4px" }}>
              <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-[#0F172A] border-b border-slate-200 pb-2">
                Compliance Badges
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="p-2 bg-sky-50 text-[#1997E6] inline-block rounded">
                    <Shield className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="text-xs font-bold text-[#0F172A] block">Data Protection Act</span>
                    <span className="text-[11px] text-slate-550 leading-relaxed block mt-0.5">Compliant with standard Kenyan digital protection statutes.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="p-2 bg-red-50 text-[#EF233C] inline-block rounded">
                    <Lock className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="text-xs font-bold text-[#0F172A] block">Encrypted Channels</span>
                    <span className="text-[11px] text-slate-550 leading-relaxed block mt-0.5">All WhatsApp client support and emails use secure end-to-end setups.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
