import { ExternalLink, Github, Instagram, Smartphone, Code2, Server, Database, Wrench } from 'lucide-react';


export const projects = [
  {
    title: 'Smart Termin',
    subtitle: 'SaaS Booking Platform',
    description:
      'Smart Termin is a personal SaaS booking platform I built for beauty professionals. I focused on the React frontend and MySQL database, creating workflows for appointment scheduling, client management, portfolios, reviews, and business analytics.',
    image: '/assets/project-smart-termin.png',
    features: [
      'Automated appointment booking system',
      'Artist dashboard with calendar & analytics',
      'Client directory with search & filters',
      'Portfolio management & reviews',
      'Subscription-based SaaS model'
    ],
    links: [
      {
        label: 'Live Site',
        icon: ExternalLink,
        url: 'https://smartermin.com/'
      },
      {
        label: 'GitHub',
        icon: Github,
        url: 'https://github.com/pavich5/SmartTermin'
      },
      {
        label: 'Instagram',
        icon: Instagram,
        url: 'https://www.instagram.com/smartermin/'
      }
    ],
  },
  {
    title: 'Moj Prevoz',
    subtitle: 'Mobile Application',
    description:
      'Moj Prevoz is a React Native ride-sharing app I built for drivers and travelers in North Macedonia. I focused on the frontend and database, including ride publishing and search, live messaging, and location sharing, and supported deployment of its C# backend on Azure. The app was released on the Apple App Store and Google Play before being taken down for business reasons.',
    image: '/assets/project-moj-prevoz.png',
    features: [
      'Ride-sharing app for North Macedonia',
      'Effortless ride post creation',
      'Powerful search & filters',
      'Live messaging with location sharing',
      'Dark theme & intuitive UI'
    ],
    links: [
      {
        label: 'App Store',
        icon: Smartphone,
        url: 'https://apps.apple.com/mk/app/moj-prevoz/id6739589145'
      },
      {
        label: 'Google Play',
        icon: Smartphone,
        url: 'https://play.google.com/store/apps/details?id=com.myapp.ridesharing&fbclid=PAZXh0bgNhZW0CMTEAAaa18tykzkcz52ww425FPbJe3pfEwkOz7C4uDckyyye3iSF51-xkTCKigZA_aem_dFY896izowfT-BTKbPqGIQ'
      },
      {
        label: 'GitHub',
        icon: Github,
        url: 'https://github.com/pavich5/Moj-Prevoz'
      },
    ],
  },
  {
    title: 'Globetrotter',
    subtitle: 'Travel Agency Platform',
    description:
      'Globetrotter is a personal full-stack travel booking platform for discovering seasonal destinations, comparing vacation packages, reading travel stories, and completing bookings. I integrated Clerk for user authentication, Stripe for payments, an AI travel assistant, and email confirmations for the booking flow.',
    image: '/assets/project-globetrotter.png',
    features: [
      'Seasonal travel collections and destination discovery',
      'Curated vacation packages with pricing and trip details',
      'AI travel assistant for trip-related questions',
      'Stripe-powered booking and checkout flow',
      'Clerk authentication and booking email confirmations'
    ],
    links: [
      {
        label: 'Live Site',
        icon: ExternalLink,
        url: 'https://travel-agency-plum.vercel.app'
      },
      {
        label: 'GitHub',
        icon: Github,
        url: 'https://github.com/pavich5/Travel-Agency'
      }
    ],
  },
  {
    title: 'AP Motorworks',
    subtitle: 'Porsche 911 Showroom & Configurator',
    description:
      'AP Motorworks is a personal frontend design study built with React 19, TypeScript, Vite, React Router, and Motion. I created a Porsche 911 concept showroom with model pages, side-by-side comparisons, and an interactive Carrera GTS configurator whose builds can be saved locally, shared by URL, and exported as high-resolution PNG cards. It uses illustrative pricing and is not affiliated with or endorsed by Porsche.',
    image: '/assets/project-ap-motorworks.png',
    features: [
      'Cinematic showroom, model filters, and individual 911 model pages',
      'Side-by-side model comparison with a differences-only view',
      'Six paints, two wheel designs, three exterior views, two interiors, and four equipment options',
      '36 exterior render combinations with illustrative price estimates',
      'Browser-local garage with named builds, editing, and draft recovery',
      'Shareable configuration URLs and high-resolution PNG build-card exports',
      'Responsive layout, keyboard controls, and reduced-motion support'
    ],
    links: [
      { label: 'Live Site', icon: ExternalLink, url: 'https://ap-motorworks.vercel.app/' },
      { label: 'GitHub', icon: Github, url: 'https://github.com/pavich5/ap-motorworks' }
    ],
  },
  {
    title: 'Quarzo Life',
    subtitle: 'Life Insurance Platform (Team Contributor)',
    description:
      'At Ludotech, I contribute to Quarzo Life, a digital life-insurance infrastructure platform for the French market. My work includes death-settlement flows for insured individuals and beneficiary clauses, broker authorization and policy eligibility checks, and scheduling one-off and recurring premium contributions. I have also implemented AES-256-GCM encryption with Vault-managed keys and HMAC-SHA-256 hashing for secure IBAN matching and GDPR-focused data protection.',
    image: '/assets/project-quarzo-life.png',
    features: [
      'Death-settlement and beneficiary-clause workflows',
      'Broker authorization and policy eligibility checks',
      'One-off and recurring premium scheduling',
      'AES-256-GCM encryption with Vault-managed keys',
      'HMAC-SHA-256 hashing for secure IBAN matching'
    ],
    links: [
      {
        label: 'Live Site',
        icon: ExternalLink,
        url: 'https://www.quarzo-life.com/'
      },
    ],
  },
  {
    title: 'Pabau',
    subtitle: 'Healthcare Platform (Team Contributor)',
    description:
      'From 2023 to 2025, I worked on Pabau, a healthcare practice-management platform for clinics. I optimized a PostgreSQL chart query over five million rows from 60 seconds to 3 seconds, built Excel and CSV report exports with Amazon S3 downloads, and maintained unit and Playwright end-to-end tests to prevent regressions.',
    image: '/assets/project-pabau.jpg',
    features: [
      'PostgreSQL query optimization across five million rows',
      'Chart query runtime reduced from 60 seconds to 3 seconds',
      'Excel and CSV exports for clinic reports',
      'Report downloads through Amazon S3',
      'Unit and Playwright end-to-end testing'
    ],
    links: [
      { label: 'pabau.com', icon: ExternalLink, url: 'https://pabau.com/' }
    ],
  },
  {
    title: 'Cockpit',
    subtitle: 'AI Assistant (Team Contributor)',
    description:
      'At Ludotech, I contributed to Cockpit, an AI-powered CRM and meeting-intelligence product. I built GPT-powered Playbooks that detect user-defined meeting topics and generate summaries, developed meeting video-player and transcript features with Rust and HTML, and helped migrate the product from HTMX to React while adding real-time updates with ElectricSQL.',
    image: '/assets/project-cockpit.png',
    features: [
      'GPT-powered Playbooks and meeting summaries',
      'User-defined meeting-topic detection',
      'Meeting video-player and transcript features',
      'V2 migration from HTMX to React',
      'Real-time updates with ElectricSQL'
    ],
    links: [
      { label: 'getcockpit.io', icon: ExternalLink, url: 'https://getcockpit.io/' }
    ],
  },
  {
    title: 'GitHub',
    subtitle: 'More Projects',
    description:
      'Explore my GitHub profile for additional projects, experiments, learning work, and code samples beyond the featured projects on this page.',
    image: '/assets/project-github.png',
    features: [
      'Open-source projects',
      'Side projects & experiments',
      'Code samples & contributions'
    ],
    links: [
      {
        label: 'GitHub Profile',
        icon: Github,
        url: 'https://github.com/pavich5?tab=repositories'
      }
    ],
  }
];

