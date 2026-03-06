export interface EvaluationCriterion {
  name: string;
  description: string;
}

export interface Resource {
  name: string;
  description: string;
  url: string;
}

export interface Problem {
  id: number;
  slug: string;
  title: string;
  description: string;
  goal: string;
  tags?: string[];
  difficulty?: string;
  objectives?: string[];
  expectedSolution?: string;
  evaluationCriteria?: EvaluationCriterion[];
  resources?: Resource[];
}

export interface EventSection {
  event: string;
  categorySlug: string;
  problems: Problem[];
}

export const Data: EventSection[] = [
  {
    event: "Web Development",
    categorySlug: "web-development",
    problems: [
      {
        id: 1,
        slug: "intelligent-campus-event-recommendation-engine",
        title: "Intelligent Campus Event Recommendation Engine",
        description:
          "College campuses host dozens of events, but students discover them through scattered sources like WhatsApp, posters, and social media. This leads to missed events, low attendance, poor analytics, no centralized archive, and no personalization.",
        goal:
          "Build a centralized, intelligent event discovery platform that matches students with relevant events while enabling clubs to manage and promote events effectively.",
        tags: [
          "Recommendation System",
          "Event Platform",
          "Analytics",
          "Web Application",
        ],
        objectives: [
          "Student UI with personalized event feed",
          "Recommendation engine",
          "Club/organizer portal",
          "Event analytics dashboard",
          "Database backend",
          "Responsive web interface",
        ],
      },
      {
        id: 2,
        slug: "collaborative-timetable-deadline-manager",
        title: "Collaborative Timetable & Deadline Manager",
        description:
          "Students struggle with hidden deadlines across LMS and emails, overlapping exams and submissions, lack of shared view of group workload, sudden crunch weeks, and high stress due to poor foresight.",
        goal:
          "Build a collaborative academic planning tool that visualizes semester workload using heatmaps and enables shared deadline tracking.",
        tags: [
          "Academic Planning",
          "Calendar",
          "Heatmap",
          "Collaboration",
        ],
        objectives: [
          "Crowdsourced deadline tracker",
          "Semester stress heatmap visualization",
          "Clash detection system (48-hour window)",
          "Calendar sync support (Google / Apple / Outlook)",
          "Academic load dashboard",
        ],
      },
    ],
  },
  {
    event: "WEB3",
    categorySlug: "web3",
    problems: [
      {
        id: 1,
        slug: "carbon-credit-management-system",
        title: "Carbon Credit Management System",
        description:
          "The carbon credit ecosystem suffers from double counting, fraudulent credits, manual verification, lack of transparency, and poor lifecycle tracking.",
        goal:
          "Build a blockchain-based system that automates carbon credit creation, verification, tracking, trading, and retirement.",
        tags: [
          "Blockchain",
          "Smart Contracts",
          "Carbon Credits",
          "Marketplace",
        ],
        objectives: [
          "Smart contract-based carbon credit minting",
          "Immutable lifecycle tracking (mint → transfer → retire)",
          "Automated verification using IoT / AI / Satellite data",
          "Carbon credit trading marketplace",
          "Audit dashboard for transparency",
        ],
      },
      {
        id: 2,
        slug: "decentralized-identity-management",
        title: "Decentralized Identity Management (DID)",
        description:
          "Centralized identity systems cause data breaches, privacy loss, identity theft, repeated KYC processes, and lack of user ownership over personal data.",
        goal:
          "Build a decentralized identity system that enables self-sovereign identity, verifiable credentials, and privacy-preserving authentication.",
        tags: [
          "Decentralized Identity",
          "SSI",
          "Zero Knowledge Proof",
          "Blockchain",
        ],
        objectives: [
          "Self-sovereign identity wallet",
          "W3C DID compliant identity system",
          "Verifiable credentials framework",
          "ZKP-based authentication",
          "Multi-chain DID resolver",
        ],
      },
    ],
  },
  {
    event: "AI / ML",
    categorySlug: "ai-ml",
    problems: [
      {
        id: 1,
        slug: "intelligent-data-preprocessing-agent",
        title: "Intelligent Data Preprocessing Agent",
        description:
          "Raw datasets often contain mixed data types, missing values, inconsistent formatting, unscaled features, and noisy entries. Data scientists spend most of their time cleaning data instead of building models.",
        goal:
          "Build an AI-powered preprocessing agent that profiles, cleans, transforms, and outputs a model-ready dataset with explainability.",
        tags: [
          "Machine Learning",
          "Data Cleaning",
          "Automation",
          "Explainable AI",
        ],
        objectives: [
          "Automatic dataset profiling (types, distributions, missing values)",
          "Intelligent strategy selection for imputation, encoding, and scaling",
          "Full preprocessing pipeline execution",
          "Human-in-the-loop support",
          "Decision explanation logging",
        ],
      },
      {
        id: 2,
        slug: "multimodal-semantic-retrieval-system",
        title: "Multimodal Semantic Retrieval System",
        description:
          "Legacy search systems support only text and ignore semantic meaning. They cannot process images, audio, video, or hyperlinks and lack hybrid retrieval strategies.",
        goal:
          "Build a multimodal semantic search engine capable of understanding meaning across multiple input formats.",
        tags: [
          "Multimodal AI",
          "Semantic Search",
          "Transformers",
          "Vector Search",
        ],
        objectives: [
          "Support text, image, audio, video, and hyperlink queries",
          "Hybrid search combining vector and keyword retrieval",
          "Transformer-based embeddings",
          "Multi-agent architecture for processing",
          "Explainable ranking of results",
        ],
      },
    ],
  },
];

/** Helper function to retrieve a problem by category and id */
export function findProblem(categorySlug: string, problemId: number) {
  const section = Data.find((s) => s.categorySlug === categorySlug);
  if (!section) return null;

  const problem = section.problems.find((p) => p.id === problemId);
  if (!problem) return null;

  return {
    event: section.event,
    problem,
  };
}