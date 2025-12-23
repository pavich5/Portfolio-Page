import { motion } from 'motion/react';
import { User, Heart, Zap, Users, Target, MessageSquare, Globe } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const softSkills = [
  { icon: Target, label: 'Problem-solver', color: 'from-blue-500 to-cyan-500' },
  { icon: Zap, label: 'Fast learner', color: 'from-emerald-500 to-green-500' },
  { icon: MessageSquare, label: 'Communicative', color: 'from-purple-500 to-pink-500' },
  { icon: Users, label: 'Collaborative', color: 'from-orange-500 to-red-500' },
  { icon: Heart, label: 'Detail-oriented', color: 'from-pink-500 to-rose-500' },
];

const languages = [
  { language: 'Macedonian', level: 'Native' },
  { language: 'English', level: 'Fluent' }
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
            <User className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-emerald-600 dark:text-emerald-400">Get to Know Me</span>
          </div>
          <h2 className="text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate about building complete products from idea to deployment
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-3xl blur-2xl opacity-20" />
              <ImageWithFallback
                src="/assets/DSC_0774.JPEG"
                alt="Antonio Pavic"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-400">
                I'm <span className="text-gray-900 dark:text-white">Antonio</span>—a full-stack engineer from <span className="text-gray-900 dark:text-white">North Macedonia</span>. I love building complete products from idea to deployment. I've worked across frontend, backend, mobile, and AI-powered features.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Passionate about learning new technologies like <span className="text-gray-900 dark:text-white">Rust</span>, system design, and AI automation. I value clean architecture, beautiful UI, and reliable systems.
              </p>
            </div>

            {/* Soft Skills */}
            <div className="pt-4">
              <h3 className="text-gray-900 dark:text-white mb-4">Soft Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center flex-shrink-0`}>
                      <skill.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{skill.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="pt-4">
              <h3 className="text-gray-900 dark:text-white mb-4">Languages</h3>
              <div className="flex gap-4">
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang.language}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
                  >
                    <Globe className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    <div>
                      <div className="text-gray-900 dark:text-white">{lang.language}</div>
                      <div className="text-gray-600 dark:text-gray-400">{lang.level}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
