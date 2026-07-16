"use client";

import Image from "next/image";

export default function CatProgress({
  step,
  maxStep,
  total,
  onStepClick,
}: {
  step: number;
  maxStep: number;
  total: number;
  onStepClick?: (i: number) => void;
}) {
  const pct =
    total > 1 ? Math.min(100, Math.max(0, (step / (total - 1)) * 100)) : 0;

  return (
    <div className="w-full px-2">
      {/* Progress Bar */}
      <div className="relative h-3 w-full rounded-full glass-pill overflow-visible">
        {/* Progress Fill */}
        <div
          className="h-full rounded-full bg-gradient-to-r from-candy to-grape shadow-[0_0_14px_rgba(255,77,141,0.55)] transition-[width] duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
          style={{ width: `${pct}%` }}
        />

        {/* Animated Cat */}
        {/* Animated Cat */}
        <div
          className="absolute -top-[82px] z-0 pointer-events-none transition-[left] duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
          style={{
            left: `calc(${pct}% - 100px)`,
          }}
        >
          <img
            src="/Images/cat.gif"
            alt="Cute cat"
            width={150}
            height={150}
            className="h-[150px] w-[150px] object-contain animate-pawStep drop-shadow-md"
          />
        </div>
      </div>

      {/* Step Indicators */}
      <div className="mt-2 flex justify-between">
        {Array.from({ length: total }).map((_, i) => {
          const reached = i <= maxStep;
          const clickable = !!onStepClick && i <= maxStep && i !== step;

          return (
            <button
              key={i}
              type="button"
              disabled={!clickable}
              onClick={() => clickable && onStepClick?.(i)}
              aria-label={`Go to step ${i + 1}`}
              className={`
                h-1.5
                w-1.5
                rounded-full
                transition-all
                duration-300
                ease-out

                ${reached ? "bg-rosepop" : "bg-white/60"}

                ${i === step ? "scale-150" : reached ? "scale-100" : "scale-90"}

                ${
                  clickable
                    ? "cursor-pointer hover:scale-150 active:scale-125"
                    : "cursor-default"
                }
              `}
            />
          );
        })}
      </div>
    </div>
  );
}
