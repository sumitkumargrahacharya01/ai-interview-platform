function TestimonialCard({ name, review }) {
  return (
    <div className="p-8 rounded-3xl bg-white/5 border border-white/10">

      <p className="text-slate-300 mb-6">
        "{review}"
      </p>

      <h3 className="text-xl font-bold">
        {name}
      </h3>

    </div>
  )
}

export default TestimonialCard