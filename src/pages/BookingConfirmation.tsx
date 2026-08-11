import type { NavFn } from '../types'

interface Props { navigate: NavFn }

export default function BookingConfirmation({ navigate }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-emerald-50 flex flex-col items-center justify-center px-6 py-20">
      {/* Confetti-style decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['🎊', '✨', '🎉', '⭐', '🎈', '🌟'].map((emoji, i) => (
          <span
            key={i}
            className="absolute text-3xl opacity-30"
            style={{
              left: `${10 + i * 15}%`,
              top: `${5 + (i % 3) * 20}%`,
              transform: `rotate(${i * 30}deg)`,
            }}
          >
            {emoji}
          </span>
        ))}
      </div>

      <div className="relative z-10 max-w-lg w-full">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-emerald-100 flex items-center justify-center">
              <svg className="w-12 h-12 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-white text-lg">
              🎊
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2" style={{ fontFamily: "'DM Serif Display', serif" }}>Booking Confirmed!</h1>
          <p className="text-slate-600">Your dream trip to Goa is officially on! Get ready for an amazing experience.</p>
        </div>

        {/* Confirmation Card */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden mb-6">
          {/* Hotel image banner */}
          <div className="relative h-40 bg-slate-200">
            <img src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=600&h=300&fit=crop&auto=format" alt="The Leela Goa" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
              <div>
                <p className="text-white font-bold text-lg">The Leela Goa</p>
                <p className="text-white/70 text-sm">Cavelossim Beach, South Goa</p>
              </div>
              <div className="bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">Confirmed</div>
            </div>
          </div>

          <div className="p-5">
            {/* Booking ID */}
            <div className="flex items-center justify-between bg-slate-50 rounded-xl p-3.5 mb-4">
              <div>
                <p className="text-xs text-slate-400 font-medium">Booking Reference</p>
                <p className="text-lg font-bold text-slate-900 tracking-widest font-mono">TM-2025-GOA-8847</p>
              </div>
              <button className="text-sky-600 hover:text-sky-800 p-2 hover:bg-sky-50 rounded-lg transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
              <div>
                <p className="text-slate-400 text-xs font-medium">Destination</p>
                <p className="font-semibold text-slate-900">Goa, India 🇮🇳</p>
              </div>
              <div>
                <p className="text-slate-400 text-xs font-medium">Room Type</p>
                <p className="font-semibold text-slate-900">Deluxe Garden Room</p>
              </div>
              <div>
                <p className="text-slate-400 text-xs font-medium">Check-in</p>
                <p className="font-semibold text-slate-900">Thu, 20 Nov 2025</p>
              </div>
              <div>
                <p className="text-slate-400 text-xs font-medium">Check-out</p>
                <p className="font-semibold text-slate-900">Tue, 25 Nov 2025</p>
              </div>
              <div>
                <p className="text-slate-400 text-xs font-medium">Guests</p>
                <p className="font-semibold text-slate-900">2 Adults</p>
              </div>
              <div>
                <p className="text-slate-400 text-xs font-medium">Duration</p>
                <p className="font-semibold text-slate-900">5 Nights</p>
              </div>
            </div>

            <div className="border-t border-slate-100 mt-4 pt-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400">Total Paid</p>
                <p className="text-xl font-bold text-emerald-600">₹60,711</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-400">Booked by</p>
                <p className="text-sm font-semibold text-slate-900">Priya Sharma</p>
                <p className="text-xs text-slate-400">priya@example.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-sky-50 border border-sky-100 rounded-2xl p-4 mb-6">
          <p className="text-sm text-sky-800 font-medium mb-1">📧 Confirmation sent!</p>
          <p className="text-xs text-sky-700">A detailed voucher has been sent to priya@example.com. Please carry a printed/digital copy during check-in.</p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => navigate('my-trips')}
              className="flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 rounded-xl text-sm transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              View Booking
            </button>
            <button className="flex items-center justify-center gap-2 border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold py-3 rounded-xl text-sm transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Ticket
            </button>
          </div>
          <button
            onClick={() => navigate('trip-planner')}
            className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl text-sm transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Plan Your Itinerary
          </button>
          <button
            onClick={() => navigate('home')}
            className="w-full text-sm text-slate-500 hover:text-slate-700 transition-colors py-2"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  )
}
