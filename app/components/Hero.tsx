"use client";

import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

const phrases = [
  "Thinking.",
  "Planning.",
  "Executing.",
  "Adapting.",
  "Done.",
];

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    if (!deleting && displayed.length < current.length) {
      const timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, 80);
      return () => clearTimeout(timeout);
    }
    if (!deleting && displayed.length === current.length) {
      const timeout = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(timeout);
    }
    if (deleting && displayed.length > 0) {
      const timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1));
      }, 40);
      return () => clearTimeout(timeout);
    }
    if (deleting && displayed.length === 0) {
      setDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }
  }, [displayed, deleting, phraseIndex]);

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <p
        style={{
          fontFamily: "JetBrains Mono, monospace",
          fontSize: "0.75rem",
          letterSpacing: "0.3em",
          color: "#C0392B",
          marginBottom: "2rem",
          textTransform: "uppercase",
        }}
      >
        AXIOM / v1.0
      </p>

      <h1
        style={{
          fontFamily: "Cormorant Garamond, serif",
          fontSize: "clamp(3rem, 10vw, 8rem)",
          fontWeight: 300,
          lineHeight: 1,
          color: isDark ? "#F5D0CC" : "#150F14",
          marginBottom: "2rem",
          letterSpacing: "-0.02em",
          transition: "color 0.6s ease",
        }}
      >
        The last intelligence
        <br />
        you will ever need.
      </h1>

      <p
        style={{
          fontFamily: "JetBrains Mono, monospace",
          fontSize: "1rem",
          color: "#C0392B",
          height: "1.5rem",
          marginBottom: "1.5rem",
          letterSpacing: "0.1em",
        }}
      >
        {displayed}
        <span
          style={{
            borderRight: "2px solid #C0392B",
            marginLeft: "2px",
            animation: "blink 1s step-end infinite",
          }}
        />
      </p>

      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "1rem",
          color: isDark ? "#8A6E6C" : "#6A4A48",
          maxWidth: "420px",
          lineHeight: 1.7,
          marginBottom: "3rem",
          transition: "color 0.6s ease",
        }}
      >
        AXIOM does not assist. It decides, executes, and disappears. No
        interface. No explanation. Just outcomes.
      </p>

      <button
        style={{
          fontFamily: "JetBrains Mono, monospace",
          fontSize: "0.75rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: isDark ? "#F5D0CC" : "#150F14",
          background: "transparent",
          border: "1px solid #C0392B",
          padding: "0.9rem 2.5rem",
          cursor: "pointer",
          transition: "color 0.6s ease",
        }}
      >
        Request Access
      </button>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}