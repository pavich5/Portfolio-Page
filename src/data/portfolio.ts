import { ExternalLink, Github, Instagram, Smartphone, Code2, Server, Database, Wrench } from 'lucide-react';


export const projects = [
  {
    title: 'The World Behind Your Eyes',
    subtitle: 'eBook Storefront',
    description:
      'A Next.js storefront I built for The World Behind Your Eyes by Adrian Valcair. It includes online payments through Creem, Google sign-in through Clerk, a chapter preview, and a personal purchase library. Purchased PDFs have protected reading and download access verified on the server. The source repository is private.',
    image: '/assets/project-online-book-sales-page.png',
    features: [
      'Responsive literary storefront and chapter preview',
      'Online payments through Creem with guest and account checkout',
      'Google sign-in through Clerk and a personal purchase library',
      'Server-verified PDF reading and downloads',
      'Purchase confirmation emails'
    ],
    links: [
      {
        label: 'Live Site',
        icon: ExternalLink,
        url: 'https://worldbehindyoureyes.com/'
      }
    ],
  },
  {
    title: 'CreateShorts',
    subtitle: 'Local AI Video Clipping Studio',
    description:
      'CreateShorts is a locally installed video-clipping workspace I built with a React dashboard and Python processing backend. Users can upload footage or paste a video link, and AI decides where to cut it into short clips. The clips can then be edited and exported for Shorts, Reels, and TikTok. The source and Docker setup instructions are available on GitHub.',
    image: '/assets/project-create-shorts.png',
    features: [
      'AI analyzes videos and decides where to cut them into short clips',
      'Editable captions, caption styles, and hook text',
      'Clip trimming, image overlays, and framing controls',
      'Vertical, square, and landscape exports',
      'Local video library with categories and saved versions',
      'Docker setup with configurable AI providers'
    ],
    links: [
      {
        label: 'GitHub / Setup',
        icon: Github,
        url: 'https://github.com/pavich5/CreateShorts'
      }
    ],
  },
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
        url: 'https://beauty-term-c189-g4t6dpwlq-pavich5s-projects.vercel.app'
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
