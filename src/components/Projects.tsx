import { motion } from 'motion/react';
import { ExternalLink, Github, Smartphone, Globe, Instagram } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import React from 'react';
// Synced with root index.html projects section
const projects = [
  {
    title: 'Pabau',
    subtitle: 'Healthcare Platform (Contributor)',
    description:
      'Pabau is an all-in-one practice management platform used by medical, aesthetics, and wellness clinics to manage appointments, patient records, staff workflows, marketing, and billing in one place. While not a personal side project, it is a product I significantly contributed to while working at the company.',
    image: '/assets/Pabau-Feature-Image (1).jpg',
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
    gradient: 'from-emerald-500 to-cyan-500',
    bgGradient: 'from-emerald-500/10 to-cyan-500/10'
  },
  {
    title: 'Cockpit',
    subtitle: 'AI Assistant (Contributor)',
    description:
      'Cockpit is an AI assistant that turns every call into action. It captures notes, enriches HubSpot, sends follow-ups, and coaches reps automatically. Beyond transcription, it delivers structured notes, HubSpot field autofill, embedded coaching, and AskAnything knowledge search.',
    image: '/assets/687910b043eb3168716a790a_best-ai-meeting-assistant.jpg',
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
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-500/10 to-pink-500/10'
  },
  {
    title: 'Smart Termin',
    subtitle: 'SaaS Booking Platform',
    description:
      'Smart Termin is a comprehensive SaaS booking platform designed for beauty professionals (barbers, nail technicians, lash artists, makeup artists, hair stylists) to manage appointments, clients, and business operations. It connects beauty professionals with clients through an automated booking system that handles scheduling, notifications, and business management.',
    image: '/assets/smarttermin.png',
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
      }
    ],
    gradient: 'from-pink-500 to-purple-500',
    bgGradient: 'from-pink-500/10 to-purple-500/10'
  },
  {
    title: 'Moj Prevoz',
    subtitle: 'Mobile Application',
    description:
      'Moj Prevoz is a social-media-inspired ride-sharing app designed for travelers in Macedonia. With effortless post creation, powerful filters, and live messaging with location sharing, it connects drivers and passengers quickly and securely.',
    image: '/assets/mojprevoz.jpg',
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
        label: 'Instagram',
        icon: Instagram,
        url: 'https://www.instagram.com/mojprevoz/'
      }
    ],
    gradient: 'from-blue-500 to-indigo-500',
    bgGradient: 'from-blue-500/10 to-indigo-500/10'
  },
  {
    title: 'AutoMK',
    subtitle: 'Car Selling Website',
    description:
      'A responsive car-selling web app with an intuitive UI and advanced filters, allowing users to browse and find vehicles easily. Sellers can log in, post their cars, and manage listings with a seamless experience across all screens.',
    image: '/assets/cars.png',
    features: [
      'Responsive car marketplace',
      'Advanced vehicle filters',
      'User authentication for sellers',
      'Optimized for mobile & desktop',
      'Clean, modern interface'
    ],
    links: [
      {
        label: 'Live Site',
        icon: ExternalLink,
        url: 'https://auto-mk.vercel.app/'
      },
      {
        label: 'GitHub',
        icon: Github,
        url: 'https://github.com/pavich5/AutoMK'
      }
    ],
    gradient: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-500/10 to-red-500/10'
  },
  {
    title: 'GitHub',
    subtitle: 'More Projects',
    description:
      'Feel free to check out my GitHub profile for more projects, experiments, and code samples that are not showcased here.',
    image: '/assets/GitHub-logo.png',
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
    gradient: 'from-gray-700 to-gray-900',
    bgGradient: 'from-gray-700/10 to-gray-900/10'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
            <Github className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-emerald-600 dark:text-emerald-400">Featured Work</span>
          </div>
          <h2 className="text-gray-900 dark:text-white mb-4">Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of projects showcasing full-stack development, mobile apps, and modern web applications
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Project Image */}
                <div className="relative h-72 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    style={{ 
                      objectPosition: project.title === 'Cockpit' 
                        ? 'left center' 
                        : project.title === 'Pabau' 
                        ? 'center top' 
                        : 'center center' 
                    }}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20`} />
                </div>

                <div className="p-8">
                  {/* Header */}
                  <div className="mb-6">
                    <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${project.gradient} mb-3`}>
                      <span className="text-white">{project.subtitle}</span>
                    </div>
                    <h3 className="text-gray-900 dark:text-white mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-3">
                    {project.links.map((link, idx) => (
                      <motion.a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-4 py-2 rounded-lg bg-gradient-to-r ${project.gradient} text-white flex items-center gap-2 hover:shadow-lg transition-all`}
                      >
                        <link.icon className="w-4 h-4" />
                        <span>{link.label}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}