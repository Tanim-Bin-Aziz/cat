export default function CatIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 14 L22 26 L10 26 Z"
        fill="#FF9FC4"
        stroke="#7A3E9D"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M48 14 L54 26 L42 26 Z"
        fill="#FF9FC4"
        stroke="#7A3E9D"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="36" r="20" fill="#FFF1F7" stroke="#7A3E9D" strokeWidth="2.5" />
      <circle cx="24" cy="34" r="2.6" fill="#5B2A6E" />
      <circle cx="40" cy="34" r="2.6" fill="#5B2A6E" />
      <path d="M29 41 Q32 44 35 41" stroke="#7A3E9D" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M32 39 L32 41" stroke="#FF6FA5" strokeWidth="2" strokeLinecap="round" />
      <circle cx="16" cy="40" r="2.5" fill="#FFC4DD" opacity="0.8" />
      <circle cx="48" cy="40" r="2.5" fill="#FFC4DD" opacity="0.8" />
      <path d="M8 34 Q16 32 22 36" stroke="#7A3E9D" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8 40 Q16 40 22 40" stroke="#7A3E9D" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M56 34 Q48 32 42 36" stroke="#7A3E9D" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M56 40 Q48 40 42 40" stroke="#7A3E9D" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
