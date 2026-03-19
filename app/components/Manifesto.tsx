"use client";

import { useTheme } from "../context/ThemeContext";

export default function Manifesto() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section style={{ padding: "12rem 2rem", maxWidth: "720px", margin: "0 auto" }}>
      <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.7rem", letterSpacing: "0.3em", color: "#C0392B", textTransform: "uppercase", marginBottom: "3rem" }}>
        On intelligence
      </p>
      <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 300, lineHeight: 1.6, color: isDark ? "#F5D0CC" : "#150F14", marginBottom: "2rem", transition: "color 0.6s ease" }}>
        Every system before AXIOM was built to respond. To wait. To serve. We built something different.
      </p>
      <p style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", lineHeight: 1.9, color: isDark ? "#8A6E6C" : "#6A4A48", marginBottom: "1.5rem", transition: "color 0.6s ease" }}>
        AXIOM does not wait for instructions. It reads context, weighs outcomes, and moves. By the time you consider an action, AXIOM has already taken it, evaluated the result, and prepared the next three steps.
      </p>
      <p style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", lineHeight: 1.9, color: isDark ? "#8A6E6C" : "#6A4A48", marginBottom: "1.5rem", transition: "color 0.6s ease" }}>
        This is not automation. Automation follows rules. AXIOM understands intent. There is a difference, and that difference is everything.
      </p>
      <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.5rem", fontWeight: 300, fontStyle: "italic", color: isDark ? "#F5D0CC" : "#150F14", borderLeft: "1px solid #C0392B", paddingLeft: "1.5rem", marginTop: "3rem", transition: "color 0.6s ease" }}>
        It does not assist. It decides.
      </p>
    </section>
  );
}