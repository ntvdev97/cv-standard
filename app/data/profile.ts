// app/data/profile.ts
import type { PersonalProfile } from "../types/profile";

export const profileData: PersonalProfile = {
  name: "Alex Mercer",
  title: "Senior Full-Stack Engineer & Architect",
  bio: "Building resilient cloud-native backend systems with Java & Spring Boot, and crafting high-performance, accessible frontend interfaces with Vue 3 & Nuxt.",
  aboutText:
    "Results-driven Senior Full-Stack Engineer with over 8 years of professional experience designing, building, and deploying enterprise-grade software. I specialize in backend microservices with Java, Spring Boot, and SQL/NoSQL databases, alongside modern, responsive frontend architectures using Vue 3, Nuxt, and TypeScript. A strong advocate for clean code, DevOps automation, cloud scaling on AWS, and accessible (WCAG compliant) web applications.",
  yearsOfExperience: 8,
  careerFocus: [
    "Cloud-Native Architectures",
    "Modern Web Interfaces & SPA Development",
    "Scalable API & Microservices Design",
    "CI/CD Pipeline & DevOps Automation",
  ],
  availableForWork: true,
  email: "alex.mercer.dev@example.com",
  location: "San Francisco, CA (Remote)",

  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com",
      iconName: "github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      iconName: "linkedin",
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      iconName: "twitter",
    },
  ],

  navItems: [
    { name: "Hero", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ],

  skillGroups: [
    {
      category: "Frontend Development",
      skills: [
        "Vue.js 3",
        "Nuxt.js 4",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5 & CSS3",
        "Sass/SCSS",
        "Vite",
        "Pinia",
        "TailwindCSS",
      ],
    },
    {
      category: "Backend Engineering",
      skills: [
        "Java",
        "Spring Boot",
        "Spring Cloud",
        "Hibernate/JPA",
        "RESTful APIs",
        "Node.js",
        "Express",
        "Kafka",
      ],
    },
    {
      category: "Database & Caching",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch"],
    },
    {
      category: "Cloud & DevOps",
      skills: [
        "AWS (EC2, S3, RDS, ECS, Lambda, CloudFront)",
        "Docker",
        "Kubernetes",
        "Terraform",
        "GitHub Actions",
        "CI/CD Pipelines",
        "Linux",
      ],
    },
    {
      category: "Testing & Tools",
      skills: [
        "Vitest",
        "Jest",
        "JUnit",
        "Cypress",
        "Git & Gitflow",
        "Postman",
      ],
    },
  ],

  experiences: [
    {
      company: "CloudScale Solutions",
      role: "Tech Lead / Senior Full-Stack Developer",
      startDate: "Jan 2023",
      endDate: "Present",
      techStack: [
        "Java",
        "Spring Boot",
        "Vue 3",
        "Nuxt.js",
        "TypeScript",
        "AWS ECS",
        "Docker",
        "PostgreSQL",
        "Redis",
      ],
      achievements: [
        "Led the migration of a legacy monolithic enterprise platform to a Spring Boot microservices architecture, improving system uptime to 99.99% and reducing database search latencies by 45%.",
        "Architected and built a customizable client analytics dashboard with Vue 3 (Composition API) and Nuxt, improving page load speed (First Contentful Paint) by 60%.",
        "Implemented modern containerized workflows with Docker and Kubernetes, reducing AWS hosting costs by 28% through automated container autoscaling.",
        "Established automated CI/CD pipelines using GitHub Actions, enabling zero-downtime rolling deployments and decreasing code-to-production time from 10 days to 2 hours.",
      ],
    },
    {
      company: "FinTech Innovators",
      role: "Senior Software Engineer",
      startDate: "Mar 2020",
      endDate: "Dec 2022",
      techStack: [
        "Java",
        "Spring Boot",
        "Apache Kafka",
        "PostgreSQL",
        "Vue.js",
        "AWS Lambda",
        "Docker",
        "Jenkins",
      ],
      achievements: [
        "Designed and developed a high-throughput, real-time ledger and transaction processing API handling over 10,000 requests per minute with complete idempotency guarantees.",
        "Created a shareable internal Vue 3 components library complying with WCAG 2.1 AA accessibility guidelines, saving an average of 40 developer-hours per new project launch.",
        "Configured distributed tracing with Spring Cloud Sleuth and Zipkin, slashing critical production issue resolution time (MTTR) by 50%.",
      ],
    },
    {
      company: "WebCraft Studio",
      role: "Full-Stack Developer",
      startDate: "Jul 2017",
      endDate: "Feb 2020",
      techStack: [
        "JavaScript",
        "Node.js",
        "Express",
        "Vue.js 2",
        "MongoDB",
        "Redis",
        "Docker",
        "Git",
      ],
      achievements: [
        "Built and maintained highly interactive customer portals, driving a 35% increase in user engagement and streamlining onboarding operations.",
        "Optimized data querying strategies and implemented Redis cache layers, boosting overall API throughput by 3x and stabilizing performance under peak traffic.",
        "Created reliable, responsive email delivery and notifications systems using event-driven background queues in Node.js.",
      ],
    },
  ],

  projects: [
    {
      title: "Enterprise FinTech Dashboard",
      role: "Lead Full-Stack Architect",
      period: "2024 - 2025",
      description:
        "A comprehensive cloud dashboard enabling multi-national corporations to monitor financial transactions, track real-time audit logs, and render complex charts.",
      techStack: [
        "Vue 3",
        "Nuxt.js 4",
        "TypeScript",
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "AWS ECS",
        "Docker",
      ],
      responsibilities: [
        "Architected the end-to-end flow, from database schema modeling to the responsive split-screen client panel.",
        "Implemented OAuth2 and JWT-based authentication using Spring Security for fine-grained role-based access control.",
      ],
      results: [
        "Successfully deployed to 12 corporate pilot clients, processing over $5M in daily transactions with sub-second render speeds.",
        "Achieved a 95% test coverage threshold on backend endpoints and critical frontend modules.",
      ],
      demoUrl: "https://demo.example.com/fintech",
      sourceUrl: "https://github.com/example/fintech-dashboard",
    },
    {
      title: "Serverless E-Commerce Microservices",
      role: "Backend Architect & DevOps Engineer",
      period: "2023",
      description:
        "A cloud-native, serverless shopping platform utilizing event-driven microservices to scale dynamic orders, inventory audits, and secure checkout billing.",
      techStack: [
        "Java",
        "Spring Boot",
        "AWS Lambda",
        "DynamoDB",
        "AWS SQS",
        "Docker",
        "Terraform",
      ],
      responsibilities: [
        "Configured Infrastructure-as-Code scripts using Terraform to deploy API Gateway and DynamoDB instances.",
        "Wrote serverless cloud workers utilizing Spring Cloud Function to parse incoming message queues.",
      ],
      results: [
        "Achieved automatic scaling handling traffic peaks of 15,000+ requests per minute during promotional events.",
        "Decreased order processing failures to 0.05% through intelligent automatic retries and dead-letter queues.",
      ],
      demoUrl: "https://demo.example.com/ecommerce",
      sourceUrl: "https://github.com/example/ecommerce-serverless",
    },
    {
      title: "Accessible Developer Portfolio SPA",
      role: "Solo Creator",
      period: "2026",
      description:
        "A highly optimized, SEO-friendly, and fully accessible single-page developer CV website featuring automatic dark mode, keyboard navigation, and client form validation.",
      techStack: [
        "Nuxt.js 4",
        "Vue 3",
        "TypeScript",
        "Vitest",
        "CSS Variables",
      ],
      responsibilities: [
        "Coded custom UI styles from scratch using CSS properties and fluid responsive ratios.",
        "Configured standard ARIA labels, semantic landmark elements, and skip-to-main anchors for maximum accessibility.",
      ],
      results: [
        "Scored 100/100 across Performance, Accessibility, Best Practices, and SEO on Google Lighthouse testing.",
        "Constructed complete mock-oriented Vitest test suites demonstrating zero error runs across components.",
      ],
      demoUrl: "https://alex-mercer-portfolio.example.com",
      sourceUrl: "https://github.com/example/developer-portfolio",
    },
  ],

  education: [
    {
      degree: "Master of Science in Computer Science",
      school: "Boston University",
      startDate: "Sep 2015",
      endDate: "May 2017",
      details:
        "Specialization in Distributed Systems and Software Engineering. GPA: 3.85/4.0. Completed master thesis on Distributed Cache Synchronizations.",
    },
    {
      degree: "Bachelor of Science in Information Technology",
      school: "University of Washington",
      startDate: "Sep 2011",
      endDate: "Jun 2015",
      details:
        "Graduated with Honors. Focus on Algorithmic Analysis, Database Design, and Web Systems development.",
    },
  ],

  certifications: [
    {
      name: "AWS Certified Solutions Architect – Professional",
      issuer: "Amazon Web Services",
      date: "Oct 2024",
      credentialId: "AWS-SAP-88741",
      verificationUrl: "https://aws.amazon.com/verification",
    },
    {
      name: "Oracle Certified Professional: Java SE 17 Developer",
      issuer: "Oracle Corporation",
      date: "Jun 2023",
      credentialId: "OR-JAVA17-889",
      verificationUrl: "https://oracle.com/verification",
    },
    {
      name: "Professional Scrum Master I",
      issuer: "Scrum.org",
      date: "Mar 2021",
      credentialId: "PSM-I-99824",
      verificationUrl: "https://scrum.org/verification",
    },
  ],
};
