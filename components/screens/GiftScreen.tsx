"use client";

import Image from "next/image";
import { useState } from "react";

export default function GiftScreen({ onNext }: { onNext: () => void }) {
  const [opened, setOpened] = useState(false);

  return (
    <div className="w-full flex flex-col items-center text-center gap-6">
      <div
        className="w-full rounded-[2rem] glass-strong p-6 sm:p-8 flex flex-col items-center gap-5 relative overflow-hidden min-h-[340px] justify-center animate-fadeInUp"
        style={{ animationDelay: "0ms" }}
      >
        {/* Decorative background */}
        <div className="absolute -top-16 -left-16 w-40 h-40 rounded-full bg-rosepop/10 blur-3xl" />
        <div className="absolute -bottom-16 -right-16 w-40 h-40 rounded-full bg-purple-300/20 blur-3xl" />

        {!opened ? (
          <button
            onClick={() => setOpened(true)}
            className="group relative flex flex-col items-center gap-5 active:scale-95 transition-all duration-300 animate-pop"
            style={{ animationDelay: "180ms" }}
          >
            {/* Gift Box */}
            <img
              src="/images/eat.jpg"
              alt="Gift"
              className="h-auto w-40 object-contain"
            />
            <div className="space-y-1">
              <p className="font-display text-xl text-deepgrape">
                A little note for you 🙀
              </p>

              <span className="text-xs font-medium text-deepgrape/55 tracking-wide">
                tap the gift to open
              </span>
            </div>
          </button>
        ) : (
          <div className="flex flex-col items-center gap-5 animate-pop">
            {/* Opened Letter */}
            <div className="relative w-64 rounded-2xl bg-[#fffaf7] p-6 shadow-[0_15px_40px_rgba(100,60,80,0.12)] rotate-[-2deg]">
              {/* Paper lines */}
              <div className="absolute inset-x-5 top-5 h-px bg-rose-100" />
              <div className="absolute inset-x-5 bottom-5 h-px bg-rose-100" />

              <div className="relative space-y-4">
                <div className="flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
                    <span className="text-2xl">♡</span>
                  </div>
                </div>

                <p className="font-display text-2xl text-deepgrape">
                  A letter for you
                </p>

                <div className="w-16 h-0.5 bg-rose-200 mx-auto rounded-full" />

                <p className="text-sm leading-relaxed text-deepgrape/65">
                  Some feelings are too special to fit inside a simple gift. So,
                  I wrapped them in a little letter instead.
                </p>

                <div className="flex justify-center gap-2 text-rosepop text-xl">
                  <span>✨</span>
                  <span>🩷</span>
                  <span>✨</span>
                </div>
              </div>
            </div>

            {/* <p className="text-xs text-deepgrape/50 tracking-wide">
              Your little surprise is ready ✦
            </p> */}
          </div>
        )}
      </div>

      {opened && (
        <button
          onClick={onNext}
          className="btn-primary text-white font-semibold px-8 py-3 rounded-full active:scale-95 transition-transform animate-pop shadow-lg shadow-rose-200/40"
          style={{ animationDelay: "150ms" }}
        >
          Open the letter →
        </button>
      )}
    </div>
  );
}
