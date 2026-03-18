"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
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
          color: "#F5D0CC",
          marginBottom: "2rem",
          letterSpacing: "-0.02em",
        }}
      >
        The last intelligence
        <br />
        you will ever need.
      </h1>

      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "1rem",
          color: "#8A6E6C",
          maxWidth: "420px",
          lineHeight: 1.7,
          marginBottom: "3rem",
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
          color: "#F5D0CC",
          background: "transparent",
          border: "1px solid #C0392B",
          padding: "0.9rem 2.5rem",
          cursor: "pointer",
          transition: "background 0.3s ease",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "rgba(192,57,43,0.15)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.background = "transparent")
        }
      >
        Request Access
      </button>
    </section>
  );
}