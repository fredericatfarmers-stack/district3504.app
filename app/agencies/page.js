import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { careerPageUrl } from "../../data/paths";

const mapId = "1uiq5HA9NqchfpWCsu2AdMpXI9XHztEw";
const mapEmbedUrl = `https://www.google.com/maps/d/embed?mid=${mapId}&ehbc=2E312F`;
const mapViewerUrl = `https://www.google.com/maps/d/viewer?mid=${mapId}`;

export const metadata = {
  title: "DFW Farmers Insurance Agencies | District 3504",
  description:
    "Explore Farmers Insurance District 3504 agency locations across Dallas-Fort Worth and learn about agency ownership and career opportunities in DFW.",
  alternates: {
    canonical: "/agencies",
  },
};

export default function AgenciesIndex() {
  return (
    <>
      <Nav />
      <main className="agencies-page">
        <section className="agency-hero">
          <div className="container">
            <div className="breadcrumb">
              <a href="/">District 3504</a> / Agencies
            </div>
            <span className="section-eyebrow agency-eyebrow">Our Agencies</span>
            <h1>Farmers Insurance agencies across Dallas–Fort Worth.</h1>
            <p className="agency-intro">
              Explore the District 3504 agency network throughout the DFW
              Metroplex. This map is connected to our live Google My Map, so
              agency-location updates appear here automatically.
            </p>
          </div>
        </section>

        <section className="agency-map-section">
          <div className="container">
            <div className="agency-map-frame">
              <iframe
                title="Farmers Insurance District 3504 agency map for Dallas-Fort Worth"
                src={mapEmbedUrl}
                width="100%"
                height="620"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="agency-map-actions">
              <a
                href={mapViewerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Open Full DFW Agency Map
              </a>
              <a href={careerPageUrl} target="_blank" rel="noopener" className="agency-career-link">
                Explore Farmers career and agency ownership opportunities →
              </a>
            </div>

            <div className="agency-seo-copy">
              <h2>Looking for a Farmers Insurance career or agency opportunity in DFW?</h2>
              <p>
                District 3504 supports professionals exploring Farmers Insurance
                agency ownership, agency acquisition, producer roles, associate
                opportunities, and business insurance careers throughout the
                Dallas–Fort Worth area.
              </p>
              <a href="/#paths">See the paths available in District 3504 →</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
