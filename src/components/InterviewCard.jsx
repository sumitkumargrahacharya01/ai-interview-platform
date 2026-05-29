function InterviewCard({ role }) {
  return (
    <div className="p-8 rounded-3xl bg-white/5 border border-white/10">

      <h2 className="text-3xl font-bold mb-4">
        {role}
      </h2>

      <button className="px-6 py-3 rounded-xl bg-blue-500">
        Start Interview
      </button>

    </div>
  )
}

export default InterviewCard