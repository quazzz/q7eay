'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
export default function Home() {
  const s = '@q7eay';
  const staticPart = s.slice(0,1)
  const dynamicPart = s.slice(1)
  const techStack = ["C++","TypeScript","Lua","Python","Redis","Docker","Linux","Next.js","NestJS","BullMQ"];
  const [count, setCount] = useState(0);
  const [forward, setForward] = useState(true);
  useEffect(() => {
    const int = setInterval(() => {
      setCount((prev) => {
        if(forward){
          if(prev + 1 >= dynamicPart.length) setForward(false);
          return prev + 1;
        } else {
          if(prev-1 <= 0) setForward(true);
          return prev - 1;
        }
      })
    }, 300);
    return () => clearInterval(int)
  },[forward, dynamicPart.length])
  useEffect(() => {
    document.title = staticPart + dynamicPart.slice(0, count)
  }, [count, staticPart, dynamicPart])
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black font-sans text-white">
      <div className="pointer-events-none absolute inset-0 opacity-90 bg-[linear-gradient(to_bottom,#050505,#3b0c58)]" />
      <div className="pointer-events-none absolute inset-0 opacity-30 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[60px_60px] bg-position-[-30px_-30px]" />
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col gap-10 px-6 text-white mt-10">
        <div className="flex flex-col items-center gap-6 rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_top,#271945_0%,#0b0615_65%,#040205_100%)] px-10 py-12 text-center backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-white/60">portfolio</p>
            <h1 className="mt-2 text-4xl font-semibold">@q7eay</h1>
          </div>
          <p className="min-h-5 text-base text-white/70" aria-label="Profile description" />
          <div className="flex flex-wrap justify-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-medium shadow-inner shadow-black/40">
            <a className="group rounded-full border border-white/20 bg-white/10 p-4 transition hover:border-white hover:bg-white/20" href="https://discord.com/users/q7eay" target="_blank" rel="noreferrer">
              <Image className="h-10 w-10 object-contain opacity-80 transition group-hover:opacity-100" src="/discord.svg" alt="Discord" width={40} height={40} />
              <span className="sr-only">Discord</span>
            </a>
            <a className="group rounded-full border border-white/20 bg-white/10 p-4 transition hover:border-white hover:bg-white/20" href="https://github.com/q7eay" target="_blank" rel="noreferrer">
              <Image className="h-10 w-10 object-contain opacity-80 transition group-hover:opacity-100" src="/github.png" alt="GitHub" width={40} height={40} />
              <span className="sr-only">GitHub</span>
            </a>
            <a className="group rounded-full border border-white/20 bg-white/10 p-4 transition hover:border-white hover:bg-white/20" href="https://t.me/q7eay" target="_blank" rel="noreferrer">
              <Image className="h-10 w-10 object-contain opacity-80 transition group-hover:opacity-100" src="/telegram.png" alt="Telegram" width={40} height={40} />
              <span className="sr-only">Telegram</span>
            </a>
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_top,#2f1c57_0%,#0d081b_70%,#06030a_100%)] px-10 py-12 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-white/60">tech stack</p>
            <h2 className="mt-2 text-3xl font-semibold">Tools & Languages</h2>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3 text-sm font-medium text-white/80 sm:grid-cols-3">
            {techStack.map((tech) => (
              <span key={tech} className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-center backdrop-blur transition hover:border-white/40 hover:bg-white/10">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_top,#2b193f_0%,#0b0514_70%,#050109_100%)] px-10 py-12 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-white/60">projects</p>
            <h2 className="mt-2 text-3xl font-semibold">Latest Work</h2>
          </div>
          <div className="mt-6 grid gap-4 text-sm text-white/80">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-white/30 hover:bg-white/10">
              <p className="text-base font-semibold text-white">AI Workout manager</p>
              <p className="mt-1 text-white/70">AI powered workout manager made for schools project</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-white/30 hover:bg-white/10">
              <p className="text-base font-semibold text-white">BullMQ + Redis email service example</p>
              <p className="mt-1 text-white/70">NestJS project that improvises email service with BullMQ & redis workers</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-white/30 hover:bg-white/10">
              <p className="text-base font-semibold text-white">Telegram horror bot</p>
              <p className="mt-1 text-white/70">Telegram horror bot written in Python that adds custom video to your video note</p>
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_top,#291740_0%,#0a0412_70%,#030106_100%)] px-10 py-12 text-center backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-white/60">contact</p>
            <h2 className="mt-2 text-3xl font-semibold">Let’s talk</h2>
            <p className="mt-2 text-base text-white/70">Open for collaborations and new ideas.</p>
          </div>
          <a className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white hover:bg-white/20" href="https://t.me/q7eay" target="_blank" rel="noreferrer">
            <Image src="/telegram.png" alt="Telegram" width={24} height={24} className="h-6 w-6 object-contain" />
            Telegram
          </a>
        </div>
      </div>
    </div>
  );
}
