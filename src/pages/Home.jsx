export default function Home() {
  return (
    <main className="home-page">
      <style>{styles}</style>

      <nav className="nav">
        <a href="/" className="logo">Michael Ibonye</a>
        <div className="nav-links">
          <a href="/about">About</a>
          <a href="/experience">Experience</a>
          <a href="/work">Case Studies</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Strategy &amp; Transformation</p>

          <h1>
            Helping organizations turn strategic ambition into measurable impact.
          </h1>

          <div className="proof-points">
            <p><strong>$18.5M</strong> in sustainable cost savings delivered at MTN.</p>
            <p><strong>M&amp;A carve-out governance</strong> on a multibillion-dollar deal at EY-Parthenon.</p>
            <p><strong>A decade</strong> of strategy across Africa and the United States.</p>
          </div>

          <div className="button-row">
            <a href="/work" className="primary-button">View Selected Work</a>
            <a href="/experience" className="secondary-button">Explore Experience</a>
          </div>
        </div>

        <div className="photo-wrap">
          <img
            src="/michael-ibonye-headshot.png"
            alt="Michael Ibonye"
            className="photo"
          />
        </div>
      </section>

      <section className="metrics-strip">
        <div className="metric-item">
          <span>$18.5M</span>
          <p>Cost Savings Delivered</p>
        </div>
        <div className="metric-item">
          <span>9%</span>
          <p>Revenue Growth Enabled</p>
        </div>
        <div className="metric-item">
          <span>10+</span>
          <p>Years of Strategy Experience</p>
        </div>
      </section>

      <section className="consulting-teaser">
        <div className="teaser-content">
          <span>Available for Consulting Engagements</span>
          <p>
            Working with growth-stage companies and leadership teams on strategy,
            operating model design, and business transformation.
          </p>
        </div>
        <a href="/contact">Start a conversation →</a>
      </section>

      <section className="credential-bar">
        {[
          { name: "Georgetown MBA", src: "/logos/georgetown.svg" },
          { name: "EY-Parthenon", src: "/logos/ey-parthenon.svg" },
          { name: "MTN", src: "/logos/mtn.svg" },
          { name: "KPMG", src: "/logos/kpmg.svg" },
          { name: "TSL", src: "/logos/tsl.svg" },
        ].map(({ name, src }) => (
          <div key={name} className="credential-badge">
            <img src={src} alt={name} />
          </div>
        ))}

        <div className="credential-tagline">
          Strategy • Transformation • Growth
        </div>
      </section>
    </main>
  );
}

