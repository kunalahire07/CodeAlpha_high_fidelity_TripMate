import { useState } from 'react'
import Navbar from '../components/Navbar'
import type { NavFn } from '../types'

interface Props { navigate: NavFn }

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(i => (
        <svg key={i} className={`w-3.5 h-3.5 ${i <= n ? 'text-amber-400' : 'text-slate-200'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

const hotels = [
  {
    name: 'The Leela Goa',
    stars: 5,
    guestRating: 9.4,
    location: 'Cavelossim Beach, South Goa',
    pricePerNight: 12500,
    totalPrice: 62500,
    nights: 5,
    amenities: ['Infinity Pool', 'Spa', 'Beach Access', 'Restaurant', 'Free WiFi', 'Airport Transfer'],
    img: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=600&h=400&fit=crop&auto=format',
    badge: 'Exceptional',
    badgeColor: 'bg-emerald-600',
    type: 'Resort',
  },
  {
    name: 'W Goa Vagator Beach',
    stars: 5,
    guestRating: 9.1,
    location: 'Vagator Beach, North Goa',
    pricePerNight: 9800,
    totalPrice: 49000,
    nights: 5,
    amenities: ['Pool', 'Rooftop Bar', 'Beach Club', 'Free WiFi', 'Gym', 'Spa'],
    img: 'https://images.unsplash.com/photo-1651376589881-0e5a7eb15ae4?w=600&h=400&fit=crop&auto=format',
    badge: 'Excellent',
    badgeColor: 'bg-sky-600',
    type: 'Resort',
  },
  {
    name: 'Cidade de Goa',
    stars: 4,
    guestRating: 8.7,
    location: 'Vainguinim Beach, Panjim',
    pricePerNight: 5200,
    totalPrice: 26000,
    nights: 5,
    amenities: ['Pool', 'Beach', 'Restaurant', 'Free WiFi', 'Water Sports'],
    img: 'https://images.unsplash.com/photo-1516802206155-e05169365fc7?w=600&h=400&fit=crop&auto=format',
    badge: 'Very Good',
    badgeColor: 'bg-blue-600',
    type: 'Hotel',
  },
  {
    name: "Alila Diwa Goa",
    stars: 5,
    guestRating: 9.2,
    location: 'Majorda Beach, South Goa',
    pricePerNight: 8900,
    totalPrice: 44500,
    nights: 5,
    amenities: ['Pool', 'Spa', 'Restaurant', 'Free WiFi', 'Gym', 'Kids Club'],
    img: 'https://images.unsplash.com/photo-1597221336986-7a948756cd3a?w=600&h=400&fit=crop&auto=format',
    badge: 'Excellent',
    badgeColor: 'bg-sky-600',
    type: 'Resort',
  },
]

export default function HotelSearch({ navigate }: Props) {
  const [view, setView] = useState<'list' | 'grid'>('list')
  const [minStars, setMinStars] = useState(0)
  const [maxPrice, setMaxPrice] = useState(15000)
  const [amenityFilter, setAmenityFilter] = useState<string[]>([])
  const [sortBy, setSortBy] = useState('recommended')
  const [destination, setDestination] = useState('Goa, India')
  const [checkin, setCheckin] = useState('2025-11-20')
  const [checkout, setCheckout] = useState('2025-11-25')
  const [guests, setGuests] = useState('2 Adults')

  const toggleAmenity = (a: string) => {
    setAmenityFilter(prev => prev.includes(a) ? prev.filter(x => x !== a) : [...prev, a])
  }

  const filtered = hotels
    .filter(h => h.stars >= minStars)
    .filter(h => h.pricePerNight <= maxPrice)
    .filter(h => amenityFilter.length === 0 || amenityFilter.every(a => h.amenities.includes(a)))

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar navigate={navigate} activePage="hotels" />

      {/* Search Header */}
      <div className="pt-16 bg-sky-950">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="bg-white rounded-2xl p-4 flex flex-wrap gap-3 items-end shadow-sm">
            <div className="flex flex-col gap-1 flex-1 min-w-40">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Destination</label>
              <input className="border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100" value={destination} onChange={e => setDestination(e.target.value)} />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Check-in</label>
              <input type="date" className="border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100" value={checkin} onChange={e => setCheckin(e.target.value)} />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Check-out</label>
              <input type="date" className="border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100" value={checkout} onChange={e => setCheckout(e.target.value)} />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Guests</label>
              <select className="border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-sky-400 bg-white" value={guests} onChange={e => setGuests(e.target.value)}>
                <option>1 Guest</option>
                <option>2 Adults</option>
                <option>2 Adults, 1 Child</option>
              </select>
            </div>
            <button className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors">
              Search
            </button>
          </div>
          <p className="text-sky-200 text-sm mt-3 px-1">Goa, India · 20–25 Nov 2025 · 5 nights · {guests}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-5">
          <p className="text-sm text-slate-500"><span className="font-semibold text-slate-900">{filtered.length}</span> hotels found in Goa</p>
          <div className="flex items-center gap-3">
            <select
              className="text-sm border border-slate-200 rounded-xl px-3 py-2 bg-white text-slate-700 focus:outline-none focus:border-sky-400"
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
            >
              <option value="recommended">Sort: Recommended</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Guest Rating</option>
            </select>
            <div className="flex border border-slate-200 rounded-xl overflow-hidden">
              <button onClick={() => setView('list')} className={`px-3 py-2 ${view === 'list' ? 'bg-sky-600 text-white' : 'bg-white text-slate-500 hover:bg-slate-50'} transition-colors`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <button onClick={() => setView('grid')} className={`px-3 py-2 ${view === 'grid' ? 'bg-sky-600 text-white' : 'bg-white text-slate-500 hover:bg-slate-50'} transition-colors`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Filters */}
          <aside className="w-60 shrink-0 hidden lg:block">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 sticky top-24 space-y-6">
              <h3 className="font-bold text-slate-900 text-sm">Filters</h3>

              <div>
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-3">Price per Night</label>
                <input
                  type="range"
                  min={3000}
                  max={15000}
                  step={500}
                  value={maxPrice}
                  onChange={e => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-sky-600"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>₹3,000</span>
                  <span className="font-semibold text-sky-700">₹{maxPrice.toLocaleString()}</span>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-3">Star Rating</label>
                {[0, 3, 4, 5].map(s => (
                  <label key={s} className="flex items-center gap-2.5 mb-2 cursor-pointer">
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${minStars === s ? 'border-sky-600 bg-sky-600' : 'border-slate-300'}`} onClick={() => setMinStars(s)}>
                      {minStars === s && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                    <span className="text-sm text-slate-700">{s === 0 ? 'Any' : `${s}+ Stars`}</span>
                  </label>
                ))}
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-3">Amenities</label>
                {['Pool', 'Spa', 'Beach Access', 'Free WiFi', 'Restaurant', 'Gym'].map(a => (
                  <label key={a} className="flex items-center gap-2 mb-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="accent-sky-600 w-4 h-4 rounded"
                      checked={amenityFilter.includes(a)}
                      onChange={() => toggleAmenity(a)}
                    />
                    <span className="text-sm text-slate-700">{a}</span>
                  </label>
                ))}
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-3">Hotel Type</label>
                {['Resort', 'Hotel', 'Boutique', 'Villa'].map(t => (
                  <label key={t} className="flex items-center gap-2 mb-2 cursor-pointer">
                    <input type="checkbox" defaultChecked className="accent-sky-600 w-4 h-4 rounded" />
                    <span className="text-sm text-slate-700">{t}</span>
                  </label>
                ))}
              </div>

              <button onClick={() => { setMinStars(0); setMaxPrice(15000); setAmenityFilter([]) }} className="text-sm text-red-500 hover:text-red-700 transition-colors">
                Clear filters
              </button>
            </div>
          </aside>

          {/* Results */}
          <div className="flex-1">
            {view === 'list' ? (
              <div className="space-y-4">
                {filtered.map(hotel => (
                  <div key={hotel.name} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex hover:shadow-md transition-shadow">
                    <div className="w-72 shrink-0 bg-slate-200 relative">
                      <img src={hotel.img} alt={hotel.name} className="w-full h-full object-cover" />
                      <div className={`absolute top-3 left-3 ${hotel.badgeColor} text-white text-xs font-semibold px-2.5 py-1 rounded-full`}>
                        {hotel.badge}
                      </div>
                    </div>
                    <div className="flex-1 p-5 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-bold text-slate-900 text-lg">{hotel.name}</h3>
                              <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">{hotel.type}</span>
                            </div>
                            <Stars n={hotel.stars} />
                            <p className="text-slate-500 text-sm mt-1 flex items-center gap-1">
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              </svg>
                              {hotel.location}
                            </p>
                          </div>
                          <div className="text-right shrink-0 ml-4">
                            <div className="flex items-center gap-1 justify-end mb-1">
                              <span className="bg-sky-600 text-white text-sm font-bold px-2 py-0.5 rounded">{hotel.guestRating}</span>
                              <span className="text-xs text-slate-500">Guest score</span>
                            </div>
                            <p className="text-2xl font-bold text-sky-700">₹{hotel.pricePerNight.toLocaleString()}</p>
                            <p className="text-xs text-slate-400">per night</p>
                            <p className="text-sm text-slate-600 font-medium mt-0.5">₹{hotel.totalPrice.toLocaleString()} total ({hotel.nights} nights)</p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {hotel.amenities.map(a => (
                            <span key={a} className="text-xs bg-slate-50 text-slate-600 px-2.5 py-1 rounded-full border border-slate-100">
                              {a}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-3 mt-4">
                        <button onClick={() => navigate('hotel-detail')} className="flex-1 border border-sky-200 text-sky-700 text-sm font-semibold py-2.5 rounded-xl hover:bg-sky-50 transition-colors">
                          View Details
                        </button>
                        <button onClick={() => navigate('checkout')} className="flex-1 bg-orange-500 text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-orange-600 transition-colors">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {filtered.map(hotel => (
                  <div key={hotel.name} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow group">
                    <div className="relative h-52 bg-slate-200 overflow-hidden">
                      <img src={hotel.img} alt={hotel.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      <div className={`absolute top-3 left-3 ${hotel.badgeColor} text-white text-xs font-semibold px-2.5 py-1 rounded-full`}>{hotel.badge}</div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-slate-900">{hotel.name}</h3>
                      <Stars n={hotel.stars} />
                      <p className="text-xs text-slate-500 mt-1">📍 {hotel.location}</p>
                      <div className="flex items-center justify-between mt-3">
                        <p className="text-sky-700 font-bold">₹{hotel.pricePerNight.toLocaleString()}<span className="text-xs text-slate-400 font-normal">/night</span></p>
                        <button onClick={() => navigate('hotel-detail')} className="text-xs font-semibold bg-sky-600 text-white px-3 py-1.5 rounded-lg hover:bg-sky-700 transition-colors">View</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
