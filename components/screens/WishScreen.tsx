"use client";

import { useState } from "react";
import { SITE_CONFIG } from "../config";
import Image from "next/image";

export default function WishScreen({ onNext }: { onNext: () => void }) {
  const [wished, setWished] = useState(false);

  return (
    <div className="w-full flex flex-col items-center text-center gap-5">
      <div
        className="w-full rounded-3xl glass-strong p-6 flex flex-col items-center gap-3 animate-fadeInUp"
        style={{ animationDelay: "0ms" }}
      >
        <div className="relative">
          <img
            src="/images/hehe.png"
            alt="Bunny"
            width={160}
            height={60}
            className="h-auto w-[160px] object-contain"
          />
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-gradient leading-tight">
          Happy birthday
          <br />
          to youu Mukta!
        </h2>
      </div>

      <div
        className="w-full rounded-3xl glass p-6 flex flex-col items-center gap-2 animate-fadeInUp"
        style={{ animationDelay: "160ms" }}
      >
        <h3 className="font-display text-xl font-semibold text-deepgrape">
          Make A Wish
        </h3>
        <p className="text-sm text-deepgrape/70">{SITE_CONFIG.wishPrompt}</p>
        <p className="text-xs text-deepgrape/50">
          {wished
            ? "wish locked in 🔒✨"
            : "when you're ready, tap the button below to make your wish!"}
        </p>

        <button
          onClick={() => setWished(true)}
          disabled={wished}
          className={`mt-2 font-semibold px-8 py-3 rounded-full active:scale-95 transition-transform animate-pop ${
            wished ? "btn-ghost text-deepgrape/60" : "btn-primary text-white"
          }`}
          style={{ animationDelay: "360ms" }}
        >
          {wished ? "Wish made! 🌟" : "I Made My Wish"}
        </button>
      </div>

      {wished && (
        <button
          onClick={onNext}
          className="btn-primary text-white font-semibold px-8 py-3 rounded-full active:scale-95 transition-transform animate-pop"
        >
          Open your gift
        </button>
      )}
    </div>
  );
}
