"use client";

import { useEffect, useState } from "react";
import PageTransition from "../components/PageTransition";

const systems = [
  { name: "Reasoning Engine", status: "operational", uptime: "99.98%" },
  { name: "Execution Layer", status: "operational", uptime: "99.95%" },
  { name: "Context Model", status: "operational", uptime: "100.00%" },
  { name: "Memory Index", status: "degraded", uptime: "97.21%" },
  { name: "Silent Relay", status: "operational", uptime: "99.99%" },
];

const incidents = [
  { date: "2026-03-18", title: "Memory Index latency spike", body: "Elevated response times detected in memory retrieval layer. Root cause identified as index fragmentation. Partial mitigation applied. Full resolution in progress.", status: "ongoing" },
  { date: "2026-03-11", title: "Execution Layer brief interruption", body: "A 4-minute interruption affected task execution for a subset of active objectives. All affected tasks were automatically rescheduled. No data loss occurred.", status: "resolved" },
  { date: "2026-02-28", title: "Scheduled maintenance", body: "Planned downtime for context model retraining. All systems returned to full operation within the estimated window.", status: "resolved" },
];

export default function StatusPage() {
  const [threads, setThreads] = useState(847);
  const [latency, setLatency] = useState(12);

  useEffect(() => {
    const interval = setInterval(() => {
      setThreads((p) => p + Math.floor(Math.random() * 6) - 2);
      setLatency((p) => Math.max(8, p + Math.floor(Math.random() * 4) - 2));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const allOperational = systems.every((s) => s.status === "operational");

  return (
    <PageTransition>
      <div className="status-page">
        <div className="status-inner">
          <a href="/" className="back-link">back to surface</a>
          <p className="section-label">System Status</p>
          <h1 className="status-heading">
            {allOperational ? "All systems operational." : "Partial degradation detected."}
          </h1>
          <p className="status-meta">{threads} active threads &nbsp;&nbsp; {latency}ms avg latency</p>
          <div className="systems-list">
            {systems.map((sys, i) => (
              <div key={i} className="system-row">
                <div className="system-left">
                  <span className="status-dot" style={{ background: sys.status === "operational" ? "#4CAF50" : sys.status === "degraded" ? "#E8756A" : "#C0392B" }} />
                  <span className="system-name">{sys.name}</span>
                </div>
                <div className="system-right">
                  <span className="system-uptime">{sys.uptime}</span>
                  <span className="system-status" style={{ color: sys.status === "operational" ? "#4CAF50" : "#E8756A" }}>{sys.status}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="section-label">Incident Log</p>
          <div className="incidents-list">
            {incidents.map((inc, i) => (
              <div key={i} className="incident">
                <div className="incident-header">
                  <span className="incident-title">{inc.title}</span>
                  <span className="incident-status" style={{ color: inc.status === "ongoing" ? "#E8756A" : "#8A6E6C" }}>{inc.status}</span>
                </div>
                <p className="incident-date">{inc.date}</p>
                <p className="incident-body">{inc.body}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          .status-page { min-height: 100vh; background: #080608; padding: 6rem 2rem 4rem; }
          .status-inner { max-width: 720px; margin: 0 auto; }
          .back-link { font-family: "JetBrains Mono", monospace; font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase; color: #3A2A28; text-decoration: none; display: block; margin-bottom: 4rem; transition: color 0.3s ease; }
          .back-link:hover { color: #8A6E6C; }
          .section-label { font-family: "JetBrains Mono", monospace; font-size: 0.7rem; letter-spacing: 0.3em; color: #C0392B; text-transform: uppercase; margin-bottom: 1rem; }
          .status-heading { font-family: "Cormorant Garamond", serif; font-size: clamp(2rem, 5vw, 3rem); font-weight: 300; color: #F5D0CC; margin-bottom: 0.75rem; line-height: 1.2; }
          .status-meta { font-family: "JetBrains Mono", monospace; font-size: 0.75rem; color: #8A6E6C; margin-bottom: 4rem; }
          .systems-list { border-top: 1px solid #1A0F0E; margin-bottom: 4rem; }
          .system-row { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #1A0F0E; padding: 1.25rem 0; }
          .system-left { display: flex; align-items: center; }
          .status-dot { display: inline-block; width: 6px; height: 6px; border-radius: 50%; margin-right: 0.75rem; }
          .system-name { font-family: "Inter", sans-serif; font-size: 0.9rem; color: #F5D0CC; }
          .system-right { display: flex; gap: 2rem; align-items: center; }
          .system-uptime { font-family: "JetBrains Mono", monospace; font-size: 0.7rem; color: #8A6E6C; }
          .system-status { font-family: "JetBrains Mono", monospace; font-size: 0.65rem; letter-spacing: 0.1em; text-transform: uppercase; }
          .incidents-list { display: flex; flex-direction: column; gap: 2.5rem; }
          .incident-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; }
          .incident-title { font-family: "Inter", sans-serif; font-size: 0.95rem; color: #F5D0CC; }
          .incident-status { font-family: "JetBrains Mono", monospace; font-size: 0.65rem; letter-spacing: 0.1em; text-transform: uppercase; }
          .incident-date { font-family: "JetBrains Mono", monospace; font-size: 0.65rem; color: #3A2A28; margin-bottom: 0.75rem; }
          .incident-body { font-family: "Inter", sans-serif; font-size: 0.875rem; line-height: 1.8; color: #8A6E6C; }
        `}</style>
      </div>
    </PageTransition>
  );
}