import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout>
      <section style={container}>
        <p style={eyebrow}>Contact</p>

        <h1 style={title}>Let's connect.</h1>

        <p style={intro}>
          I'm open to thoughtful conversations about corporate strategy,
          business transformation, telecoms, infrastructure, and global business
          leadership — and available for consulting engagements with
          growth-stage companies and executive teams.
        </p>

        <div style={card}>
          <div style={cardLeft}>
            <p style={cardHeading}>Get in touch</p>
            <p style={cardSub}>
              Whether you're exploring a potential role, a consulting
              engagement, or simply want to talk strategy — I'd be glad to hear
              from you.
            </p>
          </div>

          <div style={buttonGroup}>
            <a href="mailto:ibonyemichael@gmail.com" style={primaryContact}>
              Email me
            </a>

            <a
              href="https://www.linkedin.com/in/michaelibonye"
              target="_blank"
              rel="noreferrer"
              style={secondaryContact}
            >
              Connect on LinkedIn
            </a>

            <a
              href="/michael-ibonye-resume.pdf"
              target="_blank"
              rel="noreferrer"
              style={secondaryContact}
            >
              Download CV
            </a>
          </div>
        </div>

      </section>
    </Layout>
  );
}

const container = {
  maxWidth: "900px",
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
  fontSize: "64px",
  lineHeight: "1",
  letterSpacing: "-0.05em",
  margin: "0 0 24px",
};

const intro = {
  color: "#cbd5e1",
  fontSize: "21px",
  lineHeight: "1.65",
  maxWidth: "760px",
  marginBottom: "48px",
};

const card = {
  display: "flex",
  flexWrap: "wrap",
  gap: "32px",
  padding: "36px",
  borderRadius: "28px",
  border: "1px solid rgba(255,255,255,0.10)",
  background: "rgba(255,255,255,0.045)",
  alignItems: "center",
};

const cardLeft = {
  flex: "1 1 280px",
};

const cardHeading = {
  color: "#f8fafc",
  fontSize: "20px",
  fontWeight: "700",
  margin: "0 0 10px",
  letterSpacing: "-0.02em",
};

const cardSub = {
  color: "#64748b",
  fontSize: "15px",
  lineHeight: "1.6",
  margin: 0,
};

const buttonGroup = {
  display: "flex",
  flexWrap: "wrap",
  gap: "12px",
  alignItems: "center",
};

const primaryContact = {
  background: "#f8fafc",
  color: "#0b1220",
  padding: "14px 24px",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: "800",
  fontSize: "15px",
  whiteSpace: "nowrap",
};

const secondaryContact = {
  border: "1.5px solid rgba(255,255,255,0.55)",
  background: "rgba(255,255,255,0.06)",
  color: "#f8fafc",
  padding: "14px 24px",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: "700",
  fontSize: "15px",
  whiteSpace: "nowrap",
};
