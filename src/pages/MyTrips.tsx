import Sidebar from '../components/Sidebar'
import type { NavFn } from '../types'

interface Props { navigate: NavFn }

const upcoming = [
  {
    name: 'Goa Getaway',
    destination: 'Goa, India',
    dates: '20–25 Nov 2025',
    travelers: 2,
    status: 'Confirmed',
    img: 'https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?w=400&h=280&fit=crop&auto=format',
    bookingId: 'TM-2025-GOA-8847',
    daysLeft: 14,
  },
  {
    name: 'Swiss Alps Winter',
    destination: 'Zurich, Switzerland',
    dates: '15–22 Jan 2026',
    travelers: 2,
    status: 'Confirmed',
    img: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=280&fit=crop&auto=format',
    bookingId: 'TM-2026-ZUR-2341',
    daysLeft: 71,
  },
]

const previous = [
  {
    name: 'Bangkok City Break',
    destination: 'Bangkok, Thailand',
    dates: '5–9 Jul 2025',
    travelers: 3,
    status: 'Completed',
    img: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=280&fit=crop&auto=format',
  },
  {
    name: 'Bali Honeymoon',
    destination: 'Bali, Indonesia',
    dates: '12–19 Feb 2025',
    travelers: 2,
    status: 'Completed',
    img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=280&fit=crop&auto=format',
  },
  {
    name: 'Maldives Retreat',
    destination: 'Malé, Maldives',
    dates: '28 Dec–3 Jan 2025',
    travelers: 2,
    status: 'Completed',
    img: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=400&h=280&fit=crop&auto=format',
  },
]

export default function MyTrips({ navigate }: Props) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar navigate={navigate} activePage="my-trips" />

      <main className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900" style={{ fontFamily: "'DM Serif Display', serif" }}>My Trips</h1>
            <p className="text-slate-500 mt-1">All your adventures, past and upcoming.</p>
          </div>
          <button onClick={() => navigate('explore')} className="flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Plan New Trip
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Trips', value: '5', icon: '🗺️' },
            { label: 'Countries', value: '7', icon: '🌍' },
            { label: 'Upcoming', value: '2', icon: '📅' },
            { label: 'Total Spent', value: '₹4.2L', icon: '💰' },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex items-center gap-3">
              <span className="text-2xl">{s.icon}</span>
              <div>
                <p className="text-2xl font-bold text-slate-900">{s.value}</p>
                <p className="text-xs text-slate-400">{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Upcoming Trips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {upcoming.map(trip => (
              <div key={trip.name} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-44 bg-slate-200">
                  <img src={trip.img} alt={trip.destination} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className="bg-emerald-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">{trip.status}</span>
                  </div>
                  <div className="absolute bottom-3 left-4">
                    <p className="text-white font-bold text-lg">{trip.name}</p>
                    <p className="text-white/70 text-sm">📍 {trip.destination}</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between text-sm mb-3">
                    <div>
                      <p className="text-slate-400 text-xs">Travel Dates</p>
                      <p className="font-semibold text-slate-900">{trip.dates}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-slate-400 text-xs">Travelers</p>
                      <p className="font-semibold text-slate-900">{trip.travelers} Adults</p>
                    </div>
                    <div className="text-right">
                      <p className="text-slate-400 text-xs">Days Away</p>
                      <p className="font-bold text-sky-600 text-lg">{trip.daysLeft}</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 mb-3">Booking ID: <span className="font-mono font-medium text-slate-600">{trip.bookingId}</span></p>
                  <div className="flex gap-2">
                    <button onClick={() => navigate('trip-planner')} className="flex-1 text-sm font-semibold bg-sky-600 text-white py-2 rounded-xl hover:bg-sky-700 transition-colors">
                      View Itinerary
                    </button>
                    <button onClick={() => navigate('trip-summary')} className="flex-1 text-sm font-semibold border border-slate-200 text-slate-600 py-2 rounded-xl hover:bg-slate-50 transition-colors">
                      Trip Summary
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Previous */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">Past Trips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {previous.map(trip => (
              <div key={trip.name} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
                <div className="relative h-36 bg-slate-200 overflow-hidden">
                  <img src={trip.img} alt={trip.destination} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-2 right-2">
                    <span className="bg-slate-600/80 text-white text-xs font-medium px-2 py-0.5 rounded-full">{trip.status}</span>
                  </div>
                  <p className="absolute bottom-2 left-3 text-white font-bold text-sm">{trip.name}</p>
                </div>
                <div className="p-4">
                  <p className="text-xs text-slate-500 flex items-center gap-1 mb-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {trip.destination}
                  </p>
                  <p className="text-xs text-slate-400">{trip.dates} · {trip.travelers} travelers</p>
                  <button onClick={() => navigate('trip-summary')} className="mt-3 w-full text-xs font-semibold border border-slate-200 text-slate-600 py-2 rounded-lg hover:bg-slate-50 transition-colors">
                    View Trip →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Bookings */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4">All Bookings</h2>
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Booking</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Destination</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Dates</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Status</th>
                  <th className="px-5 py-3" />
                </tr>
              </thead>
              <tbody>
                {[...upcoming, ...previous].map((trip, i) => (
                  <tr key={i} className="border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors">
                    <td className="px-5 py-3.5 font-medium text-slate-900">{trip.name}</td>
                    <td className="px-5 py-3.5 text-slate-600">{trip.destination}</td>
                    <td className="px-5 py-3.5 text-slate-500">{trip.dates}</td>
                    <td className="px-5 py-3.5">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${trip.status === 'Confirmed' ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-600'}`}>
                        {trip.status}
                      </span>
                    </td>
                    <td className="px-5 py-3.5">
                      <button onClick={() => navigate('trip-planner')} className="text-sky-600 hover:text-sky-800 text-xs font-semibold transition-colors">View →</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  )
}
