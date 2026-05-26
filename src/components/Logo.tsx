/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
// @ts-ignore
import logoUrl from "../../tumaini-cyber-logo.png";

interface LogoProps {
  className?: string;
  id?: string;
  variant?: "horizontal" | "stacked" | "iconOnly";
}

export default function Logo({ className = "", id = "tumaini-logo" }: LogoProps) {
  return (
    <img
      src={logoUrl}
      alt="Tumaini Cyber Logo"
      id={id}
      referrerPolicy="no-referrer"
      className={`max-h-full object-contain transition-all duration-200 ${className}`}
    />
  );
}
