"use client";

type Item = {
  emoji: string;
  top: string;
  left: string;
  size: string;
  delay: string;
  duration?: string;
  rotate?: string;
};

const ITEMS: Item[] = [
  { emoji: "🌸", top: "6%", left: "8%", size: "text-2xl", delay: "0s" },
  { emoji: "🌷", top: "14%", left: "82%", size: "text-3xl", delay: "1.2s" },
  { emoji: "💮", top: "70%", left: "88%", size: "text-2xl", delay: "0.6s" },
  { emoji: "🌼", top: "80%", left: "6%", size: "text-2xl", delay: "2s" },
  { emoji: "🩷", top: "40%", left: "4%", size: "text-xl", delay: "0.8s" },
  { emoji: "💜", top: "58%", left: "90%", size: "text-xl", delay: "1.6s" },
  { emoji: "✨", top: "24%", left: "18%", size: "text-lg", delay: "0.3s" },
  { emoji: "✨", top: "88%", left: "70%", size: "text-lg", delay: "1.9s" },
  { emoji: "🎀", top: "10%", left: "48%", size: "text-2xl", delay: "1s" },
  { emoji: "🌺", top: "50%", left: "94%", size: "text-2xl", delay: "0.4s" },
];

export default function FloatingDecor() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {/* soft color blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-candy/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-16 w-80 h-80 bg-grape/30 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-20 w-56 h-56 bg-lilac/30 rounded-full blur-3xl" />

      {ITEMS.map((it, i) => (
        <span
          key={i}
          className={`absolute ${it.size} animate-float select-none opacity-80`}
          style={{
            top: it.top,
            left: it.left,
            animationDelay: it.delay,
            animationDuration: it.duration ?? "5s",
          }}
        >
          {it.emoji}
        </span>
      ))}
    </div>
  );
}
