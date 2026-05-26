/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MessageSquare } from "lucide-react";

interface WhatsAppButtonProps {
  serviceName?: string;
  id?: string;
}

export default function WhatsAppButton({ serviceName = "Digital Services", id = "fixed-whatsapp-button" }: WhatsAppButtonProps) {
  const phoneNumber = "254712345678"; // Format: country code + number (no spaces or +)
  const defaultText = `Hello Tumaini Cyber, I'd like to enquire about ${serviceName}`;
  const encodedText = encodeURIComponent(defaultText);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

  return (
    <a
      id={id}
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 shadow-[0_8px_24px_rgba(37,211,102,0.3)] hover:bg-[#20ba5a] hover:-translate-y-1 transition-all duration-250 focus:outline-none focus:ring-2 focus:ring-[#1997E6] focus:ring-offset-2 select-none group"
      style={{ borderRadius: "4px" }} /* strict: border-radius 4px, no pill, and no rounded-full */
      aria-label="Contact Tumaini Cyber on WhatsApp"
    >
      <MessageSquare className="w-5 h-5 fill-white" />
      <span className="font-heading font-semibold text-sm tracking-wide hidden sm:inline-block">
        Chat with Us
      </span>
      {/* Visual notification dot */}
      <span className="absolute -top-1 -right-1 block h-3.5 w-3.5 rounded-full bg-[#EF233C] ring-2 ring-white animate-pulse" />
    </a>
  );
}
