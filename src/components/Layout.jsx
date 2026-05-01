import { useLocation } from "react-router-dom";

export default function Layout({ children }) {
  const { pathname } = useLocation();

  const linkStyle = (href) => ({
    ...navLink,
    color: pathname === href ? "#f8fafc" : "#94a3b8",
    fontWeight: pathname === href ? "700" : "500",
    borderBottom: pathname === href ? "2px solid #3b82f6" : "2px solid transparent",
    paddingBottom: "4px",
  });

  return (
    <main style={page}>
      <nav style={nav}>
        <a href="/" style={logo}>Michael Ibonye</a>

        <div style={navLinks}>
          <a style={linkStyle("/about")} href="/about">About</a>
          <a style={linkStyle("/experience")} href="/experience">Experience</a>
          <a style={linkStyle("/work")} href="/work">Case Studies</a>
          <a style={linkStyle("/contact")} href="/contact">Contact</a>
        </div>
      </nav>

      {children}

      <footer style={footer}>
        <div style={footerInner}>
          <span style={footerName}>Michael Ibonye</span>
          <div style={footerLinks}>
            <a href="mailto:ibonyemichael@gmail.com" style={footerLink}>ibonyemichael@gmail.com</a>
            <span style={footerDot}>·</span>
            <a
              href="https://www.linkedin.com/in/michaelibonye"
              target="_blank"
              rel="noreferrer"
              style={footerLink}
            >
              LinkedIn
            </a>
          </div>
          <span style={footerCopy}>© {new Date().getFullYear()} Michael Ibonye</span>
        </div>
      </footer>
    </main>
  );
}

const page = {
  minHeight: "100vh",
  background:
    "radial-gradient(circle at top right, rgba(37,99,235,0.20), transparent 32%), #0b1220",
  color: "white",
  fontFamily: "Inter, Arial, sans-serif",
  padding: "32px 48px 0",
  display: "flex",
  flexDirection: "column",
};

const nav = {
  maxWidth: "1180px",
  margin: "0 auto",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "8px 0 72px",
};

const logo = {
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
  textDecoration: "none",
  fontSize: "15px",
  transition: "color 0.15s ease",
};

const footer = {
  marginTop: "96px",
  borderTop: "1px solid rgba(255,255,255,0.08)",
  padding: "32px 0 40px",
};

const footerInner = {
  maxWidth: "1180px",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "16px",
};

const footerName = {
  color: "#f8fafc",
  fontWeight: "700",
  fontSize: "15px",
  letterSpacing: "-0.02em",
};

const footerLinks = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
};

const footerLink = {
  color: "#64748b",
  textDecoration: "none",
  fontSize: "14px",
  transition: "color 0.15s ease",
};

const footerDot = {
  color: "#334155",
  fontSize: "14px",
};

const footerCopy = {
  color: "#334155",
  fontSize: "13px",
};
