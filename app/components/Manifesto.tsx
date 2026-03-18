export default function Manifesto() {
  return (
    <section
      style={{
        padding: "12rem 2rem",
        maxWidth: "720px",
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
        On intelligence
      </p>

      <p
        style={{
          fontFamily: "Cormorant Garamond, serif",
          fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
          fontWeight: 300,
          lineHeight: 1.6,
          color: "#F5D0CC",
          marginBottom: "2rem",
        }}
      >
        Every system before AXIOM was built to respond. To wait. To serve.
        We built something different.
      </p>

      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "1rem",
          lineHeight: 1.9,
          color: "#8A6E6C",
          marginBottom: "1.5rem",
        }}
      >
        AXIOM does not wait for instructions. It reads context, weighs
        outcomes, and moves. By the time you consider an action, AXIOM has
        already taken it, evaluated the result, and prepared the next three
        steps.
      </p>

      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "1rem",
          lineHeight: 1.9,
          color: "#8A6E6C",
          marginBottom: "1.5rem",
        }}
      >
        This is not automation. Automation follows rules. AXIOM understands
        intent. There is a difference, and that difference is everything.
      </p>

      <p
        style={{
          fontFamily: "Cormorant Garamond, serif",
          fontSize: "1.5rem",
          fontWeight: 300,
          fontStyle: "italic",
          color: "#F5D0CC",
          borderLeft: "1px solid #C0392B",
          paddingLeft: "1.5rem",
          marginTop: "3rem",
        }}
      >
        It does not assist. It decides.
      </p>
    </section>
  );
}