import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://farmerstx.com"),
  title: {
    default: "Farmers Insurance Careers & Agency Ownership | DFW District 3504",
    template: "%s | Farmers District 3504",
  },
  description:
    "Explore Farmers Insurance careers, agency ownership, agency acquisition, producer opportunities, and business insurance roles with District 3504 in Dallas-Fort Worth.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://farmerstx.com",
    siteName: "Farmers Insurance District 3504",
    title: "Farmers Insurance Careers & Agency Ownership | DFW District 3504",
    description:
      "Explore Farmers Insurance careers and agency ownership opportunities across the Dallas-Fort Worth Metroplex.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Farmers Insurance Careers & Agency Ownership | DFW District 3504",
    description:
      "Explore Farmers Insurance careers and agency ownership opportunities across Dallas-Fort Worth.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Farmers Insurance District 3504",
  url: "https://farmerstx.com",
  description:
    "Farmers Insurance District 3504 supports agency ownership and insurance career opportunities across Dallas-Fort Worth.",
  areaServed: {
    "@type": "Place",
    name: "Dallas-Fort Worth Metroplex",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Farmers Insurance District 3504",
  url: "https://farmerstx.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Public+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