export const experiences = [
  {
    company: 'Ludotech',
    role: 'Software Engineer',
    period: '2025 – Present',
    description: 'Helped build financial workflows for Quarzo Life, a life-insurance infrastructure platform for the French market, after contributing to Cockpit, an AI-powered CRM and meeting-intelligence product.',
    highlights: [
      'Built death-settlement and beneficiary-clause workflows with broker authorization and policy eligibility checks',
      'Contributed to one-off and recurring premium scheduling and payment-state tracking',
      'Implemented AES-256-GCM encryption and HMAC-SHA-256 hashing with Vault-managed keys',
      'Built GPT-powered Cockpit Playbooks, meeting summaries, and transcript features',
      'Contributed to Cockpit’s HTMX-to-React migration and ElectricSQL real-time updates'
    ],
  },
  {
    company: 'Pabau',
    role: 'Software Engineer',
    period: '2023 – 2025',
    description: 'Built and maintained reporting, data, and quality-focused features for a healthcare practice-management platform.',
    highlights: [
      'Reduced a PostgreSQL chart query over five million rows from 60 seconds to 3 seconds',
      'Implemented Excel and CSV exports for stock, pricing, item, and chart reports, with downloads through Amazon S3',
      'Built and maintained unit and Playwright end-to-end tests to prevent regressions'
    ],
  }
];

export const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: [
      'React', 'Next.js', 'JavaScript', 'TypeScript', 
      'HTML', 'CSS', 'Tailwind', 
      'React Native', 'Bootstrap', 'Figma'
    ]
  },
  {
    title: 'Backend',
    icon: Server,
    skills: [
      'Node.js', 'NestJS', 'Express', 'Rust', 'Deno',
      'GraphQL', 'Postman', 'API Design'
    ]
  },
  {
    title: 'Databases',
    icon: Database,
    skills: [
      'PostgreSQL', 'MongoDB', 'MySQL', 'Database Design',
      'Query Optimization', 'Migrations'
    ]
  },
  {
    title: 'Other',
    icon: Wrench,
    skills: [
      'Docker', 'Git', 'CI/CD', 'Deployment', 'Testing'
    ]
  }
];
