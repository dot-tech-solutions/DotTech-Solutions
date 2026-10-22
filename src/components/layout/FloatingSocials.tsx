"use client";

import { useState } from "react";
import { X, Send } from "lucide-react";

const PHONE = "919025088044";
const PRE_FILLED_MESSAGE = `Hi DotTech Solutions Team! 👋

I visited your website and would like to know more about your services.

Could you please share more details about your solutions, pricing, and how we can get started?

Thank you!`;

export default function FloatingSocials() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(PRE_FILLED_MESSAGE);

  const handleSend = () => {
    const encoded = encodeURIComponent(message.trim() || PRE_FILLED_MESSAGE);
    window.open(`https://wa.me/${PHONE}?text=${encoded}`, "_blank");
    setOpen(false);
  };

  return (
    <>
      {/* ── Chat Popup ── */}
      {open && (
        <div
          className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] max-w-sm shadow-2xl rounded-3xl overflow-hidden animate-fade-in"
          style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.18)" }}
        >
          {/* Header */}
          <div className="bg-[#25D366] px-5 py-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              {/* WhatsApp SVG icon */}
              <svg viewBox="0 0 32 32" className="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.003 2C8.28 2 2 8.28 2 16.003c0 2.47.65 4.786 1.785 6.79L2 30l7.42-1.745A13.94 13.94 0 0016.003 30C23.72 30 30 23.72 30 16.003 30 8.28 23.72 2 16.003 2zm0 25.464a11.42 11.42 0 01-5.82-1.593l-.418-.248-4.328 1.018.988-4.22-.272-.435A11.424 11.424 0 014.54 16.003c0-6.325 5.14-11.464 11.463-11.464 6.325 0 11.46 5.14 11.46 11.464 0 6.323-5.135 11.46-11.46 11.46zm6.29-8.583c-.345-.173-2.04-1.006-2.356-1.12-.315-.115-.545-.173-.774.173-.23.345-.888 1.12-1.09 1.35-.2.23-.4.26-.745.086-.345-.173-1.457-.537-2.775-1.712-1.026-.916-1.718-2.047-1.92-2.392-.2-.345-.02-.53.15-.702.155-.154.345-.4.518-.6.172-.2.23-.345.345-.575.115-.23.058-.432-.029-.604-.086-.173-.774-1.865-1.06-2.554-.28-.672-.563-.58-.774-.59-.2-.01-.43-.012-.66-.012-.23 0-.603.086-.92.432-.315.345-1.203 1.176-1.203 2.867s1.232 3.326 1.404 3.556c.173.23 2.426 3.703 5.878 5.193.822.354 1.463.565 1.963.723.824.262 1.574.225 2.167.137.66-.099 2.04-.834 2.327-1.638.287-.804.287-1.493.2-1.638-.086-.143-.315-.23-.66-.4z"/>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white font-bold text-sm leading-tight">DotTech Solutions</div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-white/80 inline-block" />
                <span className="text-white/80 text-xs">Typically replies instantly</span>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors flex-shrink-0"
              aria-label="Close chat"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Body */}
          <div className="bg-[#ECE5DD] px-4 py-4">
            {/* Chat bubble */}
            <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm max-w-[90%] mb-4">
              <p className="text-xs text-[#25D366] font-bold mb-1">DotTech Solutions</p>
              <p className="text-slate-700 text-xs leading-relaxed whitespace-pre-line">
                👋 Hello! We&apos;re happy to help. Send us your message and we&apos;ll get back to you right away on WhatsApp.
              </p>
              <p className="text-right text-[10px] text-slate-400 mt-1">Now</p>
            </div>

            {/* Editable message */}
            <div className="bg-white rounded-2xl px-3 py-2 shadow-sm flex gap-2 items-end">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="flex-1 text-xs text-slate-700 resize-none focus:outline-none leading-relaxed bg-transparent"
              />
              <button
                onClick={handleSend}
                className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0 hover:bg-[#20c05c] transition-colors shadow-md mb-0.5"
                aria-label="Send WhatsApp message"
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Floating Button ── */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-5 right-4 sm:right-6 z-50 w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
        style={{ background: "#25D366", boxShadow: "0 4px 24px rgba(37,211,102,0.45)" }}
      >
        {open ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.003 2C8.28 2 2 8.28 2 16.003c0 2.47.65 4.786 1.785 6.79L2 30l7.42-1.745A13.94 13.94 0 0016.003 30C23.72 30 30 23.72 30 16.003 30 8.28 23.72 2 16.003 2zm0 25.464a11.42 11.42 0 01-5.82-1.593l-.418-.248-4.328 1.018.988-4.22-.272-.435A11.424 11.424 0 014.54 16.003c0-6.325 5.14-11.464 11.463-11.464 6.325 0 11.46 5.14 11.46 11.464 0 6.323-5.135 11.46-11.46 11.46zm6.29-8.583c-.345-.173-2.04-1.006-2.356-1.12-.315-.115-.545-.173-.774.173-.23.345-.888 1.12-1.09 1.35-.2.23-.4.26-.745.086-.345-.173-1.457-.537-2.775-1.712-1.026-.916-1.718-2.047-1.92-2.392-.2-.345-.02-.53.15-.702.155-.154.345-.4.518-.6.172-.2.23-.345.345-.575.115-.23.058-.432-.029-.604-.086-.173-.774-1.865-1.06-2.554-.28-.672-.563-.58-.774-.59-.2-.01-.43-.012-.66-.012-.23 0-.603.086-.92.432-.315.345-1.203 1.176-1.203 2.867s1.232 3.326 1.404 3.556c.173.23 2.426 3.703 5.878 5.193.822.354 1.463.565 1.963.723.824.262 1.574.225 2.167.137.66-.099 2.04-.834 2.327-1.638.287-.804.287-1.493.2-1.638-.086-.143-.315-.23-.66-.4z"/>
          </svg>
        )}
        {/* Pulse ring */}
        {!open && (
          <span className="absolute inset-0 rounded-full animate-ping opacity-40" style={{ background: "#25D366" }} />
        )}
      </button>
    </>
  );
}
