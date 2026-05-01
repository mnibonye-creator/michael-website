import Layout from "../components/Layout";

const roles = [
  {
    company: "EY-Parthenon",
    title: "Consultant",
    meta: "Strategy Consulting · M&A",
    logo: "/logos/ey-parthenon.svg",
    skills: "M&A governance · Business Development · strategic analysis",
    impact: "Drove cross-functional deal readiness on a multibillion-dollar carve-out and developed proposals to capture new market opportunities.",
  },
  {
    company: "MTN",
    title: "Manager, Business Strategy",
    meta: "Telecommunications · Corporate Strategy",
    logo: "/logos/mtn.svg",
    skills: "Enterprise strategy · portfolio optimization · executive reporting",
    impact: "Delivered $18.5M in sustainable cost savings and supported revenue growth through cross-selling by designing a consumer product portfolio model that streamlined the portfolio by 80%.",
  },
  {
    company: "Transport Services Limited (TSL)",
    title: "Chief of Staff",
    meta: "Operations · Executive Leadership",
    logo: "/logos/tsl.svg",
    skills: "Operational leadership · project execution · cross-functional coordination",
    impact: "Increased logistics fleet capacity by 56% in six months and delivered a $150K office redesign ahead of schedule with ~$20K in cost savings.",
  },
  {
    company: "KPMG",
    title: "Analyst → Senior Associate",
    meta: "Management Consulting · Transformation",
    logo: "/logos/kpmg.svg",
    skills: "Change management · operating model design · process improvement",
    impact: "Enabled a 3% revenue uplift for a tier-1 bank through a CRM transformation, and reduced back-office process turnaround time by 15% for an educational services client.",
  },
];

export default function Experience() {
  return (
    <Layout>
      <section style={container}>
        <header style={header}>
          <p style={eyebrow}>Experience</p>
          <h1 style={title}>
            Strategy, transformation, and execution across complex organizations.
          </h1>
          <p style={intro}>
            A cross-sector foundation spanning management consulting, telecommunications,
            corporate strategy, operating model design, and executive-level transformation —
            with measurable results at every stage.
          </p>
        </header>

        <div style={grid}>
          {roles.map((role, index) => (
            <article style={card} key={role.company}>
              <div style={number}>0{index + 1}</div>

              <div style={roleBlock}>
                <p style={meta}>{role.meta}</p>
                <div style={companyRow}>
                  <h2 style={company}>{role.company}</h2>
                  {role.logo && (
                    <img
                      src={role.logo}
                      alt={role.company}
                      style={companyLogo}
                    />
                  )}
                </div>
                <p style={roleTitle}>{role.title}</p>
                <p style={period}>{role.period}</p>
              </div>

              <div style={divider} />

              <div style={roleDetail}>
                <p style={skillsLine}>{role.skills}</p>
                <p style={impactLine}>{role.impact}</p>
              </div>
            </article>
          ))}
        </div>

        {/* ── Education ── */}
        <div style={educationSection}>
          <p style={eduEyebrow}>Education</p>
          <div style={eduCard}>
            <div style={eduLogoWrap}>
              <img src="/logos/georgetown.svg" alt="Georgetown University" style={eduLogo} />
            </div>
            <div>
              <h3 style={eduSchool}>Georgetown University</h3>
              <p style={eduDegree}>MBA · McDonough School of Business · Class of 2026</p>
              <p style={eduDetails}>
                Lo Family Scholar &nbsp;·&nbsp; Dean's List (Top 10%) &nbsp;·&nbsp; Co-President, Georgetown Consulting Club
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

const header = {
  maxWidth: "900px",
  marginBottom: "52px",
  textAlign: "left",
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
  margin: "0 0 24px",
};

const intro = {
  color: "#cbd5e1",
  fontSize: "20px",
  lineHeight: "1.65",
  maxWidth: "780px",
  margin: 0,
};

const grid = {
  display: "grid",
  gap: "18px",
};

const card = {
  display: "grid",
  gridTemplateColumns: "60px 260px 1px 1fr",
  gap: "28px",
  alignItems: "start",
  padding: "30px",
  borderRadius: "24px",
  border: "1px solid rgba(255,255,255,0.10)",
  background: "rgba(255,255,255,0.045)",
};

const number = {
  color: "rgba(147,197,253,0.55)",
  fontSize: "14px",
  fontWeight: "900",
  letterSpacing: "0.12em",
  paddingTop: "4px",
};

const roleBlock = {
  textAlign: "left",
};

const meta = {
  color: "#93c5fd",
  fontSize: "11px",
  fontWeight: "850",
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  margin: "0 0 12px",
};

const companyRow = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "6px",
};

const companyLogo = {
  height: "20px",
  width: "auto",
  filter: "brightness(0) invert(1)",
  opacity: 0.7,
  flexShrink: 0,
};

const company = {
  color: "#f8fafc",
  fontSize: "26px",
  margin: 0,
  letterSpacing: "-0.03em",
};

const roleTitle = {
  color: "#cbd5e1",
  fontSize: "15px",
  margin: "4px 0 6px",
};

const period = {
  color: "#475569",
  fontSize: "13px",
  fontWeight: "600",
  letterSpacing: "0.04em",
  margin: 0,
};

const divider = {
  width: "1px",
  height: "100%",
  background: "rgba(255,255,255,0.10)",
};

const roleDetail = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const skillsLine = {
  color: "#64748b",
  fontSize: "13px",
  fontWeight: "600",
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  margin: 0,
};

const impactLine = {
  color: "#dbeafe",
  fontSize: "16px",
  lineHeight: "1.7",
  margin: 0,
};

const educationSection = {
  marginTop: "56px",
};

const eduEyebrow = {
  color: "#93c5fd",
  fontSize: "13px",
  fontWeight: "800",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  marginBottom: "20px",
};

const eduCard = {
  display: "flex",
  alignItems: "center",
  gap: "28px",
  padding: "28px 32px",
  borderRadius: "24px",
  border: "1px solid rgba(255,255,255,0.10)",
  background: "rgba(255,255,255,0.045)",
};

const eduLogoWrap = {
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "14px",
  padding: "14px 18px",
  flexShrink: 0,
};

const eduLogo = {
  height: "24px",
  width: "auto",
  display: "block",
  filter: "brightness(0) invert(1)",
  opacity: 0.7,
};

const eduSchool = {
  color: "#f8fafc",
  fontSize: "22px",
  fontWeight: "700",
  letterSpacing: "-0.03em",
  margin: "0 0 6px",
};

const eduDegree = {
  color: "#cbd5e1",
  fontSize: "16px",
  margin: "0 0 8px",
};

const eduDetails = {
  color: "#64748b",
  fontSize: "14px",
  margin: 0,
};
