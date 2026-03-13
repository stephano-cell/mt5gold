"use client";

import { useState, useRef, useEffect } from "react";

const WORKER_URL = "https://mt5gold-chat.thrivenex.workers.dev";

type State = "closed" | "open" | "sending" | "success" | "error";

interface Errors {
  name?: boolean;
  email?: boolean;
  message?: boolean;
}

export default function ChatWidget() {
  const [state, setState] = useState<State>("closed");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telegram, setTelegram] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const messageRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (state === "open" && messageRef.current) {
      setTimeout(() => messageRef.current?.focus(), 300);
    }
  }, [state]);

  const emailValid = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());

  async function handleSend() {
    const newErrors: Errors = {};
    if (!name.trim()) newErrors.name = true;
    if (!email.trim() || !emailValid(email)) newErrors.email = true;
    if (!message.trim()) newErrors.message = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setState("sending");
    try {
      const res = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          telegram: telegram.trim(),
          message: message.trim(),
        }),
      });
      const data = await res.json();
      setState(data.ok ? "success" : "error");
    } catch {
      setState("error");
    }
  }

  function handleReset() {
    setState("open");
    setMessage("");
    setTelegram("");
    setErrors({});
  }

  // Field class builder — red glow + border when error, normal otherwise
  function fieldClass(hasError?: boolean) {
    return [
      "w-full px-3 py-2.5 rounded-lg bg-white/[0.05] text-white text-sm placeholder-gray-600",
      "focus:outline-none transition-all duration-300 resize-none",
      hasError
        ? "border border-red-500 bg-red-500/5 animate-error-pulse focus:border-red-400"
        : "border border-white/10 focus:border-[#E07820]/50",
    ].join(" ");
  }

  const isOpen = state !== "closed";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* Chat panel */}
      {isOpen && (
        <div className="w-[340px] rounded-2xl border border-white/10 bg-[#0f0f0f] shadow-2xl shadow-black/60 overflow-hidden transition-all duration-300 opacity-100 translate-y-0">

          {/* Header */}
          <div className="px-5 py-4 bg-gradient-to-r from-[#F5A623] via-[#E07820] to-[#C43A1A] flex items-center justify-between">
            <div>
              <div className="font-bold text-black text-sm">MT5Gold Support</div>
              <div className="text-[11px] text-black/70">We usually reply within a few hours</div>
            </div>
            <button
              onClick={() => setState("closed")}
              className="w-7 h-7 rounded-full bg-black/20 flex items-center justify-center hover:bg-black/30 transition-colors"
            >
              <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="p-5">
            {state === "success" ? (
              <div className="text-center py-6">
                <div className="w-14 h-14 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-white font-semibold mb-1">Message sent!</p>
                <p className="text-gray-400 text-xs mb-4">We&apos;ll get back to you soon{email ? " at " + email : ""}.</p>
                <button onClick={handleReset} className="text-xs text-[#F5A623] hover:text-[#E07820] transition-colors">
                  Send another message
                </button>
              </div>
            ) : state === "error" ? (
              <div className="text-center py-6">
                <p className="text-red-400 font-semibold mb-2">Something went wrong</p>
                <p className="text-gray-500 text-xs mb-4">Please try again or email us at info@mt5gold.com</p>
                <button onClick={handleReset} className="text-xs text-[#F5A623]">Try again</button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Send us a message or
                  </p>
                  <a
                    href="https://t.me/thrivenex"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#229ED9]/10 border border-[#229ED9]/20 hover:border-[#229ED9]/40 text-[#229ED9] transition-all hover:scale-105"
                    title="Chat on Telegram"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                    <span className="text-xs font-semibold">Chat</span>
                  </a>
                </div>

                {/* Name */}
                <div className="mb-3">
                  <label className={`block text-xs mb-1 transition-colors duration-300 ${errors.name ? "text-red-400" : "text-gray-500"}`}>
                    Name <span className="text-[#F5A623]">*</span>
                    {errors.name && <span className="ml-2 font-normal">— required</span>}
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => { setName(e.target.value); if (e.target.value.trim()) setErrors(p => ({ ...p, name: false })); }}
                    className={fieldClass(errors.name)}
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className={`block text-xs mb-1 transition-colors duration-300 ${errors.email ? "text-red-400" : "text-gray-500"}`}>
                    Email <span className="text-[#F5A623]">*</span>
                    {errors.email && <span className="ml-2 font-normal">— required</span>}
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); if (emailValid(e.target.value)) setErrors(p => ({ ...p, email: false })); }}
                    className={fieldClass(errors.email)}
                  />
                </div>

                {/* Telegram */}
                <div className="mb-3">
                  <label className="block text-xs text-gray-500 mb-1">
                    Telegram <span className="text-gray-600 font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="@yourhandle"
                    value={telegram}
                    onChange={(e) => setTelegram(e.target.value)}
                    className={fieldClass(false)}
                  />
                </div>

                {/* Message */}
                <div className="mb-4">
                  <label className={`block text-xs mb-1 transition-colors duration-300 ${errors.message ? "text-red-400" : "text-gray-500"}`}>
                    Message <span className="text-[#F5A623]">*</span>
                    {errors.message && <span className="ml-2 font-normal">— required</span>}
                  </label>
                  <textarea
                    ref={messageRef}
                    placeholder="How can we help?"
                    value={message}
                    onChange={(e) => { setMessage(e.target.value); if (e.target.value.trim()) setErrors(p => ({ ...p, message: false })); }}
                    rows={4}
                    className={fieldClass(errors.message)}
                  />
                </div>

                {/* Send button */}
                <button
                  onClick={handleSend}
                  disabled={state === "sending"}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#F5A623] to-[#E07820] hover:from-[#E07820] hover:to-[#C43A1A] text-black font-bold text-sm transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {state === "sending" ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Fire gradient chat button */}
      <button
        onClick={() => setState(state === "closed" ? "open" : "closed")}
        className="w-14 h-14 rounded-full shadow-lg shadow-[#E07820]/30 bg-gradient-to-br from-[#F5A623] via-[#E07820] to-[#C43A1A] flex items-center justify-center hover:scale-110 transition-all duration-200 hover:shadow-[#E07820]/50"
        aria-label="Open chat"
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>
    </div>
  );
}
