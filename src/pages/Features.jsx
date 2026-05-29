import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

function Features() {

  const features = [
    {
      emoji: '🤖',
      title: 'AI Interviews',
      description:
        'Real AI-generated mock interview questions.',
    },
    {
      emoji: '🎤',
      title: 'Voice Analysis',
      description:
        'Analyze communication and confidence.',
    },
    {
      emoji: '📊',
      title: 'Performance Tracking',
      description:
        'Detailed analytics and feedback system.',
    },
    {
      emoji: '🧠',
      title: 'Behavior Analysis',
      description:
        'Track speaking behavior and fluency.',
    },
    {
      emoji: '💼',
      title: 'Job Preparation',
      description:
        'Prepare for real-world interviews.',
    },
    {
      emoji: '🚀',
      title: 'Career Growth',
      description:
        'Improve confidence and technical skills.',
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      <Navbar />

      <section className="pt-40 pb-32 px-6 relative">

        {/* Background */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#1e3a8a22,transparent_40%),radial-gradient(circle_at_bottom_right,#9333ea22,transparent_40%)]" />

        <div className="max-w-7xl mx-auto relative z-10">

          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-8xl font-black text-center mb-20"
          >
            Platform Features
          </motion.h1>

          <div className="grid md:grid-cols-3 gap-10">

            {features.map((feature, index) => (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 120,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -20,
                  scale: 1.03,
                }}
                className="group relative p-10 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden"
              >

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-blue-500/10 to-purple-500/10" />

                <motion.div
                  whileHover={{
                    rotate: 15,
                    scale: 1.2,
                  }}
                  className="text-6xl mb-8 relative z-10"
                >
                  {feature.emoji}
                </motion.div>

                <h2 className="text-4xl font-black mb-6 relative z-10">
                  {feature.title}
                </h2>

                <p className="text-slate-400 text-lg leading-relaxed relative z-10">
                  {feature.description}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      <Footer />

    </div>
  )
}

export default Features