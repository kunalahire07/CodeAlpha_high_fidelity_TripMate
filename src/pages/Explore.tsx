import { useState } from 'react'
import Navbar from '../components/Navbar'
import type { NavFn } from '../types'

interface Props { navigate: NavFn }

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <svg key={i} className={`w-3.5 h-3.5 ${i <= Math.floor(rating) ? 'text-amber-400' : 'text-slate-200'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

const categories = ['All', 'Beaches', 'Mountains', 'Cities', 'Adventure', 'Heritage', 'Nature']

const allDestinations = [
  { name: 'Santorini', country: 'Greece', desc: 'Iconic white-washed villages perched on dramatic volcanic cliffs above the Aegean Sea.', img: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&h=400&fit=crop&auto=format', price: '₹85,000', rating: 4.9, category: 'Beaches', duration: '5–7 days', budget: 'Luxury' },
  { name: 'Bali', country: 'Indonesia', desc: 'Lush terraced rice fields, ancient temples, and world-class surf beaches in one magical island.', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=400&fit=crop&auto=format', price: '₹42,000', rating: 4.8, category: 'Nature', duration: '5–8 days', budget: 'Mid-range' },
  { name: 'Tokyo', country: 'Japan', desc: 'A city where neon-lit modernity meets ancient shrines, incredible food, and refined culture.', img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop&auto=format', price: '₹95,000', rating: 4.7, category: 'Cities', duration: '6–8 days', budget: 'Luxury' },
  { name: 'Maldives', country: 'Maldives', desc: 'Overwater bungalows, crystal-clear lagoons, and vibrant coral reefs in the Indian Ocean.', img: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&h=400&fit=crop&auto=format', price: '₹1,10,000', rating: 4.9, category: 'Beaches', duration: '4–6 days', budget: 'Luxury' },
  { name: 'Swiss Alps', country: 'Switzerland', desc: 'Majestic snow-capped peaks, pristine ski slopes, and charming alpine villages await.', img: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=400&fit=crop&auto=format', price: '₹1,50,000', rating: 4.8, category: 'Mountains', duration: '7–10 days', budget: 'Luxury' },
  { name: 'Paris', country: 'France', desc: 'The city of light — art museums, romantic cafés, couture fashion, and the iconic Eiffel Tower.', img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop&auto=format', price: '₹75,000', rating: 4.6, category: 'Cities', duration: '5–7 days', budget: 'Mid-range' },
  { name: 'Goa', country: 'India', desc: "India's party capital with golden beaches, Portuguese heritage, and a vibrant nightlife scene.", img: 'https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?w=600&h=400&fit=crop&auto=format', price: '₹18,000', rating: 4.5, category: 'Beaches', duration: '3–5 days', budget: 'Budget' },
  { name: 'Machu Picchu', country: 'Peru', desc: 'The lost city of the Incas — an ancient citadel set high in the Andes mountains of Peru.', img: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=600&h=400&fit=crop&auto=format', price: '₹1,20,000', rating: 4.9, category: 'Heritage', duration: '8–12 days', budget: 'Luxury' },
  { name: 'Himalayas', country: 'India/Nepal', desc: "Trek through the world's highest mountain range, witness stunning sunrises over Everest's peak.", img: 'https://images.unsplash.com/photo-1533240332313-0db49b459ad6?w=600&h=400&fit=crop&auto=format', price: '₹35,000', rating: 4.8, category: 'Adventure', duration: '10–14 days', budget: 'Mid-range' },
]

export default function Explore({ navigate }: Props) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')
  const [budget, setBudget] = useState('Any')
  const [duration, setDuration] = useState('Any')
  const [minRating, setMinRating] = useState(0)

  const filtered = allDestinations.filter(d => {
    const matchCat = activeCategory === 'All' || d.category === activeCategory
    const matchSearch = d.name.toLowerCase().includes(search.toLowerCase()) || d.country.toLowerCase().includes(search.toLowerCase())
    const matchBudget = budget === 'Any' || d.budget === budget
    const matchRating = d.rating >= minRating
    return matchCat && matchSearch && matchBudget && matchRating
  })

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar navigate={navigate} activePage="explore" />

      {/* Page Header */}
      <div className="pt-16 bg-gradient-to-br from-sky-950 to-sky-800">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-2">Discover</p>
          <h1 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>Explore Destinations</h1>
          <p className="text-sky-200/80 text-lg max-w-xl">Find your perfect destination from our curated collection of 500+ incredible places around the world.</p>

          {/* Search */}
          <div className="mt-8 relative max-w-xl">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              className="w-full pl-12 pr-4 py-3.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:bg-white/20 focus:border-white/40 transition-all"
              placeholder="Search destinations, countries..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mt-6">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-white text-sky-800 shadow-sm'
                    : 'bg-white/10 text-white/80 hover:bg-white/20 border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <aside className="w-64 shrink-0 hidden lg:block">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 sticky top-24">
              <h3 className="font-bold text-slate-900 mb-5 text-base">Filters</h3>

              <div className="space-y-6">
                <div>
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-3">Budget</label>
                  <div className="space-y-2">
                    {['Any', 'Budget', 'Mid-range', 'Luxury'].map(b => (
                      <label key={b} className="flex items-center gap-2.5 cursor-pointer group">
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${budget === b ? 'border-sky-600 bg-sky-600' : 'border-slate-300 group-hover:border-sky-400'}`} onClick={() => setBudget(b)}>
                          {budget === b && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </div>
                        <span className="text-sm text-slate-700">{b}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-3">Trip Duration</label>
                  <div className="space-y-2">
                    {['Any', '1–3 days', '4–7 days', '8+ days'].map(d => (
                      <label key={d} className="flex items-center gap-2.5 cursor-pointer group">
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${duration === d ? 'border-sky-600 bg-sky-600' : 'border-slate-300 group-hover:border-sky-400'}`} onClick={() => setDuration(d)}>
                          {duration === d && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </div>
                        <span className="text-sm text-slate-700">{d}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-3">Minimum Rating</label>
                  {[0, 4, 4.5, 4.8].map(r => (
                    <label key={r} className="flex items-center gap-2.5 cursor-pointer group mb-2">
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${minRating === r ? 'border-sky-600 bg-sky-600' : 'border-slate-300 group-hover:border-sky-400'}`} onClick={() => setMinRating(r)}>
                        {minRating === r && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                      <span className="text-sm text-slate-700">{r === 0 ? 'Any' : `${r}+ Stars`}</span>
                    </label>
                  ))}
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-3">Travel Type</label>
                  <div className="space-y-2">
                    {['Solo', 'Couple', 'Family', 'Group'].map(t => (
                      <label key={t} className="flex items-center gap-2.5 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500 accent-sky-600" />
                        <span className="text-sm text-slate-700">{t}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => { setActiveCategory('All'); setSearch(''); setBudget('Any'); setDuration('Any'); setMinRating(0) }}
                  className="w-full text-sm text-slate-500 hover:text-red-600 transition-colors text-left"
                >
                  Clear all filters
                </button>
              </div>
            </div>
          </aside>

          {/* Results */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-slate-600 text-sm">
                <span className="font-semibold text-slate-900">{filtered.length}</span> destinations found
              </p>
              <select className="text-sm border border-slate-200 rounded-xl px-3 py-2 bg-white text-slate-700 focus:outline-none focus:border-sky-400">
                <option>Sort: Popular</option>
                <option>Sort: Price (Low to High)</option>
                <option>Sort: Rating</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filtered.map(dest => (
                <div key={dest.name} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg border border-slate-100 transition-all duration-300 flex flex-col">
                  <div className="relative h-44 bg-slate-200 overflow-hidden">
                    <img src={dest.img} alt={dest.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute top-3 right-3">
                      <span className="bg-white/90 text-sky-700 text-xs font-semibold px-2.5 py-1 rounded-full">{dest.category}</span>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <div>
                        <h3 className="font-bold text-slate-900">{dest.name}</h3>
                        <p className="text-slate-500 text-xs flex items-center gap-1 mt-0.5">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          {dest.country}
                        </p>
                      </div>
                      <div className="text-right shrink-0 ml-2">
                        <p className="text-xs text-slate-400">from</p>
                        <p className="text-sky-700 font-bold">{dest.price}</p>
                      </div>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed mt-2 mb-3 flex-1 line-clamp-2">{dest.desc}</p>
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                      <span>⏱ {dest.duration}</span>
                      <span>·</span>
                      <span>💰 {dest.budget}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <Stars rating={Math.floor(dest.rating)} />
                        <span className="text-xs text-slate-500 font-medium">{dest.rating}</span>
                      </div>
                      <button
                        onClick={() => navigate('destination')}
                        className="text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 px-3 py-1.5 rounded-lg transition-colors"
                      >
                        Explore →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-20 text-slate-400">
                <span className="text-5xl block mb-4">🗺️</span>
                <p className="text-lg font-semibold text-slate-600">No destinations found</p>
                <p className="text-sm mt-1">Try adjusting your filters or search term</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
