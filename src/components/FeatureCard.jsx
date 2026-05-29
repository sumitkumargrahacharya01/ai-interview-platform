import { motion } from 'framer-motion'

function FeatureCard({ title, description }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        borderColor: 'rgba(59,130,246,0.5)',
      }}
      className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
    >

      <h3 className="text-3xl font-bold mb-4">
        {title}
      </h3>

      <p className="text-slate-400 leading-relaxed">
        {description}
      </p>

    </motion.div>
  )
}

export default FeatureCard