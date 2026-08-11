import Navbar from '../components/Navbar'
import type { NavFn } from '../types'

interface Props { navigate: NavFn }

export default function TripSummary({ navigate }: Props) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar navigate={navigate} />

      <div className="pt-16 bg-gradient-to-br from-sky-900 to-sky-700">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sky-300 text-sm font-semibold uppercase tracking-widest mb-1">Trip Summary</p>
              <h1 className="text-5xl font-bold text-white" style={{ fontFamily: "'DM Serif Display', serif" }}>5 Days in Goa</h1>
              <div className="flex flex-wrap gap-5 mt-4 text-white/80 text-sm">
                <span>📅 20–25 November 2025</span>
                <span>👥 2 Travelers</span>
                <span>💰 Total: ₹1,08,461</span>
                <span>✅ Booking ID: TM-2025-GOA-8847</span>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-white/25 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Share Trip
              </button>
              <button onClick={() => navigate('trip-planner')} className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-white/25 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Edit Trip
              </button>
              <button className="flex items-center gap-2 bg-white text-sky-800 px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-sky-50 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Destination Overview */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="relative h-52">
                <img src="https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?w=900&h=400&fit=crop&auto=format" alt="Goa" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                <div className="absolute inset-0 flex items-center px-8">
                  <div>
                    <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "'DM Serif Display', serif" }}>Goa, India</h2>
                    <p className="text-white/80 mt-1">The Konkan Coast · South Asia · ⭐ 4.8</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-4 divide-x divide-slate-100 border-t border-slate-100">
                {[
                  { label: 'Duration', value: '5 Days' },
                  { label: 'Hotel', value: 'The Leela Goa' },
                  { label: 'Travelers', value: '2 Adults' },
                  { label: 'Status', value: '✅ Confirmed' },
                ].map(s => (
                  <div key={s.label} className="p-4 text-center">
                    <p className="text-xs text-slate-400">{s.label}</p>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">{s.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Flight Info */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-7 h-7 bg-sky-100 text-sky-700 rounded-lg flex items-center justify-center text-sm">✈️</span>
                Flight Details
              </h3>
              <div className="space-y-3">
                {[
                  { label: 'Outbound', detail: 'IndiGo 6E 341 · Mumbai (BOM) → Goa (GOI)', time: 'Thu 20 Nov · 06:25 – 07:40', price: '₹4,250/person' },
                  { label: 'Return', detail: 'IndiGo 6E 543 · Goa (GOI) → Mumbai (BOM)', time: 'Tue 25 Nov · 18:30 – 19:45', price: '₹4,250/person' },
                ].map(f => (
                  <div key={f.label} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                    <span className="text-xs font-bold text-sky-700 bg-sky-100 px-2 py-1 rounded-lg shrink-0">{f.label}</span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-slate-900">{f.detail}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{f.time}</p>
                    </div>
                    <p className="text-sm font-bold text-sky-700 shrink-0">{f.price}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hotel Info */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-7 h-7 bg-violet-100 text-violet-700 rounded-lg flex items-center justify-center text-sm">🏨</span>
                Hotel Details
              </h3>
              <div className="flex gap-4">
                <div className="w-28 h-20 rounded-xl overflow-hidden bg-slate-200 shrink-0">
                  <img src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=200&h=160&fit=crop&auto=format" alt="Hotel" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900">The Leela Goa</h4>
                  <p className="text-xs text-slate-500 mt-0.5">📍 Cavelossim Beach, South Goa</p>
                  <div className="flex items-center gap-1 mt-1">
                    {[1,2,3,4,5].map(i => <span key={i} className="text-amber-400 text-xs">★</span>)}
                    <span className="text-xs text-slate-500 ml-1">5-Star Luxury Resort</span>
                  </div>
                  <div className="flex gap-4 mt-2 text-xs text-slate-600">
                    <span>Check-in: 20 Nov 2025</span>
                    <span>Check-out: 25 Nov 2025</span>
                    <span>5 nights</span>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-lg font-bold text-sky-700">₹60,711</p>
                  <p className="text-xs text-slate-400">total (incl. taxes)</p>
                </div>
              </div>
            </div>

            {/* Itinerary Summary */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-7 h-7 bg-orange-100 text-orange-700 rounded-lg flex items-center justify-center text-sm">🗺️</span>
                  Trip Itinerary
                </h3>
                <button onClick={() => navigate('trip-planner')} className="text-xs text-sky-600 hover:text-sky-800 font-semibold transition-colors">
                  View Full Itinerary →
                </button>
              </div>
              <div className="space-y-4">
                {[
                  { day: 1, title: 'Arrival + Beach Evening', highlights: ['Hotel check-in at The Leela Goa', 'Evening walk on Cavelossim Beach', 'Welcome dinner at Jamavar'] },
                  { day: 2, title: 'North Goa Sightseeing', highlights: ['Basilica of Bom Jesus', 'Fontainhas Latin Quarter', 'Calangute & Baga Beach'] },
                  { day: 3, title: 'Adventure Day', highlights: ['Scuba Diving at Grande Island', 'Water sports at Calangute', 'Sunset dinner cruise'] },
                  { day: 4, title: 'Local Exploration', highlights: ['Dudhsagar Waterfall trip', 'Spice Plantation tour', 'Dinner at Thalassa'] },
                  { day: 5, title: 'Shopping + Departure', highlights: ['Mapusa Market shopping', 'Morjim Beach farewell lunch', 'Departure flight'] },
                ].map(day => (
                  <div key={day.day} className="flex gap-4">
                    <div className="shrink-0">
                      <div className="w-10 h-10 rounded-full bg-sky-600 text-white flex items-center justify-center text-sm font-bold">{day.day}</div>
                    </div>
                    <div className="flex-1 border-l border-slate-100 pl-4 pb-4 last:pb-0">
                      <h4 className="font-semibold text-slate-900 text-sm">Day {day.day}: {day.title}</h4>
                      <ul className="mt-1 space-y-0.5">
                        {day.highlights.map(h => (
                          <li key={h} className="text-xs text-slate-500 flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-slate-300 shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cost Summary Sidebar */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 sticky top-24">
              <h3 className="font-bold text-slate-900 mb-4">Cost Breakdown</h3>
              <div className="space-y-3">
                {[
                  { item: 'Flights (2 persons × 2 trips)', amount: '₹17,000' },
                  { item: 'Hotel (5 nights)', amount: '₹49,000' },
                  { item: 'Hotel service fee', amount: '₹2,450' },
                  { item: 'Hotel taxes (GST)', amount: '₹9,261' },
                  { item: 'Activities & tours', amount: '₹14,700' },
                  { item: 'Food & dining (est.)', amount: '₹8,500' },
                  { item: 'Local transport (est.)', amount: '₹3,500' },
                  { item: 'Shopping (est.)', amount: '₹4,050' },
                ].map(c => (
                  <div key={c.item} className="flex justify-between text-sm">
                    <span className="text-slate-600">{c.item}</span>
                    <span className="font-medium text-slate-900">{c.amount}</span>
                  </div>
                ))}
                <div className="border-t border-slate-200 pt-3 mt-3 flex justify-between font-bold text-slate-900">
                  <span>Total Estimate</span>
                  <span className="text-sky-700 text-lg">₹1,08,461</span>
                </div>
                <p className="text-xs text-slate-400">Per person: ~₹54,230</p>
              </div>

              <div className="mt-5 space-y-2">
                <button onClick={() => navigate('checkout')} className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl text-sm transition-colors">
                  Book Full Trip Package
                </button>
                <button onClick={() => navigate('trip-planner')} className="w-full border border-slate-200 text-slate-700 font-semibold py-2.5 rounded-xl text-sm hover:bg-slate-50 transition-colors">
                  Edit Itinerary
                </button>
              </div>
            </div>

            <div className="bg-sky-50 border border-sky-100 rounded-2xl p-4">
              <p className="text-sm font-semibold text-sky-800 mb-1">📋 Travel Essentials</p>
              <ul className="text-xs text-sky-700 space-y-1 mt-2">
                <li>✓ Aadhaar Card / Passport</li>
                <li>✓ Hotel booking vouchers</li>
                <li>✓ Flight e-tickets</li>
                <li>✓ Travel insurance (recommended)</li>
                <li>✓ Emergency contacts saved</li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4">
              <p className="text-sm font-semibold text-amber-800 mb-1">🌤️ Weather Forecast</p>
              <p className="text-xs text-amber-700">Goa in November: 25–32°C, sunny and pleasant. Perfect beach weather!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
