"use client";

export default function Navbar() {
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
      }}
    >
      <span
        style={{
          fontFamily: "Cormorant Garamond, serif",
          fontSize: "1.25rem",
          fontWeight: 300,
          letterSpacing: "0.15em",
          color: "#F5D0CC",
        }}
      >
        AXIOM
      </span>

      <a href="#access" className="nav-link">
        Request Access
      </a>

      <style>{`
        .nav-link {
          font-family: "JetBrains Mono", monospace;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #8A6E6C;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .nav-link:hover {
          color: #F5D0CC;
        }
      `}</style>
    </nav>
  );
}