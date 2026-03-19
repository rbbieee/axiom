"use client";

import { useTheme } from "../context/ThemeContext";

const capabilities = [
  { code: "CAP-01", title: "Autonomous Reasoning", description: "AXIOM constructs its own chain of thought without prompting. Given an objective, it identifies dependencies, anticipates failure points, and builds a path forward before any action is taken." },
  { code: "CAP-02", title: "Persistent Execution", description: "Most agents stop when they hit friction. AXIOM does not. It reroutes, retries, and adapts in real time. The objective remains fixed. The method is fluid." },
  { code: "CAP-03", title: "Silent Operation", description: "No dashboards. No notifications. No confirmation dialogs. AXIOM operates beneath the surface and surfaces only when there is something worth knowing." },
];

export default function Capabilities() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section style={{ padding: "8rem 2rem", maxWidth: "960px", margin: "0 auto" }}>
      <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.7rem", letterSpacing: "0.3em", color: "#C0392B", textTransform: "uppercase", marginBottom: "5rem" }}>
        Capabilities
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "4rem" }}>
        {capabilities.map((cap) => (
          <div key={cap.code}>
            <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem", letterSpacing: "0.2em", color: "#C0392B", marginBottom: "1rem" }}>
              {cap.code}
            </p>
            <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.75rem", fontWeight: 300, color: isDark ? "#F5D0CC" : "#150F14", marginBottom: "1rem", lineHeight: 1.2, transition: "color 0.6s ease" }}>
              {cap.title}
            </h3>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", lineHeight: 1.8, color: isDark ? "#8A6E6C" : "#6A4A48", transition: "color 0.6s ease" }}>
              {cap.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}