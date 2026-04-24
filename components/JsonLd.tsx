export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LegalService",
        "@id": "https://advanirudhkamble.com/#organization",
        name: "Advocate Anirudh Kamble",
        description:
          "Pune's trusted property lawyer with 24+ years of experience in property documentation, registration, title verification, sale deed drafting, deemed conveyance, and allied legal matters across Pune and Pimpri Chinchwad.",
        url: "https://advanirudhkamble.com",
        telephone: "+919922836682",
        email: "adv.anirudhkamble@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Ground Floor, B Wing, Jai Ganesh Vision, B-63, Shubhashri Residency, Ganga Nagar, Akurdi",
          addressLocality: "Pimpri-Chinchwad",
          addressRegion: "Maharashtra",
          postalCode: "411035",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 18.64963,
          longitude: 73.77983,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "10:00",
            closes: "19:00",
          },
        ],
        areaServed: ["Pune", "Pimpri-Chinchwad", "Maharashtra"],
        hasMap: "https://maps.google.com/?q=Pune,Maharashtra",
        priceRange: "Contact for quote",
        image: "https://advanirudhkamble.com/assets/advocate-portrait.jpg",
        founder: {
          "@type": "Person",
          name: "Anirudh Kamble",
          jobTitle: "Advocate",
          alumniOf: [
            "Nowrosjee Wadia College, Pune",
            "Symbiosis Law College, Pune",
            "Institute of Advanced Legal Studies (IALS), Pune",
          ],
          knowsAbout: [
            "Property Documentation",
            "Property Registration",
            "Title Verification",
            "Sale Deed Drafting",
            "Deemed Conveyance",
            "Lease Agreements",
            "Gift Deed",
            "Power of Attorney",
            "Contract Drafting",
          ],
        },
        sameAs: ["https://linkedin.com"],
      },
      {
        "@type": "WebSite",
        "@id": "https://advanirudhkamble.com/#website",
        url: "https://advanirudhkamble.com",
        name: "Advocate Anirudh Kamble",
        description: "Pune's Trusted Property Lawyer – Property Documentation & Registration",
        publisher: { "@id": "https://advanirudhkamble.com/#organization" },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}