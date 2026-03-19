"use client";

import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggle } = useTheme();

  const isDark = theme === "dark";

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.5rem 3rem",
        background: isDark ? "transparent" : "rgba(245, 240, 239, 0.95)",
        transition: "background 0.6s ease",
      }}
    >
      <span
        style={{
          fontFamily: "Cormorant Garamond, serif",
          fontSize: "1.25rem",
          fontWeight: 300,
          letterSpacing: "0.15em",
          color: isDark ? "#F5D0CC" : "#150F14",
          transition: "color 0.6s ease",
        }}
      >
        AXIOM
      </span>

      <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
        <a href="/status" className="nav-link">Status</a>
        <a href="/log" className="nav-link">Terminal</a>
        <a href="#access" className="nav-link">Request Access</a>
        <button onClick={toggle} className="expose-btn">
          {isDark ? "Expose" : "Conceal"}
        </button>
      </div>

      <style>{`
        .nav-link {
          font-family: "JetBrains Mono", monospace;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: ${isDark ? "#8A6E6C" : "#6A4A48"};
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .nav-link:hover { color: ${isDark ? "#F5D0CC" : "#150F14"}; }
        .expose-btn {
          font-family: "JetBrains Mono", monospace;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #C0392B;
          background: transparent;
          border: 1px solid #C0392B;
          padding: 0.4rem 1rem;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        .expose-btn:hover { background: rgba(192, 57, 43, 0.1); }
      `}</style>
    </nav>
  );
}