"use client";

import { SITE_CONFIG } from "../config";

export default function FinalScreen({ onReplay }: { onReplay: () => void }) {
  return (
    <div className="w-full flex flex-col items-center text-center gap-5">
      <div
        className="w-full rounded-3xl glass-strong p-6 flex flex-col items-center gap-3 animate-fadeInUp"
        style={{ animationDelay: "0ms" }}
      >
        <span className="text-4xl">🎂🐱🎉</span>
        <h2 className="font-display text-2xl font-semibold text-gradient">
          For {SITE_CONFIG.recipientName}
        </h2>
        <p className="text-sm leading-relaxed text-deepgrape/80">
          {SITE_CONFIG.heartfeltMessage}
        </p>
        <p className="text-xs text-deepgrape/50 pt-1">— {SITE_CONFIG.fromName}</p>
      </div>

      <div
        className="w-full rounded-2xl glass p-4 flex items-center justify-center gap-2 text-xs text-deepgrape/60 font-medium animate-fadeInUp"
        style={{ animationDelay: "160ms" }}
      >
        <span className="text-lg">🐾</span>
        made with love, one paw print at a time
        <span className="text-lg">🐾</span>
      </div>

      <button
        onClick={onReplay}
        className="btn-ghost text-deepgrape/70 font-medium px-6 py-3 rounded-full active:scale-95 transition-transform animate-pop"
        style={{ animationDelay: "320ms" }}
      >
        watch it again ↺
      </button>
    </div>
  );
}
