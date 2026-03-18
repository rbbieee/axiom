export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #1A0F0E",
        padding: "3rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "960px",
        margin: "0 auto",
      }}
    >
      <span
        style={{
          fontFamily: "Cormorant Garamond, serif",
          fontSize: "1rem",
          fontWeight: 300,
          color: "#3A2A28",
          letterSpacing: "0.1em",
        }}
      >
        AXIOM
      </span>

      <span
        style={{
          fontFamily: "JetBrains Mono, monospace",
          fontSize: "0.65rem",
          color: "#3A2A28",
          letterSpacing: "0.15em",
        }}
      >
        The work continues.
      </span>
    </footer>
  );
}