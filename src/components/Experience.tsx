import { motion } from 'motion/react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
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
    color: 'from-purple-500 to-pink-500'
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
    color: 'from-emerald-500 to-cyan-500'
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
            <Briefcase className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-emerald-600 dark:text-emerald-400">Professional Journey</span>
          </div>
          <h2 className="text-gray-900 dark:text-white mb-4">Work Experience</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Product-focused engineering across healthcare, insurance, AI workflows, and modern SaaS platforms
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-emerald-500 to-cyan-500 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className={`absolute left-6 w-5 h-5 rounded-full bg-gradient-to-br ${exp.color} border-4 border-white dark:border-gray-900 hidden md:block`} />

                <div className="md:ml-20 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-gray-900 dark:text-white mb-1">{exp.company}</h3>
                      <p className="text-gray-700 dark:text-gray-300">{exp.role}</p>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700">
                      <Calendar className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                      <span className="text-gray-600 dark:text-gray-400">{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                        <span className={`inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-br ${exp.color} mt-2 flex-shrink-0`} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
