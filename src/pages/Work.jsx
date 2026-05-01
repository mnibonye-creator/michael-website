import Layout from "../components/Layout";

const projects = [
  {
    label: "Client Strategy Project",
    title: "Regional Transportation Company: Pricing & Competitor Benchmarking",
    context:
      "Supported a regional transportation business in strengthening its federal contracting competitiveness through pricing and benchmark analysis.",
    challenge:
      "The client needed clearer visibility into how competitors were pricing across transportation categories and how aggressive market pricing affected bid strategy.",
    approach:
      "Built a competitor pricing benchmark model, analyzed capacity-tier pricing patterns, and translated the findings into practical bidding insights for leadership.",
    impact:
      "Validated leadership hypotheses, surfaced where new entrants were undercutting rates, and supported the development of a reusable pricing decision tool.",
    tags: ["Pricing Strategy", "Benchmarking", "Federal Contracting"],
  },
  {
    label: "Market Entry Strategy",
    title: "Specialty Coffee Exporter: Australia & New Zealand Market Entry",
    context:
      "Developed market entry analysis for a specialty coffee exporter evaluating growth opportunities in Australia and New Zealand.",
    challenge:
      "The client needed to identify priority cities, understand specialty coffee buying behavior, and clarify where to focus outreach in a relationship-driven market.",
    approach:
      "Built a weighted city prioritization model, analyzed market attractiveness indicators, and conducted buyer research on sourcing priorities, importer relationships, and direct trade.",
    impact:
      "Created a focused market-entry roadmap that clarified target cities, buyer segments, and outreach strategy for specialty coffee roasters and importers.",
    tags: ["Market Entry", "Weighted Scoring", "Buyer Research"],
  },
];

export default function Work() {
  return (
    <Layout>
      <section style={container}>
        <header style={header}>
          <p style={eyebrow}>Case Studies</p>
          <h1 style={title}>
            Applied strategy, analytics, and execution.
          </h1>
          <p style={intro}>
            A closer look at real client projects where structured analysis was
            translated into practical recommendations and decision-ready tools.
          </p>
        </header>

        <div style={projectGrid}>
          {projects.map((project, index) => (
            <article style={card} key={project.title}>
              <div style={topRow}>
                <span style={number}>0{index + 1}</span>
                <span style={label}>{project.label}</span>
              </div>

              <h2 style={projectTitle}>{project.title}</h2>
              <p style={context}>{project.context}</p>

              <div style={caseGrid}>
                <div>
                  <p style={sectionLabel}>Challenge</p>
                  <p style={caseText}>{project.challenge}</p>
                </div>

                <div>
                  <p style={sectionLabel}>Approach</p>
                  <p style={caseText}>{project.approach}</p>
                </div>

                <div>
                  <p style={sectionLabel}>Impact</p>
                  <p style={caseText}>{project.impact}</p>
                </div>
              </div>

              <div style={tagRow}>
                {project.tags.map((tag) => (
                  <span style={tagStyle} key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
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
  maxWidth: "880px",
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
  fontSize: "56px",
  lineHeight: "1",
  letterSpacing: "-0.05em",
  margin: "0 0 24px",
  maxWidth: "860px",
};

const intro = {
  color: "#cbd5e1",
  fontSize: "20px",
  lineHeight: "1.65",
  maxWidth: "760px",
  margin: 0,
};

const projectGrid = {
  display: "grid",
  gap: "28px",
};

const card = {
  padding: "36px",
  borderRadius: "28px",
  border: "1px solid rgba(255,255,255,0.10)",
  background:
    "linear-gradient(145deg, rgba(255,255,255,0.075), rgba(255,255,255,0.035))",
};

const topRow = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "26px",
};

const number = {
  color: "rgba(147,197,253,0.65)",
  fontSize: "14px",
  fontWeight: "900",
  letterSpacing: "0.12em",
};

const label = {
  color: "#93c5fd",
  fontSize: "12px",
  fontWeight: "850",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
};

const projectTitle = {
  color: "#f8fafc",
  fontSize: "32px",
  lineHeight: "1.15",
  letterSpacing: "-0.035em",
  margin: "0 0 16px",
  maxWidth: "900px",
};

const context = {
  color: "#cbd5e1",
  fontSize: "18px",
  lineHeight: "1.65",
  maxWidth: "860px",
  marginBottom: "30px",
};

const caseGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: "32px",
  paddingTop: "26px",
  borderTop: "1px solid rgba(255,255,255,0.10)",
};

const sectionLabel = {
  color: "#93c5fd",
  fontSize: "12px",
  fontWeight: "850",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  marginBottom: "10px",
};

const caseText = {
  color: "#dbeafe",
  fontSize: "15px",
  lineHeight: "1.65",
  margin: 0,
};

const tagRow = {
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
  marginTop: "28px",
};

const tagStyle = {
  color: "#cbd5e1",
  fontSize: "13px",
  fontWeight: "700",
  padding: "8px 12px",
  borderRadius: "999px",
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.04)",
};
