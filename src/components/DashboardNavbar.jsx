import useAuth from '../hooks/useAuth'

function DashboardNavbar() {

  const { user } = useAuth()

  return (
    <div className="h-24 border-b border-white/10 bg-black/40 backdrop-blur-xl flex items-center justify-between px-10">

      {/* LEFT */}

      <div>

        <h1 className="text-4xl font-black">
          Welcome Back
        </h1>

        <p className="text-slate-400 mt-2">
          Ready for your next AI interview?
        </p>

      </div>

      {/* RIGHT */}

      <div className="flex items-center gap-5">

        <div className="text-right">

          <h2 className="text-xl font-bold">
            {user?.email}
          </h2>

          <p className="text-slate-400 text-sm">
            Active User
          </p>

        </div>

        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-xl font-black">
          {user?.email?.charAt(0).toUpperCase()}
        </div>

      </div>

    </div>
  )
}

export default DashboardNavbar