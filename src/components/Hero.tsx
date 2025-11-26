import { Download, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useIsMobile } from './ui/use-mobile';

const techStack = [
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'Rust', icon: '🦀' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'TypeScript', icon: '💙' },
];

export function Hero() {
  const isMobile = useIsMobile();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-6 lg:px-8 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-blue-500/10 dark:from-emerald-500/5 dark:via-cyan-500/5 dark:to-blue-500/5" />
      
      {/* Animated Blob Shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full opacity-20 blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Mobile Image */}
            {isMobile && (
              <div className="relative mx-auto mb-8 w-full max-w-xs h-64 rounded-3xl overflow-hidden border-4 border-emerald-500/70 shadow-xl mt-4">
                <ImageWithFallback
                  src="/assets/home-perfil.jpg"
                  alt="Antonio Pavic"
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-gray-900 dark:text-white mb-3"
              >
                Antonio Pavic
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-700 dark:text-gray-300"
              >
                Full-Stack Software Engineer
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-600 dark:text-gray-400 max-w-xl"
            >
              Software Engineer building clean, fast, and user-friendly apps — across frontend, backend, mobile, and full product development. Always learning, always shipping.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl hover:shadow-lg hover:shadow-emerald-500/25 transition-all flex items-center gap-2"
              >
                View My Projects
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/assets/antonio-pavic-cv.pdf"
                download="Antonio-Pavic-CV.pdf"
                className="px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download CV
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:antoniopavic.dev@gmail.com"
                className="px-6 py-3 border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl hover:border-emerald-500 dark:hover:border-emerald-500 transition-all flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </motion.a>
            </motion.div>

            {/* Tech Stack Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="pt-8"
            >
              <p className="text-gray-500 dark:text-gray-400 mb-4">Working with</p>
              <div className="flex flex-wrap gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center gap-2 shadow-sm"
                  >
                    <span>{tech.icon}</span>
                    <span className="text-gray-700 dark:text-gray-300">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          {!isMobile && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative mt-8 lg:mt-0"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-3xl blur-2xl opacity-20" />
                <ImageWithFallback
                  src="/assets/home-perfil.jpg"
                  alt="Antonio Pavic"
                  className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}