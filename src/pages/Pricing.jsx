import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

function Pricing() {

  const plans = [
    {
      name: 'Free',
      price: '₹0',
      desc: 'Basic AI interviews',
    },
    {
      name: 'Pro',
      price: '₹499',
      desc: 'Advanced AI analytics',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      desc: 'Company hiring solutions',
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      <Navbar />

      <section className="pt-40 pb-32 px-6 relative">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2563eb22,transparent_50%)]" />

        <div className="max-w-7xl mx-auto relative z-10">

          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-8xl font-black text-center mb-24"
          >
            Pricing Plans
          </motion.h1>

          <div className="grid md:grid-cols-3 gap-10">

            {plans.map((plan, index) => (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 100,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -15,
                }}
                className={`relative p-10 rounded-[40px] backdrop-blur-xl border overflow-hidden
                ${
                  plan.popular
                    ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-500'
                    : 'bg-white/5 border-white/10'
                }`}
              >

                {plan.popular && (
                  <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-blue-500 text-sm font-bold">
                    POPULAR
                  </div>
                )}

                <h2 className="text-5xl font-black mb-6">
                  {plan.name}
                </h2>

                <p className="text-slate-400 text-xl mb-10">
                  {plan.desc}
                </p>

                <h1 className="text-7xl font-black mb-10">
                  {plan.price}
                </h1>

                <button className="w-full py-5 rounded-2xl bg-white text-black text-xl font-bold hover:scale-105 transition">
                  Choose Plan
                </button>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      <Footer />

    </div>
  )
}

export default Pricing