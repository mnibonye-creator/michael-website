import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <section style={container}>
        <p style={eyebrow}>About</p>

        <h1 style={title}>
          A strategist with a global perspective and an operator's instinct.
        </h1>

        <div style={contentGrid}>
          {/* ── Left column: bio ── */}
          <div>
            <p style={lead}>
              I'm a strategy and transformation professional with experience
              across management consulting, telecommunications, and corporate
              strategy — with a track record of turning ambition into measurable
              results across Africa and the United States.
            </p>

            <p style={text}>
              At MTN Nigeria, I led enterprise-wide efficiency programs that
              delivered $18.5M in sustainable cost savings and built product
              performance models that informed executive trade-off decisions,
              supporting revenue growth. At EY-Parthenon, I drove
              cross-functional governance for a multibillion-dollar carve-out,
              implementing RAID and TSA frameworks to ensure deal readiness.
            </p>

            <p style={text}>
              My career has been shaped by one central question: how do
              organizations move from ambition to execution? I've worked on
              transformation challenges that demand analytical rigor,
              stakeholder alignment, and the kind of practical judgment that
              doesn't show up in frameworks.
            </p>

            <p style={text}>
              I'm especially drawn to sectors that shape economic development —
              telecommunications, infrastructure, energy, financial services,
              and global markets.
            </p>

            <div style={ctaRow}>
              <a href="/experience" style={primaryCta}>View My Experience</a>
              <a href="/contact" style={secondaryCta}>Let's Connect</a>
            </div>
          </div>

          {/* ── Right column: cards ── */}
          <div style={sidebar}>
            <div style={photoWrap}>
              <img
                src="/michael-ibonye-headshot-2.png"
                alt="Michael Ibonye"
                style={photo}
              />
            </div>

            <div style={card}>
              <h2 style={cardTitle}>Focus Areas</h2>
              <ul style={list}>
                <li>Enterprise strategy &amp; transformation</li>
                <li>Operating model design</li>
                <li>Telecoms &amp; infrastructure</li>
                <li>Financial services</li>
                <li>Market entry &amp; growth strategy</li>
                <li>Executive communication</li>
              </ul>
            </div>

            <div style={card}>
              <h2 style={cardTitle}>Education</h2>
              <div style={eduEntry}>
                <p style={eduSchool}>Georgetown University</p>
                <p style={eduDegree}>MBA, McDonough School of Business</p>
                <ul style={eduList}>
                  <li>Lo Family Scholar</li>
                  <li>Dean's List — Top 10%</li>
                  <li>Co-President, Georgetown Consulting Club</li>
                </ul>
              </div>
            </div>

            <div style={currentCard}>
              <p style={currentLabel}>Currently</p>
              <p style={currentText}>
                MBA Candidate at Georgetown McDonough, graduating May 2026.
                Open to Corporate Strategy, Business Development, and Strategy
                Consulting roles.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

const container = {
  maxWidth: "1180px",
  margin: "0 auto",
  paddingBottom: "32px",
};

const eyebrow = {
  color: "#93c5fd",
  fontSize: "13px",
  fontWeight: "800",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  marginBottom: "18px",
};

const title = {
  color: "#f8fafc",
  fontSize: "58px",
  lineHeight: "1",
  letterSpacing: "-0.05em",
  maxWidth: "900px",
  margin: "0 0 48px",
};

const contentGrid = {
  display: "grid",
  gridTemplateColumns: "1.3fr 0.7fr",
  gap: "64px",
  alignItems: "start",
};

const lead = {
  color: "#f8fafc",
  fontSize: "22px",
  lineHeight: "1.6",
  marginBottom: "28px",
};

const text = {
  color: "#cbd5e1",
  fontSize: "18px",
  lineHeight: "1.75",
  marginBottom: "24px",
};

const highlight = {
  color: "#f1f5f9",
  fontWeight: "700",
};

const ctaRow = {
  display: "flex",
  gap: "14px",
  flexWrap: "wrap",
  marginTop: "36px",
};

const primaryCta = {
  background: "#f8fafc",
  color: "#0b1220",
  padding: "14px 24px",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: "800",
  fontSize: "15px",
};

const secondaryCta = {
  border: "1.5px solid rgba(255,255,255,0.55)",
  background: "rgba(255,255,255,0.06)",
  color: "#f8fafc",
  padding: "14px 24px",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: "700",
  fontSize: "15px",
};

const sidebar = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

const card = {
  padding: "28px",
  borderRadius: "24px",
  border: "1px solid rgba(255,255,255,0.10)",
  background: "rgba(255,255,255,0.045)",
};

const cardTitle = {
  color: "#f8fafc",
  fontSize: "18px",
  fontWeight: "700",
  marginTop: 0,
  marginBottom: "16px",
  letterSpacing: "-0.02em",
};

const list = {
  color: "#dbeafe",
  fontSize: "16px",
  lineHeight: "2",
  paddingLeft: "20px",
  margin: 0,
};

const eduEntry = {
  display: "flex",
  flexDirection: "column",
  gap: "2px",
};

const eduSchool = {
  color: "#f8fafc",
  fontWeight: "700",
  fontSize: "17px",
  margin: "0 0 2px",
};

const eduDegree = {
  color: "#cbd5e1",
  fontSize: "15px",
  margin: "0 0 2px",
};

const eduMeta = {
  color: "#64748b",
  fontSize: "13px",
  margin: "0 0 12px",
};

const eduList = {
  color: "#dbeafe",
  fontSize: "14px",
  lineHeight: "1.9",
  paddingLeft: "18px",
  margin: 0,
};

const currentCard = {
  padding: "22px 28px",
  borderRadius: "20px",
  border: "1px solid rgba(37,99,235,0.35)",
  background: "linear-gradient(135deg, rgba(37,99,235,0.12), rgba(37,99,235,0.04))",
};

const currentLabel = {
  color: "#93c5fd",
  fontSize: "11px",
  fontWeight: "800",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  margin: "0 0 10px",
};

const currentText = {
  color: "#94a3b8",
  fontSize: "14px",
  lineHeight: "1.7",
  margin: 0,
};

const photoWrap = {
  borderRadius: "24px",
  overflow: "hidden",
  border: "1px solid rgba(255,255,255,0.10)",
  background: "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
  boxShadow: "0 24px 64px rgba(0,0,0,0.35)",
};

const photo = {
  width: "100%",
  display: "block",
  borderRadius: "24px",
};
