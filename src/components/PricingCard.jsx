function PricingCard({ title, price, description }) {
  return (
    <div className="p-8 rounded-3xl bg-white/5 border border-white/10">

      <h2 className="text-3xl font-bold mb-4">
        {title}
      </h2>

      <p className="text-slate-400 mb-6">
        {description}
      </p>

      <h3 className="text-5xl font-black">
        {price}
      </h3>

    </div>
  )
}

export default PricingCard