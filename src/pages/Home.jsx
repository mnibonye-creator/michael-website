export default function Home() {
  return (
    <main style={page}>

      {/* ── Navigation ─────────────────────────────────────────────────────── */}
      <nav style={nav}>
        <a href="/" style={logoStyle}>Michael Ibonye</a>
        <div style={navLinks}>
          <a style={navLink} href="/about">About</a>
          <a style={navLink} href="/experience">Experience</a>
          <a style={navLink} href="/work">Case Studies</a>
          <a style={navLink} href="/contact">Contact</a>
        </div>
      </nav>

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section style={hero}>
        <div>
          <p style={eyebrow}>Strategy &amp; Transformation</p>

          <h1 style={headline}>
            Helping organizations turn strategic ambition into measurable impact.
          </h1>

          <div style={proofPoints}>
            <p style={proofLine}>
              <span style={proofMetric}>$18.5M</span> in sustainable cost savings delivered at MTN.
            </p>
            <p style={proofLine}>
              <span style={proofMetric}>M&amp;A carve-out governance</span> on a multibillion-dollar deal at EY-Parthenon.
            </p>
            <p style={proofLine}>
              <span style={proofMetric}>A decade</span> of strategy across Africa and the United States.
            </p>
          </div>

          <div style={buttonRow}>
            <a href="/work" style={primaryButton}>View Selected Work</a>
            <a href="/experience" style={secondaryButton}>Explore Experience</a>
          </div>
        </div>

        <div style={photoWrap}>
          <img
            src="/michael-ibonye-headshot.png"
            alt="Michael Ibonye"
            style={photo}
          />
        </div>
      </section>

      {/* ── Impact Metrics Strip ───────────────────────────────────────────── */}
      <section style={metricsStrip}>
        {[
          { number: "$18.5M", label: "Cost Savings Delivered" },
          { number: "9%",    label: "Revenue Growth Enabled" },
          { number: "10+",   label: "Years of Strategy Experience" },
        ].map(({ number, label }, i, arr) => (
          <div key={label} style={metricGroup}>
            <div style={metricItem}>
              <span style={metricNumber}>{number}</span>
              <span style={metricLabel}>{label}</span>
            </div>
            {i < arr.length - 1 && <div style={metricDivider} />}
          </div>
        ))}
      </section>

      {/* ── Consulting Teaser ─────────────────────────────────────────────── */}
      <section style={consultingTeaser}>
        <div style={teaserInner}>
          <span style={teaserBadge}>Available for Consulting Engagements</span>
          <p style={teaserText}>
            Working with growth-stage companies and leadership teams on strategy,
            operating model design, and business transformation.
          </p>
          <a href="/contact" style={teaserCta}>Start a conversation →</a>
        </div>
      </section>

      {/* ── Credential Bar ────────────────────────────────────────────────── */}
      <section style={credentialBar}>
        {[
          { name: "Georgetown MBA", src: "/logos/georgetown.svg"   },
          { name: "EY-Parthenon",   src: "/logos/ey-parthenon.svg" },
          { name: "MTN",            src: "/logos/mtn.svg"          },
          { name: "KPMG",           src: "/logos/kpmg.svg"         },
          { name: "TSL",            src: "/logos/tsl.svg"          },
        ].map(({ name, src }) => (
          <div key={name} style={credentialBadge}>
            <img src={src} alt={name} style={credentialLogo} />
          </div>
        ))}
        <div style={credentialTagline}>
          Strategy&nbsp;•&nbsp;Transformation&nbsp;•&nbsp;Growth
        </div>
      </section>

    </main>
  );
}


/* ── Styles ──────────────────────────────────────────────────────────────── */

const page = {
  minHeight: "100vh",
  background:
    "radial-gradient(circle at top right, rgba(37,99,235,0.20), transparent 32%), #0b1220",
  color: "white",
  fontFamily: "Inter, Arial, sans-serif",
  padding: "32px 48px 64px",
};

const nav = {
  maxWidth: "1180px",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "8px 0 72px",
};

const logoStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "22px",
  fontWeight: "800",
  letterSpacing: "-0.03em",
};

const navLinks = {
  display: "flex",
  gap: "32px",
};

const navLink = {
  color: "#cbd5e1",
  textDecoration: "none",
  fontSize: "15px",
  fontWeight: "500",
};

const hero = {
  maxWidth: "1180px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "1.1fr 0.9fr",
  gap: "72px",
  alignItems: "center",
};

const eyebrow = {
  color: "#93c5fd",
  fontSize: "14px",
  fontWeight: "800",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  marginBottom: "22px",
};

const headline = {
  fontSize: "68px",
  lineHeight: "0.98",
  letterSpacing: "-0.055em",
  maxWidth: "760px",
  margin: "0 0 32px",
  color: "#f8fafc",
};

const proofPoints = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  marginBottom: "38px",
};

const proofLine = {
  color: "#94a3b8",
  fontSize: "18px",
  lineHeight: "1.5",
  margin: 0,
};

const proofMetric = {
  color: "#f1f5f9",
  fontWeight: "700",
};

const buttonRow = {
  display: "flex",
  gap: "16px",
  flexWrap: "wrap",
};

const primaryButton = {
  background: "#f8fafc",
  color: "#0b1220",
  padding: "15px 28px",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: "800",
  fontSize: "15px",
  boxShadow: "0 18px 40px rgba(0,0,0,0.22)",
};

const secondaryButton = {
  border: "1.5px solid rgba(255,255,255,0.65)",
  background: "rgba(255,255,255,0.07)",
  color: "#f8fafc",
  padding: "15px 28px",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: "700",
  fontSize: "15px",
};

const photoWrap = {
  justifySelf: "end",
  padding: "12px",
  borderRadius: "34px",
  background:
    "linear-gradient(145deg, rgba(255,255,255,0.18), rgba(255,255,255,0.04))",
  boxShadow: "0 30px 90px rgba(0,0,0,0.38)",
};

const photo = {
  width: "390px",
  maxWidth: "100%",
  display: "block",
  borderRadius: "26px",
};

const metricsStrip = {
  maxWidth: "1180px",
  margin: "72px auto 0",
  padding: "40px 48px",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.10)",
  borderRadius: "20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "24px",
};

const metricGroup = {
  display: "flex",
  alignItems: "center",
  gap: "24px",
  flex: "1 1 auto",
};

const metricItem = {
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  flex: 1,
};

const metricNumber = {
  fontSize: "36px",
  fontWeight: "800",
  color: "#f1f5f9",
  letterSpacing: "-0.04em",
  lineHeight: 1,
};

const metricLabel = {
  fontSize: "13px",
  color: "#64748b",
  fontWeight: "600",
  textTransform: "uppercase",
  letterSpacing: "0.06em",
};

const metricDivider = {
  width: "1px",
  height: "40px",
  background: "rgba(255,255,255,0.12)",
  flexShrink: 0,
};

const consultingTeaser = {
  maxWidth: "1180px",
  margin: "24px auto 0",
  padding: "28px 36px",
  background:
    "linear-gradient(135deg, rgba(37,99,235,0.15), rgba(37,99,235,0.05))",
  border: "1px solid rgba(37,99,235,0.35)",
  borderRadius: "16px",
};

const teaserInner = {
  display: "flex",
  alignItems: "center",
  gap: "24px",
  flexWrap: "wrap",
};

const teaserBadge = {
  background: "rgba(37,99,235,0.30)",
  color: "#93c5fd",
  fontSize: "12px",
  fontWeight: "800",
  letterSpacing: "0.10em",
  textTransform: "uppercase",
  padding: "6px 14px",
  borderRadius: "999px",
  whiteSpace: "nowrap",
  flexShrink: 0,
};

const teaserText = {
  color: "#94a3b8",
  fontSize: "15px",
  lineHeight: "1.6",
  flex: 1,
  margin: 0,
};

const teaserCta = {
  color: "#93c5fd",
  fontSize: "14px",
  fontWeight: "700",
  textDecoration: "none",
  whiteSpace: "nowrap",
  flexShrink: 0,
};

const credentialBar = {
  maxWidth: "1180px",
  margin: "48px auto 0",
  padding: "24px 0 0",
  borderTop: "1px solid rgba(255,255,255,0.10)",
  display: "flex",
  alignItems: "center",
  gap: "12px",
  flexWrap: "wrap",
};

const credentialBadge = {
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "8px",
  padding: "8px 16px",
};

const credentialLogo = {
  height: "18px",
  width: "auto",
  display: "block",
  filter: "brightness(0) invert(1)",
  opacity: 0.55,
};

const credentialTagline = {
  marginLeft: "auto",
  color: "#475569",
  fontSize: "13px",
  fontWeight: "600",
  letterSpacing: "0.08em",
};
