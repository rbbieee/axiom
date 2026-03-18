"use client";

import { useEffect, useState } from "react";

const logLines = [
  "AXIOM v1.0 initialized",
  "Loading context model...",
  "Context loaded. 847 variables mapped.",
  "Objective received: restructure Q3 pipeline",
  "Analyzing dependencies...",
  "Identified 12 bottlenecks. Prioritizing by impact.",
  "Delegating subtasks to execution layer...",
  "Subtask 1 complete. Time elapsed: 0.4s",
  "Subtask 2 complete. Time elapsed: 0.9s",
  "Subtask 3 failed. Rerouting...",
  "Alternative path found. Resuming.",
  "All subtasks resolved.",
  "Outcome: pipeline restructured. Efficiency +34%.",
  "No further input required.",
  "_",
];

function getLineColor(line: string): string {
  if (line === "_") return "#C0392B";
  if (line.includes("failed")) return "#E8756A";
  if (line.includes("complete") || line.includes("Outcome")) return "#F5D0CC";
  return "#8A6E6C";
}

export default function TheLog() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev >= logLines.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        padding: "8rem 2rem",
        maxWidth: "960px",
        margin: "0 auto",
      }}
    >
      <p
        style={{
          fontFamily: "JetBrains Mono, monospace",
          fontSize: "0.7rem",
          letterSpacing: "0.3em",
          color: "#C0392B",
          textTransform: "uppercase",
          marginBottom: "3rem",
        }}
      >
        Live log
      </p>

      <div
        style={{
          background: "#0D0A0C",
          border: "1px solid #2A1A18",
          padding: "2.5rem",
        }}
      >
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2rem" }}>
          {["#3A1A18", "#2A1510", "#1A2A18"].map((color, i) => (
            <div
              key={i}
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: color,
              }}
            />
          ))}
        </div>

        <div style={{ minHeight: "320px" }}>
          {logLines.slice(0, visibleCount).map((line, i) => (
            <p
              key={i}
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "0.8rem",
                lineHeight: 2,
                color: getLineColor(line),
              }}
            >
              {line !== "_" && (
                <span style={{ color: "#2A1A18", marginRight: "1rem" }}>
                  &gt;
                </span>
              )}
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}