const styles = `
  * {
    box-sizing: border-box;
  }

  html, body {
    overflow-x: hidden;
  }

  .home-page {
    min-height: 100vh;
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
    background: radial-gradient(circle at top right, rgba(37,99,235,0.20), transparent 32%), #0b1220;
    color: white;
    font-family: Inter, Arial, sans-serif;
    padding: 32px 48px 64px;
  }

  .nav {
    max-width: 1180px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0 72px;
    gap: 24px;
  }

  .logo {
    color: white;
    text-decoration: none;
    font-size: 22px;
    font-weight: 800;
    letter-spacing: -0.03em;
    white-space: nowrap;
  }

  .nav-links {
    display: flex;
    gap: 32px;
    flex-wrap: wrap;
  }

  .nav-links a {
    color: #cbd5e1;
    text-decoration: none;
    font-size: 15px;
    font-weight: 500;
  }

  .hero {
    max-width: 1180px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 72px;
    align-items: center;
  }

  .eyebrow {
    color: #93c5fd;
    font-size: 14px;
    font-weight: 800;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    margin-bottom: 22px;
  }

  .hero h1 {
    font-size: clamp(42px, 6vw, 68px);
    line-height: 0.98;
    letter-spacing: -0.055em;
    max-width: 760px;
    margin: 0 0 32px;
    color: #f8fafc;
  }

  .proof-points {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 38px;
  }

  .proof-points p {
    color: #94a3b8;
    font-size: 18px;
    line-height: 1.5;
    margin: 0;
  }

  .proof-points strong {
    color: #f1f5f9;
    font-weight: 700;
  }

  .button-row {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }

  .primary-button,
  .secondary-button {
    padding: 15px 28px;
    border-radius: 999px;
    text-decoration: none;
    font-size: 15px;
  }

  .primary-button {
    background: #f8fafc;
    color: #0b1220;
    font-weight: 800;
    box-shadow: 0 18px 40px rgba(0,0,0,0.22);
  }

  .secondary-button {
    border: 1.5px solid rgba(255,255,255,0.65);
    background: rgba(255,255,255,0.07);
    color: #f8fafc;
    font-weight: 700;
  }

  .photo-wrap {
    justify-self: end;
    padding: 12px;
    border-radius: 34px;
    background: linear-gradient(145deg, rgba(255,255,255,0.18), rgba(255,255,255,0.04));
    box-shadow: 0 30px 90px rgba(0,0,0,0.38);
  }

  .photo {
    width: 390px;
    max-width: 100%;
    display: block;
    border-radius: 26px;
  }

  .metrics-strip {
    max-width: 1180px;
    margin: 72px auto 0;
    padding: 40px 48px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.10);
    border-radius: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .metric-item span {
    display: block;
    font-size: 36px;
    font-weight: 800;
    color: #f1f5f9;
    letter-spacing: -0.04em;
    line-height: 1;
  }

  .metric-item p {
    font-size: 13px;
    color: #64748b;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin: 8px 0 0;
  }

  .consulting-teaser {
    max-width: 1180px;
    margin: 24px auto 0;
    padding: 28px 36px;
    background: linear-gradient(135deg, rgba(37,99,235,0.15), rgba(37,99,235,0.05));
    border: 1px solid rgba(37,99,235,0.35);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    overflow: hidden;
  }

  .teaser-content {
    min-width: 0;
  }

  .consulting-teaser span {
    display: inline-block;
    max-width: 100%;
    background: rgba(37,99,235,0.30);
    color: #93c5fd;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.10em;
    text-transform: uppercase;
    padding: 6px 14px;
    border-radius: 999px;
    margin-bottom: 12px;
    white-space: normal;
    overflow-wrap: anywhere;
  }

  .consulting-teaser p {
    color: #94a3b8;
    font-size: 15px;
    line-height: 1.6;
    margin: 0;
  }

  .consulting-teaser a {
    color: #93c5fd;
    font-size: 14px;
    font-weight: 700;
    text-decoration: none;
    white-space: nowrap;
  }

  .credential-bar {
    max-width: 1180px;
    margin: 48px auto 0;
    padding: 24px 0 0;
    border-top: 1px solid rgba(255,255,255,0.10);
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
    overflow: hidden;
  }

  .credential-badge {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 8px;
    padding: 8px 16px;
    max-width: 100%;
  }

  .credential-badge img {
    height: 18px;
    max-width: 110px;
    width: auto;
    display: block;
    filter: brightness(0) invert(1);
    opacity: 0.55;
  }

  .credential-tagline {
    margin-left: auto;
    color: #475569;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.08em;
    max-width: 100%;
  }

  @media (max-width: 900px) {
    .home-page {
      padding: 24px 20px 48px;
    }

    .nav {
      padding-bottom: 48px;
      align-items: flex-start;
      flex-direction: column;
    }

    .nav-links {
      gap: 18px;
    }

    .hero {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    .photo-wrap {
      justify-self: start;
      width: 100%;
      max-width: 420px;
    }

    .photo {
      width: 100%;
    }

    .metrics-strip {
      grid-template-columns: 1fr;
      padding: 28px;
      margin-top: 48px;
    }

    .consulting-teaser {
      flex-direction: column;
      align-items: flex-start;
      padding: 24px;
      width: 100%;
    }

    .consulting-teaser a {
      white-space: normal;
    }

    .credential-bar {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      align-items: stretch;
    }

    .credential-badge {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .credential-tagline {
      grid-column: 1 / -1;
      margin-left: 0;
      text-align: left;
      line-height: 1.5;
    }
  }

  @media (max-width: 520px) {
    .home-page {
      padding: 22px 16px 44px;
    }

    .logo {
      font-size: 20px;
    }

    .nav-links {
      gap: 12px 16px;
    }

    .nav-links a {
      font-size: 14px;
    }

    .eyebrow {
      font-size: 12px;
      line-height: 1.4;
    }

    .hero h1 {
      font-size: 39px;
      line-height: 1.03;
      letter-spacing: -0.045em;
    }

    .proof-points p {
      font-size: 16px;
    }

    .button-row a {
      width: 100%;
      text-align: center;
    }

    .metrics-strip {
      padding: 24px;
    }

    .metric-item span {
      font-size: 32px;
    }

    .consulting-teaser span {
      font-size: 10px;
      letter-spacing: 0.08em;
      line-height: 1.4;
      border-radius: 14px;
    }

    .credential-bar {
      grid-template-columns: 1fr 1fr;
    }

    .credential-badge {
      padding: 10px 12px;
    }

    .credential-badge img {
      max-width: 96px;
    }
  }
`;