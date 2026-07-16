"use client";

import { useEffect, useState } from "react";
import FloatingDecor from "@/components/FloatingDecor";
import CatProgress from "@/components/CatProgress";
import CatIcon from "@/components/CatIcon";
import IntroScreen from "@/components/screens/IntroScreen";
import DecorateScreen from "@/components/screens/DecorateScreen";
import WishScreen from "@/components/screens/WishScreen";
import GiftScreen from "@/components/screens/GiftScreen";
import FinalScreen from "@/components/screens/FinalScreen";

const TOTAL_STEPS = 5;
const TRANSITION_MS = 260;

export default function Home() {
  const [step, setStep] = useState(0);
  const [maxStep, setMaxStep] = useState(0);
  const [displayStep, setDisplayStep] = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");

  // fade the "modal" content out, swap it, then fade the new one in
  useEffect(() => {
    if (step === displayStep) return;
    setPhase("out");
    const t = setTimeout(() => {
      setDisplayStep(step);
      setPhase("in");
    }, TRANSITION_MS);
    return () => clearTimeout(t);
  }, [step, displayStep]);

  const goTo = (s: number) => {
    const clamped = Math.min(TOTAL_STEPS - 1, Math.max(0, s));
    setStep(clamped);
    setMaxStep((m) => Math.max(m, clamped));
  };
  const next = () => goTo(step + 1);
  const replay = () => goTo(0);

  return (
    <main className="relative min-h-[100dvh] bg-dreamy flex items-center justify-center px-4 py-8 overflow-hidden">
      <FloatingDecor />

      <div className="relative z-10 w-full max-w-sm mx-auto">
        {/* window chrome, echoes a cute "app card" feel */}
        <div className="glass-strong rounded-[2rem] p-5 sm:p-6 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                className="h-8 w-8"
                src="/Images/cat-svgrepo-com.svg"
                alt="Cat Icon"
              />
              <span className="text-xs font-semibold text-deepgrape/60 tracking-wide">
                Happy Birthday Mukta!
              </span>
            </div>
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-candy" />
              <span className="h-2 w-2 rounded-full bg-lilac" />
              <span className="h-2 w-2 rounded-full bg-grape" />
            </div>
          </div>

          {step > 0 && (
            <CatProgress
              step={step}
              maxStep={maxStep}
              total={TOTAL_STEPS}
              onStepClick={goTo}
            />
          )}

          <div
            key={displayStep}
            className={`min-h-[360px] flex items-center justify-center ${
              phase === "in" ? "animate-modalIn" : "animate-modalOut"
            }`}
          >
            {displayStep === 0 && <IntroScreen onOpen={next} />}
            {displayStep === 1 && <DecorateScreen onNext={next} />}
            {displayStep === 2 && <WishScreen onNext={next} />}
            {displayStep === 3 && <GiftScreen onNext={next} />}
            {displayStep === 4 && <FinalScreen onReplay={replay} />}
          </div>
        </div>

        <p className="text-center text-[11px] text-deepgrape/50 mt-4 font-medium">
          made for Tahsin Mukta who deserves the whole cake 🍰
        </p>
      </div>
    </main>
  );
}
