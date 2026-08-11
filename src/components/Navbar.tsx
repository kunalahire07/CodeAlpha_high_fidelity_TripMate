import type { NavFn } from '../types'

interface NavbarProps {
  navigate: NavFn
  activePage?: string
}

export default function Navbar({ navigate, activePage }: NavbarProps) {
  const links = [
    { label: 'Home', page: 'home' as const },
    { label: 'Explore', page: 'explore' as const },
    { label: 'Flights', page: 'flights' as const },
    { label: 'Hotels', page: 'hotels' as const },
    { label: 'My Trips', page: 'my-trips' as const },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => navigate('home')}
          className="flex items-center gap-2 shrink-0"
        >
          <div className="w-8 h-8 bg-sky-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
            </svg>
          </div>
          <span className="text-xl font-bold text-slate-900" style={{ fontFamily: "'DM Serif Display', serif" }}>
            TripMate
          </span>
        </button>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => navigate(page)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activePage === page
                  ? 'bg-sky-50 text-sky-700'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => navigate('explore')}
            className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
          >
            About
          </button>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('my-trips')}
            className="hidden sm:block px-4 py-2 text-sm font-medium text-slate-700 hover:text-sky-700 transition-colors"
          >
            Log in
          </button>
          <button
            onClick={() => navigate('my-trips')}
            className="px-4 py-2 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg transition-colors shadow-sm"
          >
            Sign up
          </button>
        </div>
      </div>
    </nav>
  )
}
