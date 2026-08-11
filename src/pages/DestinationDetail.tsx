import { useState } from 'react'
import Navbar from '../components/Navbar'
import type { NavFn } from '../types'

interface Props { navigate: NavFn }

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <svg key={i} className={`w-4 h-4 ${i <= Math.floor(rating) ? 'text-amber-400' : 'text-slate-200'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

const attractions = [
  { name: 'Calangute Beach', type: 'Beach', img: 'https://images.unsplash.com/photo-1541417904950-b855846fe074?w=400&h=300&fit=crop&auto=format', desc: "Goa's most popular beach — golden sands, beach shacks, and watersports all day long." },
  { name: 'Basilica of Bom Jesus', type: 'Heritage', img: 'https://images.unsplash.com/photo-1712510817140-917938f92e5b?w=400&h=300&fit=crop&auto=format', desc: 'A UNESCO World Heritage Site housing the mortal remains of St. Francis Xavier.' },
  { name: 'Dudhsagar Falls', type: 'Nature', img: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=400&h=300&fit=crop&auto=format', desc: "One of India's tallest waterfalls — a four-tiered cascade deep in the Western Ghats jungle." },
]

const hotels = [
  { name: 'The Leela Goa', stars: 5, price: '₹12,500 / night', img: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400&h=280&fit=crop&auto=format', rating: 4.9 },
  { name: 'W Goa Vagator Beach', stars: 5, price: '₹9,800 / night', img: 'https://images.unsplash.com/photo-1651376589881-0e5a7eb15ae4?w=400&h=280&fit=crop&auto=format', rating: 4.8 },
  { name: 'Cidade de Goa', stars: 4, price: '₹5,200 / night', img: 'https://images.unsplash.com/photo-1516802206155-e05169365fc7?w=400&h=280&fit=crop&auto=format', rating: 4.6 },
]

const activities = [
  { name: 'Water Sports Package', price: '₹2,000/person', duration: '3 hours', icon: '🏄' },
  { name: 'Sunset Dinner Cruise', price: '₹3,500/person', duration: '2 hours', icon: '⛵' },
  { name: 'Spice Plantation Tour', price: '₹1,200/person', duration: '4 hours', icon: '🌿' },
  { name: 'Old Goa Heritage Walk', price: '₹800/person', duration: '2.5 hours', icon: '🏛️' },
  { name: 'Night Market Experience', price: '₹500/person', duration: '3 hours', icon: '🌙' },
  { name: 'Scuba Diving (Beginner)', price: '₹4,000/person', duration: '2 hours', icon: '🤿' },
]

export default function DestinationDetail({ navigate }: Props) {
  const [activeTab, setActiveTab] = useState<'overview' | 'attractions' | 'hotels' | 'activities' | 'tips'>('overview')
  const [wishlisted, setWishlisted] = useState(false)

  const tabs = ['overview', 'attractions', 'hotels', 'activities', 'tips'] as const

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar navigate={navigate} />

      {/* Hero */}
      <div className="pt-16 relative h-[70vh] bg-slate-900 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?w=1600&h=900&fit=crop&auto=format"
          alt="Goa beach"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent" />

        {/* Back button */}
        <button onClick={() => navigate('explore')} className="absolute top-24 left-6 flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors bg-black/20 backdrop-blur-sm px-3 py-2 rounded-lg">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>

        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-orange-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">🏖️ Beaches</span>
                <span className="bg-white/15 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full border border-white/20">India</span>
              </div>
              <h1 className="text-5xl font-bold text-white mb-2" style={{ fontFamily: "'DM Serif Display', serif" }}>Goa, India</h1>
              <div className="flex items-center gap-3 text-white/80">
                <div className="flex items-center gap-1.5">
                  <Stars rating={5} />
                  <span className="text-sm font-medium">4.8 · 2,340 reviews</span>
                </div>
                <span>·</span>
                <span className="text-sm">Best: Nov – Feb</span>
                <span>·</span>
                <span className="text-sm">Avg trip: 4–6 days</span>
              </div>
            </div>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={() => setWishlisted(!wishlisted)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border transition-all ${wishlisted ? 'bg-red-500 border-red-500 text-white' : 'bg-white/15 backdrop-blur-sm border-white/20 text-white hover:bg-white/25'}`}
              >
                <svg className="w-4 h-4" fill={wishlisted ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {wishlisted ? 'Wishlisted' : 'Add to Wishlist'}
              </button>
              <button onClick={() => navigate('hotels')} className="flex items-center gap-2 px-4 py-2.5 bg-sky-600 hover:bg-sky-700 rounded-xl text-sm font-semibold text-white transition-colors">
                Book Hotel
              </button>
              <button onClick={() => navigate('trip-planner')} className="flex items-center gap-2 px-4 py-2.5 bg-orange-500 hover:bg-orange-600 rounded-xl text-sm font-semibold text-white transition-colors">
                Plan Trip
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex overflow-x-auto">
            {[
              { label: 'Best Time', value: 'Nov – Feb' },
              { label: 'Avg Duration', value: '4–6 Days' },
              { label: 'Budget', value: '₹15,000 – ₹80,000' },
              { label: 'Language', value: 'Konkani, English' },
              { label: 'Currency', value: 'INR (₹)' },
              { label: 'Visa', value: 'Not Required' },
            ].map(s => (
              <div key={s.label} className="flex flex-col px-6 py-4 border-r border-slate-100 shrink-0">
                <span className="text-xs text-slate-400 font-medium">{s.label}</span>
                <span className="text-sm font-semibold text-slate-900 mt-0.5">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-slate-100 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-4 text-sm font-medium capitalize border-b-2 transition-colors ${activeTab === tab ? 'border-sky-600 text-sky-700' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
              >
                {tab === 'tips' ? 'Travel Tips' : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Overview */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>About Goa</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Goa is India's smallest state but packs an outsized punch when it comes to experiences. Nestled along the Konkan Coast of southwestern India, this former Portuguese colony is celebrated for its golden beaches stretching for miles, vibrant nightlife, fresh seafood, and a laid-back atmosphere unlike anywhere else in India.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Beyond the beaches, Goa has a rich cultural heritage — stunning baroque churches and cathedrals in Old Goa (a UNESCO World Heritage Site), spice plantations in the hinterlands, and a unique blend of Indian and Portuguese architecture in its whitewashed villages. Whether you're a sun-seeker, a history buff, an adventurer, or a foodie, Goa delivers.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-4">Top Attractions</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {attractions.map(a => (
                    <div key={a.name} className="group rounded-xl overflow-hidden border border-slate-100">
                      <div className="h-32 bg-slate-200 overflow-hidden">
                        <img src={a.img} alt={a.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      </div>
                      <div className="p-3">
                        <span className="text-xs text-sky-600 font-semibold">{a.type}</span>
                        <h4 className="font-semibold text-slate-900 text-sm mt-0.5">{a.name}</h4>
                        <p className="text-slate-500 text-xs mt-1 leading-relaxed line-clamp-2">{a.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <div className="bg-sky-600 rounded-2xl p-5 text-white">
                <h3 className="font-bold text-lg mb-1" style={{ fontFamily: "'DM Serif Display', serif" }}>Plan Your Goa Trip</h3>
                <p className="text-sky-100 text-sm mb-4">Let TripMate build your perfect Goa itinerary in minutes.</p>
                <button onClick={() => navigate('trip-planner')} className="w-full bg-white text-sky-700 font-semibold py-2.5 rounded-xl text-sm hover:bg-sky-50 transition-colors">
                  Create Itinerary →
                </button>
              </div>
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-3 text-sm">Estimated Budget</h3>
                {[
                  { type: 'Budget', range: '₹8,000 – ₹15,000', note: 'Hostels, local food, shared transport' },
                  { type: 'Mid-range', range: '₹15,000 – ₹35,000', note: '3-star hotels, mix of eating out' },
                  { type: 'Luxury', range: '₹35,000+', note: '5-star resorts, fine dining, private transfers' },
                ].map(b => (
                  <div key={b.type} className="py-3 border-b border-slate-50 last:border-0">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-slate-800">{b.type}</span>
                      <span className="text-sm font-bold text-sky-700">{b.range}</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">{b.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Attractions */}
        {activeTab === 'attractions' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...attractions, ...attractions].slice(0, 6).map((a, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm group">
                <div className="h-48 bg-slate-200 overflow-hidden">
                  <img src={a.img} alt={a.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full">{a.type}</span>
                  <h3 className="font-bold text-slate-900 mt-2 text-lg">{a.name}</h3>
                  <p className="text-slate-500 text-sm mt-1 leading-relaxed">{a.desc}</p>
                  <button className="mt-4 text-sm font-semibold text-sky-600 hover:text-sky-800 transition-colors">Learn more →</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Hotels */}
        {activeTab === 'hotels' && (
          <div className="space-y-4">
            {hotels.map(h => (
              <div key={h.name} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex">
                <div className="w-64 shrink-0 bg-slate-200">
                  <img src={h.img} alt={h.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-slate-900 text-lg">{h.name}</h3>
                        <div className="flex items-center gap-1 mt-0.5">
                          {Array.from({ length: h.stars }).map((_, i) => (
                            <svg key={i} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                          <span className="text-xs text-slate-500 ml-1">Guest rating: {h.rating}</span>
                        </div>
                        <p className="text-sm text-slate-500 mt-1">📍 Cavelossim Beach, South Goa</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-sky-700">{h.price}</p>
                        <p className="text-xs text-slate-400">incl. taxes</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {['Pool', 'Spa', 'Beach Access', 'Free WiFi', 'Restaurant'].map(a => (
                        <span key={a} className="text-xs bg-slate-50 text-slate-600 px-2.5 py-1 rounded-full border border-slate-100">{a}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <button onClick={() => navigate('hotel-detail')} className="flex-1 text-sm font-semibold border border-sky-200 text-sky-700 py-2 rounded-xl hover:bg-sky-50 transition-colors">
                      View Details
                    </button>
                    <button onClick={() => navigate('checkout')} className="flex-1 text-sm font-semibold bg-sky-600 text-white py-2 rounded-xl hover:bg-sky-700 transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Activities */}
        {activeTab === 'activities' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {activities.map(a => (
              <div key={a.name} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-sky-50 rounded-2xl flex items-center justify-center text-2xl shrink-0">{a.icon}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 text-sm">{a.name}</h3>
                  <div className="flex items-center gap-2 mt-1 text-xs text-slate-500">
                    <span>⏱ {a.duration}</span>
                    <span>·</span>
                    <span className="text-sky-700 font-semibold">{a.price}</span>
                  </div>
                  <button onClick={() => navigate('checkout')} className="mt-3 text-xs font-semibold bg-orange-500 text-white px-3 py-1.5 rounded-lg hover:bg-orange-600 transition-colors">
                    Book Activity
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Travel Tips */}
        {activeTab === 'tips' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {[
              { title: 'Best Time to Visit', icon: '🌤️', content: 'The ideal time is November to February when the weather is dry, sunny, and pleasant (20–32°C). The monsoon season (June–September) brings heavy rainfall but prices drop significantly.' },
              { title: 'Getting Around', icon: '🛵', content: 'Renting a scooter (₹300–500/day) is the most popular way to explore Goa. Auto-rickshaws and taxis are widely available. App-based cabs (Rapido, Ola) work in urban areas.' },
              { title: 'Local Food to Try', icon: '🍽️', content: "Don't miss fish curry rice, prawn balchão, bebinca (layered Goan cake), and a cold Kingfisher at a beach shack. The Sunday Night Market at Arpora is a foodie paradise." },
              { title: 'Safety & Tips', icon: '🛡️', content: 'Goa is generally safe. Be cautious of rip currents at some beaches. Keep valuables secure in busy areas. Carry small change — many beach shacks are cash-only.' },
              { title: 'Must-Pack Items', icon: '🎒', content: 'Sunscreen (SPF 50+), insect repellent, light cotton clothes, reef-safe flip flops, waterproof bag for beach trips, and an Adhar card/passport copy for hotel check-ins.' },
              { title: 'Connectivity', icon: '📶', content: 'Jio and Airtel have excellent coverage across Goa. Most hotels and cafés offer free WiFi. A local SIM card is cheap and recommended for navigation and calling.' },
            ].map(tip => (
              <div key={tip.title} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{tip.icon}</span>
                  <h3 className="font-bold text-slate-900">{tip.title}</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{tip.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
