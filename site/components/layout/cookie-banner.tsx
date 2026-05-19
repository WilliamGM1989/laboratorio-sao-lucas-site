"use client";

import { useState, useEffect } from "react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  function handleAccept() {
    localStorage.setItem("cookie-consent", "accept");
    setVisible(false);
    // Dispara analytics somente após consentimento explícito (LGPD)
    if (typeof window !== "undefined" && (window as Window & { gtag?: Function }).gtag) {
      (window as Window & { gtag?: Function }).gtag?.("consent", "update", {
        analytics_storage: "granted",
      });
    }
  }

  function handleReject() {
    localStorage.setItem("cookie-consent", "reject");
    setVisible(false);
    // Garante que analytics permanece bloqueado (LGPD)
    if (typeof window !== "undefined" && (window as Window & { gtag?: Function }).gtag) {
      (window as Window & { gtag?: Function }).gtag?.("consent", "update", {
        analytics_storage: "denied",
      });
    }
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full border-t border-neutral-200 bg-white px-4 py-4 shadow-lg md:bottom-4 md:left-4 md:max-w-md md:rounded-xl md:border">
      <p className="mb-3 text-sm text-neutral-600">
        Utilizamos cookies para melhorar sua experiência e analisar o uso do site.
        Ao aceitar, você concorda com nossa{" "}
        <a href="/privacidade" className="font-medium text-primary-600 underline">
          Política de Privacidade
        </a>
        .
      </p>
      <div className="flex gap-3">
        <button
          onClick={handleAccept}
          className="rounded-lg bg-primary-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-primary-700"
        >
          Aceitar
        </button>
        <button
          onClick={handleReject}
          className="rounded-lg border border-neutral-300 px-5 py-2 text-sm font-medium text-neutral-600 transition hover:bg-neutral-50"
        >
          Recusar
        </button>
      </div>
    </div>
  );
}
