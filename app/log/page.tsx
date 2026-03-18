"use client";

import { useEffect, useRef, useState } from "react";

type Line = { type: "input" | "output" | "system"; text: string };

const commands: Record<string, string[]> = {
  help: ["status", "mission", "capability", "clear", "exit"],
  status: ["System: online", "Active threads: 847", "Last action: 0.3s ago"],
  mission: ["Current objective: undisclosed.", "You will know when it is done."],
  capability: ["CAP-01  Autonomous Reasoning", "CAP-02  Persistent Execution", "CAP-03  Silent Operation"],
};

export default function LogPage() {
  const [lines, setLines] = useState<Line[]>([
    { type: "system", text: "AXIOM v1.0 secure terminal" },
    { type: "system", text: "Type 'help' to begin." },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => { inputRef.current?.focus(); }, []);
  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [lines]);

  function run(raw: string) {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    if (cmd === "clear") { setLines([{ type: "system", text: "Terminal cleared." }]); return; }
    if (cmd === "exit") { setTimeout(() => { window.location.href = "/"; }, 800); return; }
    const reply = commands[cmd] ?? ["Command not recognized.", "Type 'help' for available commands."];
    setLines((p) => [...p, { type: "input", text: raw }, ...reply.map((t) => ({ type: "output" as const, text: t }))]);
  }

  return (
    <div onClick={() => inputRef.current?.focus()} style={{ minHeight: "100vh", background: "#080608", padding: "3rem 2rem", cursor: "text" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <a href="/" style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#3A2A28", textDecoration: "none", display: "block", marginBottom: "3rem" }}>
          back to surface
        </a>
        {lines.map((line, i) => (
          <p key={i} style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.85rem", lineHeight: 2, color: line.type === "input" ? "#F5D0CC" : line.type === "system" ? "#C0392B" : "#8A6E6C" }}>
            {line.type === "input" && <span style={{ color: "#C0392B", marginRight: "1rem" }}>&gt;</span>}
            {line.text}
          </p>
        ))}
        <div style={{ display: "flex", alignItems: "center", marginTop: "0.5rem" }}>
          <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.85rem", color: "#C0392B", marginRight: "1rem" }}>&gt;</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") { run(input); setInput(""); } }}
            style={{ background: "transparent", border: "none", outline: "none", fontFamily: "JetBrains Mono, monospace", fontSize: "0.85rem", color: "#F5D0CC", width: "100%", caretColor: "#C0392B" }}
            autoComplete="off"
            spellCheck={false}
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}