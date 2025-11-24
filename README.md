# 🌌 AstroBodha — Your Personalized Path Through the Stars

AstroBodha is a modern, AI-ready astrology experience designed to bring **personalized, Vedic-astrology-based insights** to everyday users in a clean, calming, and premium interface.

This repo contains the **AstroBodha marketing / waitlist landing page**, built with **Next.js, Tailwind CSS, and shadcn/ui**, and deployed on **Vercel**.

---

## 🚀 Vision

Modern users don’t want generic horoscopes copy-pasted for millions of people.  
AstroBodha aims to merge:

- **Authentic Vedic astrology**
- **Product-grade UX**
- **AI-powered personalization (future roadmap)**

…into a single platform that feels **trustworthy, insightful, and beautiful**.

---

## ✨ Features

### 🧭 Hero Section with Strong Positioning
- Clear value proposition: *“Your personalized path through the stars”*
- High-impact hero imagery (zodiac wheel + phone mockup)
- Primary call-to-action: **Join the Waitlist**
- Secondary CTA: Learn more

### 💫 Animated Starfield Background
- Custom `<canvas>`-based **starry night background** using plain JS
- Subtle motion and glow that makes the page feel alive
- Non-blocking and GPU-friendly

### 🔐 Email Waitlist Pop-up
- Clicking **“Join the Waitlist”** opens a modal dialog
- Users can submit their email to get early access & launch updates
- Ready to be wired to any backend:
  - API route
  - Google Sheets
  - Supabase / Firebase
  - Custom database

### 🪐 Sectioned Storytelling

- **Who We Are**  
  Brand story + philosophy: blending astrology, psychology, and technology.

- **What We Do**  
  Feature cards for:
  - Personalized Horoscopes
  - Kundli / Birth Chart insights
  - Relationship & compatibility guidance
  - 1:1 guidance (future feature)

- **Feature Highlights**  
  Grid of benefits:
  - Vedic accuracy
  - Personalized insights
  - Secure & private
  - Daily & long-term guidance

- **About Us**  
  Deeper narrative + full-width background imagery with inspirational quote.

- **Mission**  
  Cards that explain the mission pillars: Accessibility, Clarity, Reliability.

- **Roadmap**  
  Visual timeline for:
  - Beta Launch
  - AI Insights
  - Expert Network
  - Mobile App

### 🧭 Responsive Navigation + Mobile Menu

- Sticky top navigation that reacts on scroll
- Smooth anchor links to page sections
- Animated mobile menu with framer-motion

### 🦴 Component System

Built on:

- **Next.js App Router**
- **Tailwind CSS**
- **shadcn/ui** component library
- **framer-motion** for animations
- **lucide-react** icons

All UI components (buttons, cards, dialogs, navigation, etc.) are reusable and themeable.

---

## 🧱 Tech Stack

**Frontend / UI**

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [framer-motion](https://www.framer.com/motion/)
- [lucide-react](https://lucide.dev/)

**Tooling / DX**

- pnpm / npm
- ESLint
- Vercel for hosting and CI/CD

---

## 🛠 Local Setup

### 1. Clone the repo

```bash
git clone https://github.com/princecodes12/Astrobodha.git
cd Astrobodha
