import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { agencies } from "../../data/agencies";
import { careerPageUrl } from "../../data/paths";

export default function AgenciesIndex() {
  if (agencies.length === 0) {
    return (
      <>
        <Nav />
        <div className="empty-state">
          <h1>Agency pages are coming soon.</h1>
          <p>
            In the meantime, explore current openings on our{" "}
            <a href={careerPageUrl} target="_blank" rel="noopener">
              career page
            </a>
            .
          </p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Nav />
      <section>
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">Our Agencies</span>
            <h2 className="section-title">Find a location near you.</h2>
          </div>
          <div className="team-grid">
            {agencies.map((a) => (
              <a
                href={`/agencies/${a.slug}`}
                className="team-card"
                key={a.slug}
                style={{ textDecoration: "none" }}
              >
                <div className="team-name">{a.name}</div>
                <div className="team-role">{a.city}</div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
