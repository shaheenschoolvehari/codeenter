import serviceD1 from '@/assets/images/resources/service-d-1.jpg';
import serviceD2 from '@/assets/images/resources/service-d-2.jpg';
import serviceD3 from '@/assets/images/resources/service-d-3.jpg';
import serviceDContent from '@/assets/images/resources/service-d-content.jpg';

const serviceDetailsData = [
  {
    id: "/custom-software-development",
    title: "Custom Software Development",
    thumbnailImage: serviceD1,
    sidebar: {
      title: "All Services:",
      navItems: [
        { id: 1, name: "Custom Software Development", href: "/custom-software-development" },
        { id: 2, name: "AI Engineered for Enterprise Success", href: "/ai-enterprise-success" },
        { id: 3, name: "Digital Marketing & Technical SEO Services", href: "/digital-marketing-seo" },
      ],
    },
    content: [
      "Tailored, scalable web, mobile, and cloud software engineering built to solve complex business challenges and drive operational efficiency. At Code Enter, our seasoned engineers build high-performance, robust software architectures engineered from the ground up to support high-traffic loads and mission-critical workflows.",
      "From enterprise portals to microservices architectures and cloud-native solutions, our software engineering process focuses on clean code, seamless integration, high security, and long-term scalability to ensure your business remains ahead of the curve.",
    ],
    skills: [
      {
        id: 1,
        title: "Software Architecture",
        text: "Enterprise Level",
        percentage: 95,
      },
      {
        id: 2,
        title: "Cloud & Microservices",
        text: "Scalable Infrastructure",
        percentage: 92,
      },
    ],
    lists: [
      {
        id: 1,
        items: [
          "End-to-End Bespoke Development",
          "API & Cloud Microservices",
        ],
      },
      {
        id: 2,
        items: [
          "High-Security Modern Codebase",
          "Agile & Scalable Deliverables",
        ],
      },
    ],
    solutionText:
      "Enterprise-grade software architectures designed for rapid scaling, zero downtime, and robust performance across web and cloud environments.",
    contentImage: serviceDContent,
    lastText:
      "Transforming complex business challenges into intuitive, high-velocity digital products with modern engineering standards, automated CI/CD pipelines, and continuous support.",
  },
  {
    id: "/ai-enterprise-success",
    title: "AI Engineered for Enterprise Success",
    thumbnailImage: serviceD2,
    sidebar: {
      title: "All Services:",
      navItems: [
        { id: 1, name: "Custom Software Development", href: "/custom-software-development" },
        { id: 2, name: "AI Engineered for Enterprise Success", href: "/ai-enterprise-success" },
        { id: 3, name: "Digital Marketing & Technical SEO Services", href: "/digital-marketing-seo" },
      ],
    },
    content: [
      "Custom enterprise AI architectures, autonomous agent workflows, and domain-specific LLMs built to accelerate productivity and market success. Code Enter empowers organizations to integrate cutting-edge intelligence directly into their production environments.",
      "We build production-ready agentic workflows, custom retrieval-augmented generation (RAG) pipelines, and multimodal AI solutions that automate complex manual tasks, uncover actionable business insights, and drive exponential ROI.",
    ],
    skills: [
      {
        id: 1,
        title: "Enterprise AI & LLMs",
        text: "Autonomous Workflows",
        percentage: 98,
      },
      {
        id: 2,
        title: "Agentic Automation",
        text: "Multi-Agent Systems",
        percentage: 94,
      },
    ],
    lists: [
      {
        id: 1,
        items: [
          "Autonomous Multi-Agent Networks",
          "Fine-Tuned LLMs & RAG Pipelines",
        ],
      },
      {
        id: 2,
        items: [
          "Enterprise Data Privacy & Security",
          "Automated Business Workflows",
        ],
      },
    ],
    solutionText:
      "Enterprise AI architectures customized for high-accuracy reasoning, real-time data automation, and autonomous execution.",
    contentImage: serviceDContent,
    lastText:
      "Empowering modern enterprises with autonomous AI systems that learn, adapt, and autonomously execute mission-critical operations with superior precision.",
  },
  {
    id: "/digital-marketing-seo",
    title: "Digital Marketing & Technical SEO Services",
    thumbnailImage: serviceD3,
    sidebar: {
      title: "All Services:",
      navItems: [
        { id: 1, name: "Custom Software Development", href: "/custom-software-development" },
        { id: 2, name: "AI Engineered for Enterprise Success", href: "/ai-enterprise-success" },
        { id: 3, name: "Digital Marketing & Technical SEO Services", href: "/digital-marketing-seo" },
      ],
    },
    content: [
      "Data-driven marketing campaigns, technical SEO audits, search visibility optimization, and performance strategies to maximize inbound ROI. At Code Enter, we blend engineering precision with growth marketing to secure industry-leading search engine rankings.",
      "From technical crawlability, structured schema, and Core Web Vitals optimization to performance funnels and paid ad campaigns, our digital marketing solutions generate high-intent enterprise leads and measurable business growth.",
    ],
    skills: [
      {
        id: 1,
        title: "Technical SEO & Audits",
        text: "Search Visibility",
        percentage: 96,
      },
      {
        id: 2,
        title: "Performance Marketing",
        text: "ROI Driven",
        percentage: 91,
      },
    ],
    lists: [
      {
        id: 1,
        items: [
          "Technical SEO & Core Web Vitals",
          "Data-Driven Performance Funnels",
        ],
      },
      {
        id: 2,
        items: [
          "High-Conversion Inbound Strategy",
          "Search Engine Dominance",
        ],
      },
    ],
    solutionText:
      "Full-spectrum digital marketing strategies combined with rigorous technical SEO engineering to maximize organic reach and brand equity.",
    contentImage: serviceDContent,
    lastText:
      "Accelerating enterprise growth and customer acquisition with transparent analytics, algorithmic search optimization, and data-backed performance campaigns.",
  },
];

export default serviceDetailsData;
