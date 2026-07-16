# birthday-wish 🎀

Cute, mobile-first, pink & purple glassy birthday wish page — Next.js 16 (App Router) + Tailwind.

## Chalanor niyom (kivabe run korbe)

```bash
npm install
npm run dev
```

Tarpor browser e `http://localhost:3000` open koro. Mobile e best dekhay — Chrome DevTools e phone view diye check korte paro.

## Personalize korte

`components/config.ts` file e giye eigulo change koro:

- `recipientName` — jar jonno wish, tar naam
- `fromName` — tumi ke, seta likho
- `heartfeltMessage` — main heartfelt message
- `wishPrompt` — "make a wish" screen er choto line

## Flow / Screens

1. **Intro** — "Ready to open it?" note, cake icon
2. **Decorate** — tap kore room decorate hoy, string lights + cats
3. **Wish** — "Happy birthday to youuu" + Make A Wish button
4. **Gift** — gift box tap kore open, heartfelt note er intro
5. **Final** — full heartfelt message + replay button

Top e (step 1 er por theke) ekta progress bar dekha jabe jar upor 🐾 paw print cat er moto step by step egiye jay.

## Deploy

Vercel e sobcheye shohoj:

```bash
npm i -g vercel
vercel
```

Ba GitHub e push kore Vercel dashboard theke import korte paro.

## Tech

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS (custom pink/purple palette + glassmorphism utilities in `app/globals.css`)
- Fonts: Fredoka (display) + Quicksand (body), via `next/font/google`
- No external UI libs — pure CSS animations, emoji-based cat/flower icons (fast, no image assets needed)
