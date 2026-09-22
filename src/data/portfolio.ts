import { ExternalLink, Github, Smartphone, Code2, Server, Database, Wrench } from 'lucide-react';


export const projects = [
  {
    title: 'Smart Termin',
    subtitle: 'SaaS Booking Platform',
    description:
      'Smart Termin is a SaaS booking platform for beauty professionals, including barbers, nail technicians, lash artists, makeup artists, and hair stylists. It helps businesses manage appointments, clients, portfolios, reviews, and daily operations through a clean automated booking flow.',
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
      }
    ],
  },
  {
    title: 'Moj Prevoz',
    subtitle: 'Mobile Application',
    description:
      'Moj Prevoz is a ride-sharing mobile app for drivers and travelers in North Macedonia. The app makes it easier to publish rides, find travel companions, filter routes, message in real time, share locations, and coordinate trips through a familiar mobile experience.',
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
    title: 'AP Motorworks',
    subtitle: 'Porsche 911 Showroom & Configurator',
    description:
      'AP Motorworks is an independent Porsche 911 concept experience built with React 19, TypeScript, Vite, React Router, and Motion. It combines a cinematic showroom, individual Carrera, Carrera GTS, and GT3 pages, side-by-side model comparisons, and an interactive Carrera GTS configurator. Configurations can be saved in a browser-local garage, shared through URLs, and exported as high-resolution PNG build cards. This frontend design study uses illustrative pricing and is not affiliated with or endorsed by Porsche.',
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
    title: 'Globetrotter',
    subtitle: 'Travel Agency Platform',
    description:
      'Globetrotter is a full-stack travel booking platform for curated vacations, built to help users discover seasonal trips, compare destination offers, explore editorial travel stories, and book getaways through a cleaner, more premium digital experience.',
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
    title: 'Quarzo Life',
    subtitle: 'Life Insurance Platform (Team Contributor)',
    description:
      'Quarzo Life is the product I am currently working on at Ludotech. It is a modern life insurance infrastructure platform in France that helps financial institutions, wealth managers, and fintechs distribute long-term savings and investment products digitally. I contribute as part of the engineering team, working on product features, integrations, and reliable user journeys.',
    image: '/assets/project-quarzo-life.png',
    features: [
      'Digital life insurance infrastructure',
      'API integrations and ready-to-use journeys',
      'Real-time data and automated operations'
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
      'Pabau is an all-in-one practice management platform for medical, aesthetics, and wellness clinics. I contributed as part of the Pabau engineering team, helping build and maintain features for appointments, patient records, staff workflows, marketing, billing, reporting, and CRM tools.',
    image: '/assets/project-pabau.jpg',
    features: [
      'All-in-one healthcare practice management',
      'HIPAA-compliant patient data handling',
      'Online bookings & automated reminders',
      'Integrated forms, consents & invoicing',
      'Reporting dashboards & CRM tools'
    ],
    links: [
      { label: 'pabau.com', icon: ExternalLink, url: 'https://pabau.com/' }
    ],
  },
  {
    title: 'Cockpit',
    subtitle: 'AI Assistant (Team Contributor)',
    description:
      'Cockpit is an AI assistant for sales teams that turns calls into structured actions. As a team contributor, I worked on features that support meeting notes, CRM enrichment, follow-up automation, coaching workflows, and knowledge search.',
    image: '/assets/project-cockpit.png',
    features: [
      'AI-powered note taking & transcription',
      'Automatic CRM enrichment (HubSpot)',
      'Follow-up automation & coaching',
      'AskAnything knowledge search',
      'Customizable workflows for sales teams'
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
    description: 'Currently working on Quarzo Life, a digital life insurance infrastructure platform for financial institutions, wealth managers, and fintechs.',
    highlights: [
      'Contributing to product features across Rust, React, and Next.js',
      'Building reliable user flows, APIs, and integrations for financial products',
      'Working with senior engineers on architecture, testing, and maintainability',
      'Improving performance and code quality through focused refactors',
      'Previously contributed to Cockpit, including AI-powered workflow features'
    ],
  },
  {
    company: 'Pabau',
    role: 'Software Engineer',
    period: '2023 – 2025',
    description: 'Built and maintained features in a large healthcare SaaS platform using Next.js, NestJS, and PostgreSQL.',
    highlights: [
      'Optimized database queries and APIs, improving performance by up to 30%',
      'Created reusable UI components and strengthened design system consistency',
      'Wrote unit and E2E tests with Jest and Playwright',
      'Handled complex product tickets across frontend, backend, and data layers',
      'Mentored interns and contributed to onboarding and team knowledge sharing'
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
