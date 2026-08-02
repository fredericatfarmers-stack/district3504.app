"use client";

import { useState } from "react";

export default function QAWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function send() {
    if (!input.trim() || loading) return;
    const next = [...messages, { role: "user", content: input }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      setMessages([
        ...next,
        { role: "assistant", content: data.reply || data.error || "Something went wrong." },
      ]);
    } catch {
      setMessages([
        ...next,
        { role: "assistant", content: "Something went wrong reaching the assistant." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {open && (
        <div className="qa-panel">
          <div className="qa-panel-header">
            <span>Questions about District 3504?</span>
            <button onClick={() => setOpen(false)} aria-label="Close chat">
              ×
            </button>
          </div>
          <div className="qa-panel-body">
            {messages.length === 0 && (
              <p className="qa-empty">
                Ask about any path — Retail, Acquisition, Associate, Protégé,
                or Business Insurance Agent.
              </p>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`qa-msg qa-msg-${m.role}`}>
                {m.content}
              </div>
            ))}
            {loading && <div className="qa-msg qa-msg-assistant">Thinking…</div>}
          </div>
          <div className="qa-panel-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Type your question…"
            />
            <button onClick={send} disabled={loading}>
              Send
            </button>
          </div>
        </div>
      )}
      <button
        className="qa-bubble"
        onClick={() => setOpen((o) => !o)}
        title="Ask a question"
        aria-label="Open Q&A chat"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </button>
    </>
  );
}
