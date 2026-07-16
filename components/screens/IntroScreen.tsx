"use client";

import Image from "next/image";
import { SITE_CONFIG } from "../config";

export default function IntroScreen({ onOpen }: { onOpen: () => void }) {
  return (
    <div className="flex flex-col items-center text-center gap-6">
      <div
        className="relative w-40 h-32 rounded-2xl glass-strong flex items-center justify-center animate-fadeInUp"
        style={{ animationDelay: "80ms" }}
      >
        <img
          src="/images/pic3.gif"
          width={300}
          height={120}
          alt="Birthday Cake"
          className="h-auto w-[300px] object-contain"
        />
        <span className="absolute -top-3 -right-3 text-2xl animate-sparkle">
          ✨
        </span>
        <span
          className="absolute -bottom-2 -left-3 text-xl animate-sparkle"
          style={{ animationDelay: "0.8s" }}
        >
          🌸
        </span>
      </div>

      <div
        className="space-y-1.5 animate-fadeInUp"
        style={{ animationDelay: "180ms" }}
      >
        <p className="uppercase tracking-[0.2em] text-xs font-semibold text-rosepop">
          A little Cheo Meo For {SITE_CONFIG.recipientName}
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-deepgrape leading-tight">
          Ready to open it?
        </h1>
      </div>

      <div
        className="flex items-center gap-3 mt-1 animate-pop"
        style={{ animationDelay: "380ms" }}
      >
        <button
          onClick={onOpen}
          className="btn-primary text-white font-semibold px-8 py-3 rounded-full active:scale-95 transition-transform"
        >
          Yes! 🤍
        </button>
        <button className="btn-ghost text-deepgrape/70 font-medium px-6 py-3 rounded-full">
          not yet
        </button>
      </div>

      <p
        className="text-[11px] text-deepgrape/50 font-medium animate-fadeInUp"
        style={{ animationDelay: "480ms" }}
      >
        Hehehehe... it's surprise 😼
      </p>
    </div>
  );
}
