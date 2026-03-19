"use client";

import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <footer style={{ borderTop: `1px solid ${isDark ? "#1A0F0E" : "#E0D8D6"}`, padding: "3rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "960px", margin: "0 auto", transition: "border-color 0.6s ease" }}>
      <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1rem", fontWeight: 300, color: isDark ? "#3A2A28" : "#8A6E6C", letterSpacing: "0.1em", transition: "color 0.6s ease" }}>
        AXIOM
      </span>
      <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.65rem", color: isDark ? "#3A2A28" : "#8A6E6C", letterSpacing: "0.15em", transition: "color 0.6s ease" }}>
        The work continues.
      </span>
    </footer>
  );
}