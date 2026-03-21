import React from "react";
import { Helmet } from "react-helmet-async";

export interface OrganizationSchema {
  name: string;
  url: string;
  logo?: string;
  sameAs?: string[];
}

export interface EventSchema {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location?: {
    name: string;
    address?: string;
  };
  organizer?: OrganizationSchema;
  offers?: {
    price: string;
    priceCurrency: string;
    availability: string;
  };
  image?: string;
  url?: string;
}

export interface FAQSchema {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface StructuredDataProps {
  organization?: OrganizationSchema;
  event?: EventSchema;
  faq?: FAQSchema;
  breadcrumbs?: BreadcrumbItem[];
}

const SITE_URL = "https://synchronicity.ju-acm.com";

const StructuredData: React.FC<StructuredDataProps> = ({
  organization,
  event,
  faq,
  breadcrumbs,
}) => {
  const schemas: object[] = [];

  if (organization) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: organization.name,
      url: organization.url,
      ...(organization.logo && { logo: organization.logo }),
      ...(organization.sameAs && { sameAs: organization.sameAs }),
    });
  }

  if (event) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Event",
      name: event.name,
      description: event.description,
      startDate: event.startDate,
      endDate: event.endDate,
      ...(event.location && {
        location: {
          "@type": "Place",
          name: event.location.name,
          ...(event.location.address && { address: event.location.address }),
        },
      }),
      ...(event.organizer && {
        organizer: {
          "@type": "Organization",
          name: event.organizer.name,
          url: event.organizer.url,
        },
      }),
      ...(event.offers && {
        offers: {
          "@type": "Offer",
          price: event.offers.price,
          priceCurrency: event.offers.priceCurrency,
          availability: event.offers.availability,
        },
      }),
      ...(event.image && { image: event.image }),
      ...(event.url && { url: event.url }),
    });
  }

  if (faq) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.questions.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: `${SITE_URL}${item.url}`,
      })),
    });
  }

  return (
    <Helmet>
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export const defaultOrganization: OrganizationSchema = {
  name: "JU ACM",
  url: SITE_URL,
  logo: `${SITE_URL}/logos/favicon-colored.svg`,
  sameAs: ["https://github.com/JU-ACM"],
};

export const synchronicityEvent: EventSchema = {
  name: "Synchronicity 2026",
  description:
    "A 24-hour hackathon organized by JU ACM, featuring problem statements across Web Development, Web3, and AI/ML tracks.",
  startDate: "2026-03-21T09:00:00+05:30",
  endDate: "2026-03-22T09:00:00+05:30",
  location: {
    name: "Jadavpur University",
    address: "Jadavpur, Kolkata, West Bengal, India",
  },
  organizer: defaultOrganization,
  offers: {
    price: "0",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
  },
  image: `${SITE_URL}/images/og/home.png`,
  url: SITE_URL,
};

export default StructuredData;
