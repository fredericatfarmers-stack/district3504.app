import { notFound } from "next/navigation";
import Image from "next/image";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import QAWidget from "../../../components/QAWidget";
import { agencies } from "../../../data/agencies";

export function generateStaticParams() {
  return agencies.map((a) => ({ slug: a.slug }));
}

export default function AgencyPage({ params }) {
  const agency = agencies.find((a) => a.slug === params.slug);
  if (!agency) notFound();

  const mapSrc = `https://www.google.com/maps?q=${agency.lat},${agency.lng}&z=15&output=embed`;

  return (
    <>
      <Nav />
      <section className="agency-hero">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">District 3504</a> / Agencies
          </div>
          <h1>{agency.name}</h1>
          <div className="city">{agency.city}</div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">About This Agency</span>
            <p className="section-desc">{agency.description}</p>
          </div>

          <iframe
            title={`Map of ${agency.name}`}
            src={mapSrc}
            width="100%"
            height="320"
            style={{ border: 0, borderRadius: "16px" }}
            loading="lazy"
          />

          {agency.agents?.length > 0 && (
            <>
              <div className="section-head" style={{ marginTop: "56px" }}>
                <span className="section-eyebrow">Meet the Agents</span>
              </div>
              <div className="agent-grid">
                {agency.agents.map((agent) => (
                  <div className="team-card" key={agent.name}>
                    <div className="team-photo">
                      <Image
                        src={agent.photo}
                        alt={agent.name}
                        width={300}
                        height={300}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                    <div className="team-name">{agent.name}</div>
                    <div className="team-role">{agent.role}</div>
                  </div>
                ))}
              </div>
            </>
          )}

          <div style={{ marginTop: "56px", textAlign: "center" }}>
            <a
              href={agency.workableUrl}
              target="_blank"
              rel="noopener"
              className="btn-primary"
            >
              View Openings at {agency.name} →
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <QAWidget />
    </>
  );
}
