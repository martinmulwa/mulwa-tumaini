/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Info, HelpCircle, FileText, CheckSquare } from "lucide-react";

interface TermsViewProps {
  onNavigate: (view: string) => void;
  id?: string;
}

export default function TermsView({ onNavigate, id = "terms-view" }: TermsViewProps) {
  return (
    <div id={id} className="bg-[#F8FAFC] font-sans scroll-smooth min-h-screen">
      {/* Hero Header */}
      <section className="bg-white py-12 md:py-16 border-b border-[#EAECEF]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-10 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="font-heading text-xs uppercase tracking-widest font-black text-[#1997E6]">Operating Boundaries</span>
            <h1 className="font-heading font-black text-[#0F172A] text-3xl md:text-5xl tracking-tight">
              Terms of Service
            </h1>
            <p className="text-slate-550 text-xs md:text-sm">
              Last Updated: May 26, 2026. Review our standard user rules, service delivery timelines, and billing guidelines.
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
              Welcome to **Tumaini Cyber**. By accessing our physical cyber workstations in Ongata Rongai, utilizing our walk-in services, or ordering document designs, resume rewrites, and prints online, you agree to comply with and be bound by the following Terms of Service. Please read them carefully.
            </p>

            <div className="space-y-4">
              <h3 className="font-heading font-extrabold text-[#0F172A] text-lg border-b border-slate-200 pb-2 flex gap-2 items-center">
                <CheckSquare className="w-5 h-5 text-[#1997E6]" /> 1. Services & Custom Design Delivery
              </h3>
              <p className="text-xs md:text-sm leading-relaxed text-slate-600">
                While our technicians put the highest care into KRA tax filing, KUCCPS eCitizen registrations, passport appointments, and CV layout typesetting:
              </p>
              <ul className="space-y-2 list-disc pl-5 text-xs text-slate-600">
                <li>**User Responsibility**: You are solely responsible for verifying that all personal digits, phone coordinates, spouse files, or tax P9 numbers provided to our team are 100% correct.</li>
                <li>**Correction Windows**: Custom ATS resume drafts or menu prints must be checked by the client upon completion. Spelling corrections are free within 5 days of delivery.</li>
                <li>**Statutory Deadlines**: Our attendants advise on known KRA or college entry end-dates, but final alignment with deadline timelines remains the customer's legal obligation limit.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading font-extrabold text-[#0F172A] text-lg border-b border-slate-200 pb-2 flex gap-2 items-center">
                <Info className="w-5 h-5 text-[#EF233C]" /> 2. Pricing & Transaction Guidelines
              </h3>
              <p className="text-xs md:text-sm leading-relaxed text-slate-600">
                All pricing inside our catalog is transparently expressed in Kenyan Shillings (KSh):
              </p>
              <ul className="space-y-2 list-disc pl-5 text-xs text-slate-600">
                <li>**Payments Mode**: We accept direct M-Pesa mobile money (Till or Paybill numbers) or cash on pickup.</li>
                <li>**Deposit Deposits**: Large bulk document print orders or comprehensive custom programming projects require a 50% upfront deposit before we configure initial file drafts.</li>
                <li>**Quotes**: Written quotes provided by our helpdesk are valid for exactly 30 calendar days from the date of issuance.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading font-extrabold text-[#0F172A] text-lg border-b border-slate-200 pb-2 flex gap-2 items-center">
                <FileText className="w-5 h-5 text-[#1997E6]" /> 3. Fair-use & Workspace Access
              </h3>
              <p className="text-xs md:text-sm leading-relaxed text-slate-600">
                Our high-speed fiber internet workstations are intended for productive educational research, job applications, printing, and business functions. Users are strictly prohibited from utilizing our network for illegal digital breaches, unauthorized system downloads, or content distribution.
              </p>
            </div>

            <div className="pt-4 flex justify-start gap-4">
              <button
                onClick={() => onNavigate("home")}
                className="bg-[#1E293B] hover:bg-[#0F172A] text-white font-heading text-xs font-bold tracking-wider uppercase px-6 py-3.5 cursor-pointer"
                style={{ borderRadius: "4px" }}
              >
                Return to Homepage
              </button>
            </div>

          </div>

          {/* Quick Stats sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-50 border border-[#EAECEF] p-6 space-y-4" style={{ borderRadius: "4px" }}>
              <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-[#0F172A] border-b border-slate-200 pb-2">
                Helpdesk Resources
              </h4>
              <ul className="space-y-3">
                <li className="flex gap-2 items-start text-xs text-slate-600 font-medium">
                  <HelpCircle className="w-4.5 h-4.5 text-[#1997E6] mt-0.5 flex-shrink-0" />
                  <span>Call us for any questions regarding billing or special rates in Ongata Rongai.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
