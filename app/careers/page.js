import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { paths, careerPageUrl } from "../../data/paths";

export const metadata = {
  title: "Farmers Insurance Careers in Dallas-Fort Worth",
  description:
    "Explore Farmers Insurance careers in Dallas-Fort Worth, including agency ownership, agency acquisition, associate agent, producer, and business insurance opportunities with District 3504.",
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    title: "Farmers Insurance Careers in Dallas-Fort Worth",
    description:
      "Explore agency ownership and insurance career opportunities with Farmers Insurance District 3504 across DFW.",
    url: "https://farmerstx.com/careers",
  },
};

const careersSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Farmers Insurance Careers in Dallas-Fort Worth",
  url: "https://farmerstx.com/careers",
  description:
    "Career and agency ownership opportunities with Farmers Insurance District 3504 in the Dallas-Fort Worth Metroplex.",
  about: [
    "Farmers Insurance careers",
    "insurance agency ownership",
    "insurance agency acquisition",
    "insurance producer careers",
    "business insurance careers",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "District 3504",
      item: "https://farmerstx.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Careers",
      item: "https://farmerstx.com/careers",
    },
  ],
};

export default function CareersPage() {
  return (
    <>
      <Nav />
      <main className="careers-page">
        <section className="career-hero">
          <div className="container">
            <div className="breadcrumb">
              <a href="/">District 3504</a> / Careers
            </div>
            <span className="section-eyebrow career-eyebrow">
              Farmers Insurance Careers · Dallas–Fort Worth
            </span>
            <h1>Build an insurance career or agency in DFW.</h1>
            <p className="career-intro">
              District 3504 works with professionals exploring Farmers Insurance
              agency ownership, agency acquisition, producer roles, associate
              opportunities, and business insurance careers throughout the
              Dallas–Fort Worth Metroplex.
            </p>
            <div className="career-hero-actions">
              <a href="#career-paths" className="btn-primary">
                Explore Career Paths
              </a>
              <a href="/agencies" className="btn-ghost">
                View DFW Agencies
              </a>
            </div>
          </div>
        </section>

        <section className="career-search-copy">
          <div className="container">
            <div className="section-head">
              <span className="section-eyebrow">Opportunities in DFW</span>
              <h2 className="section-title">
                More than one way to build a career with Farmers.
              </h2>
              <p className="section-desc">
                Some people come to District 3504 ready to own a business.
                Others want to develop inside an established agency, build
                insurance experience, or specialize in commercial lines. The
                paths below are designed for different starting points.
              </p>
            </div>

            <div className="career-path-grid" id="career-paths">
              {paths.map((path) => (
                <article className="career-path-card" key={path.title}>
                  <div className="career-path-number">{path.number}</div>
                  <h2>{path.title}</h2>
                  <p>{path.description}</p>
                  <div className="path-tags">
                    {path.tags.map((tag) => (
                      <span className="path-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={path.workableUrl}
                    target="_blank"
                    rel="noopener"
                    className="path-cta"
                  >
                    View Current Opening →
                  </a>
                </article>
              ))}
            </div>

            <div className="career-faq">
              <div className="section-head">
                <span className="section-eyebrow">Common Questions</span>
                <h2 className="section-title">
                  Exploring a Farmers Insurance career in Dallas–Fort Worth?
                </h2>
              </div>

              <div className="career-faq-grid">
                <article>
                  <h3>Do I have to start by owning an agency?</h3>
                  <p>
                    No. District 3504 has multiple entry points, including
                    associate agent, producer, business insurance, agency
                    acquisition, and new agency ownership paths.
                  </p>
                </article>
                <article>
                  <h3>Are these opportunities in the DFW area?</h3>
                  <p>
                    Yes. This site focuses on Farmers Insurance District 3504
                    opportunities across the Dallas–Fort Worth Metroplex.
                  </p>
                </article>
                <article>
                  <h3>Where can I see current openings?</h3>
                  <p>
                    Each career path above links directly to the current
                    District 3504 opening in Workable. You can also view the
                    full District 3504 careers page.
                  </p>
                </article>
              </div>

              <div className="career-all-openings">
                <a
                  href={careerPageUrl}
                  target="_blank"
                  rel="noopener"
                  className="btn-primary"
                >
                  View All Current District 3504 Openings
                </a>
              </div>
            </div>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(careersSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </main>
      <Footer />
    </>
  );
}
