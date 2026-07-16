"use client";

import Image from "next/image";
import { useState } from "react";

export default function DecorateScreen({ onNext }: { onNext: () => void }) {
  const [decorated, setDecorated] = useState(false);

  return (
    <div className="w-full flex flex-col items-center text-center gap-6">
      <div
        className="relative w-full h-56 rounded-3xl glass-strong overflow-hidden flex items-center justify-center animate-fadeInUp"
        style={{ animationDelay: "0ms" }}
      >
        {/* string lights */}
        <svg viewBox="0 0 300 40" className="absolute top-0 left-0 w-full h-10">
          <path
            d="M0 6 Q75 32 150 6 T300 6"
            stroke="#7A3E9D"
            strokeWidth="1.5"
            fill="none"
            opacity="0.5"
          />
        </svg>
        <div className="absolute top-2 left-0 w-full flex justify-around">
          {[
            "#FF7AAE",
            "#FFC24B",
            "#FF9EA8",
            "#8FD3FF",
            "#C8A2FF",
            "#FF7AAE",
            "#8FD3FF",
            "#FFC24B",
          ].map((c, i) => (
            <span
              key={i}
              className={`h-3 w-3 rounded-full inline-block transition-all duration-500 ${
                decorated ? "animate-pulse scale-110" : "opacity-40"
              }`}
              style={{ backgroundColor: c, transitionDelay: `${i * 60}ms` }}
            />
          ))}
        </div>

        {decorated ? (
          <div
            key="after"
            className="flex flex-col items-center gap-3 animate-pop"
          >
            <span className="text-6xl">🎉</span>

            <img
              src="/Images/chips.webp"
              alt="Decorated Cake"
              width={200}
              height={80}
              className="h-auto w-[200px] object-contain"
            />
          </div>
        ) : (
          <img
            src="/Images/cake.jpg"
            alt="Birthday Cake"
            width={280}
            height={180}
            className="h-auto w-[280px] object-contain rounded-2xl"
          />
        )}

        <span className="absolute bottom-2 right-3 text-3xl transition-transform duration-500">
          {decorated ? "🙀" : "🐈"}
        </span>
        <span className="absolute bottom-2 left-3 text-2xl transition-opacity duration-500">
          {decorated ? "🎈" : ""}
        </span>
      </div>

      {!decorated ? (
        <button
          onClick={() => setDecorated(true)}
          className="btn-primary text-white font-semibold px-8 py-3 rounded-full active:scale-95 transition-transform animate-pop"
          style={{ animationDelay: "260ms" }}
        >
          Keye Neo Baby ✨
        </button>
      ) : (
        <button
          onClick={onNext}
          className="btn-primary text-white font-semibold px-8 py-3 rounded-full active:scale-95 transition-transform animate-pop"
        >
          Chips Kheye nilo .....
        </button>
      )}

      <p
        className="text-[11px] text-deepgrape/50 font-medium animate-fadeInUp"
        style={{ animationDelay: "360ms" }}
      >
        {decorated
          ? "the cats approve this decor 🐾"
          : "one tap, instant vibe upgrade"}
      </p>
    </div>
  );
}
