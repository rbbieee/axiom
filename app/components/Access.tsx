export default function Access() {
  return (
    <section
      id="access"
      style={{
        padding: "10rem 2rem",
        maxWidth: "600px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontFamily: "JetBrains Mono, monospace",
          fontSize: "0.7rem",
          letterSpacing: "0.3em",
          color: "#C0392B",
          textTransform: "uppercase",
          marginBottom: "2rem",
        }}
      >
        Request Access
      </p>

      <h2
        style={{
          fontFamily: "Cormorant Garamond, serif",
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 300,
          color: "#F5D0CC",
          lineHeight: 1.2,
          marginBottom: "1.5rem",
        }}
      >
        AXIOM is not for everyone.
      </h2>

      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "0.95rem",
          lineHeight: 1.8,
          color: "#8A6E6C",
          marginBottom: "3.5rem",
        }}
      >
        Access is granted by invitation only. Submit your contact and intended
        use. If AXIOM determines a fit, you will hear from us.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input
          type="text"
          placeholder="Your name"
          style={{
            background: "transparent",
            border: "1px solid #2A1A18",
            padding: "1rem 1.25rem",
            fontFamily: "Inter, sans-serif",
            fontSize: "0.9rem",
            color: "#F5D0CC",
            outline: "none",
            width: "100%",
          }}
        />
        <input
          type="email"
          placeholder="Your email"
          style={{
            background: "transparent",
            border: "1px solid #2A1A18",
            padding: "1rem 1.25rem",
            fontFamily: "Inter, sans-serif",
            fontSize: "0.9rem",
            color: "#F5D0CC",
            outline: "none",
            width: "100%",
          }}
        />
        <textarea
          placeholder="Intended use"
          rows={4}
          style={{
            background: "transparent",
            border: "1px solid #2A1A18",
            padding: "1rem 1.25rem",
            fontFamily: "Inter, sans-serif",
            fontSize: "0.9rem",
            color: "#F5D0CC",
            outline: "none",
            width: "100%",
            resize: "none",
          }}
        />
        <button
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "0.75rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#F5D0CC",
            background: "transparent",
            border: "1px solid #C0392B",
            padding: "1rem",
            cursor: "pointer",
            width: "100%",
            marginTop: "0.5rem",
          }}
        >
          Submit
        </button>
      </div>
    </section>
  );
}