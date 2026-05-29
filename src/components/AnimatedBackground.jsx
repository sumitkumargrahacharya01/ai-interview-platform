import { motion } from 'framer-motion'

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute w-[900px] h-[900px] rounded-full border border-blue-500/10"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute w-[700px] h-[700px] rounded-full border border-purple-500/10"
      />

      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full top-[10%] left-[10%]"
      />

      <motion.div
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full bottom-[10%] right-[10%]"
      />

    </div>
  )
}

export default AnimatedBackground