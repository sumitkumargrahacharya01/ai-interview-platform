import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function AnimatedSection({ children }) {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={
        inView
          ? {
              opacity: 1,
              y: 0,
            }
          : {}
      }
      transition={{
        duration: 1,
      }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection