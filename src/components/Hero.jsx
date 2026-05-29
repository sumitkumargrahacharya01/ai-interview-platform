import { motion } from 'framer-motion'
import dashboardImage from '../assets/images/dashboard.png'

function FloatingParticle({ size, top, left, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0.2, 0.8, 0.2],
        y: [0, -60, 0],
        x: [0, 30, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        delay,
      }}
      className="absolute rounded-full bg-white"
      style={{
        width: size,
        height: size,
        top,
        left,
      }}
    />
  )
}

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center px-6 pt-32">

      {/* Animated Grid */}

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />

      {/* Rotating Rings */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute w-[1200px] h-[1200px] rounded-full border border-blue-500/10"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute w-[900px] h-[900px] rounded-full border border-purple-500/10"
      />

      {/* Gradient Blobs */}

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute top-[-200px] left-[-200px] w-[700px] h-[700px] bg-blue-500/20 blur-[150px] rounded-full"
      />

      <motion.div
        animate={{
          scale: [1.3, 1, 1.3],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
        }}
        className="absolute bottom-[-200px] right-[-200px] w-[700px] h-[700px] bg-purple-500/20 blur-[150px] rounded-full"
      />

      {/* Floating Particles */}

      <FloatingParticle size={5} top="20%" left="10%" delay={0} />
      <FloatingParticle size={7} top="50%" left="80%" delay={1} />
      <FloatingParticle size={4} top="70%" left="20%" delay={2} />
      <FloatingParticle size={6} top="30%" left="60%" delay={3} />
      <FloatingParticle size={5} top="80%" left="40%" delay={4} />

      {/* Main Content */}

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}

        <motion.div
          initial={{
            opacity: 0,
            y: 120,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
          }}
        >

          {/* Badge */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.3,
            }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-10"
          >

            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

            <span className="text-lg">
              AI Powered Career Platform
            </span>

          </motion.div>

          {/* Heading */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
              duration: 1,
            }}
            className="text-[90px] leading-[0.9] font-black mb-10"
          >

            Future Of

            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              AI Hiring
            </span>

          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.8,
            }}
            className="text-slate-400 text-2xl leading-relaxed max-w-2xl mb-12"
          >

            Practice ultra-realistic AI interviews with
            intelligent voice analysis, behavioral tracking,
            emotional insights, and live performance feedback.

          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1,
            }}
            className="flex gap-6"
          >

            <motion.button
              whileHover={{
                scale: 1.08,
                boxShadow:
                  '0px 0px 60px rgba(59,130,246,0.7)',
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-xl font-black"
            >
              Start Free
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.08,
                backgroundColor:
                  'rgba(255,255,255,0.08)',
              }}
              className="px-10 py-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-xl"
            >
              Watch Demo
            </motion.button>

          </motion.div>

          {/* Stats */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.3,
            }}
            className="flex gap-16 mt-20"
          >

            <div>
              <h2 className="text-5xl font-black mb-2">
                50K+
              </h2>

              <p className="text-slate-400">
                Interviews
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-black mb-2">
                95%
              </h2>

              <p className="text-slate-400">
                Success Rate
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-black mb-2">
                24/7
              </h2>

              <p className="text-slate-400">
                AI Support
              </p>
            </div>

          </motion.div>

        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          initial={{
            opacity: 0,
            x: 120,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          className="relative"
        >

          <motion.img
            whileHover={{
              scale: 1.03,
              rotate: -1,
            }}
            src={dashboardImage}
            alt="Dashboard"
            className="rounded-[40px] border border-white/10 shadow-[0_0_80px_rgba(59,130,246,0.3)]"
          />

        </motion.div>

      </div>

    </section>
  )
}

export default Hero