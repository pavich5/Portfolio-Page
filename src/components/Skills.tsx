import { motion } from 'motion/react';
import { Code2, Server, Database, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      'React', 'Next.js', 'JavaScript', 'TypeScript', 
      'HTML', 'CSS', 'Tailwind', 
      'React Native', 'Bootstrap', 'Figma'
    ]
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'from-emerald-500 to-green-500',
    skills: [
      'Node.js', 'NestJS', 'Express', 'Rust', 
      'GraphQL', 'Jest', 'Postman', 'API Design'
    ]
  },
  {
    title: 'Databases',
    icon: Database,
    color: 'from-purple-500 to-pink-500',
    skills: [
      'PostgreSQL', 'MongoDB', 'MySQL', 'Database Design',
      'Query Optimization', 'Migrations'
    ]
  },
  {
    title: 'Other',
    icon: Wrench,
    color: 'from-orange-500 to-red-500',
    skills: [
      'Docker', 'Git', 'CI/CD', 'Deployment', 'Testing'
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
            <Code2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-emerald-600 dark:text-emerald-400">Technical Expertise</span>
          </div>
          <h2 className="text-gray-900 dark:text-white mb-4">Skills & Technologies</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-gray-900 dark:text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className={`px-4 py-2 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-10 border border-gray-200 dark:border-gray-700 cursor-default`}
                  >
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Years Experience', value: '2+' },
            { label: 'Projects Completed', value: '5+' },
            { label: 'Technologies', value: '10+' },
            { label: 'Companies', value: '2' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="text-gray-900 dark:text-white mb-2">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
