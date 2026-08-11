import { useState } from 'react'
import Navbar from '../components/Navbar'
import type { NavFn } from '../types'

interface Props { navigate: NavFn }

const flights = [
  { airline: 'IndiGo', code: '6E 341', from: 'BOM', to: 'GOI', dep: '06:25', arr: '07:40', duration: '1h 15m', stops: 'Non-stop', price: 4250, logo: '🔵', class: 'Economy' },
  { airline: 'Air India', code: 'AI 983', from: 'BOM', to: 'GOI', dep: '09:05', arr: '10:20', duration: '1h 15m', stops: 'Non-stop', price: 5100, logo: '🔴', class: 'Economy' },
  { airline: 'SpiceJet', code: 'SG 157', from: 'BOM', to: 'GOI', dep: '11:30', arr: '12:50', duration: '1h 20m', stops: 'Non-stop', price: 3890, logo: '🟠', class: 'Economy' },
  { airline: 'Vistara', code: 'UK 827', from: 'BOM', to: 'GOI', dep: '14:00', arr: '15:15', duration: '1h 15m', stops: 'Non-stop', price: 6200, logo: '🟣', class: 'Economy' },
  { airline: 'IndiGo', code: '6E 543', from: 'BOM', to: 'GOI', dep: '16:55', arr: '19:30', duration: '2h 35m', stops: '1 stop (HYD)', price: 2990, logo: '🔵', class: 'Economy' },
  { airline: 'Air India', code: 'AI 111', from: 'BOM', to: 'GOI', dep: '20:10', arr: '21:25', duration: '1h 15m', stops: 'Non-stop', price: 7800, logo: '🔴', class: 'Business' },
]

export default function FlightSearch({ navigate }: Props) {
  const [sortBy, setSortBy] = useState<'price' | 'duration' | 'recommended'>('recommended')
  const [maxPrice, setMaxPrice] = useState(10000)
  const [stopsFilter, setStopsFilter] = useState<'any' | 'nonstop' | 'one'>('any')
  const [selectedFlight, setSelectedFlight] = useState<number | null>(null)
  const [from, setFrom] = useState('Mumbai (BOM)')
  const [to, setTo] = useState('Goa (GOI)')
  const [date, setDate] = useState('2025-11-20')
  const [passengers, setPassengers] = useState('2 Adults')

  const filtered = flights
    .filter(f => f.price <= maxPrice)
    .filter(f => {
      if (stopsFilter === 'nonstop') return f.stops === 'Non-stop'
      if (stopsFilter === 'one') return f.stops !== 'Non-stop'
      return true
    })
    .sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price
      if (sortBy === 'duration') return a.duration.localeCompare(b.duration)
      return 0
    })

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar navigate={navigate} activePage="flights" />

      <div className="pt-16 bg-sky-950">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Search bar */}
          <div className="bg-white rounded-2xl p-4 flex flex-wrap gap-3 items-end shadow-sm">
            <div className="flex flex-col gap-1 flex-1 min-w-32">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">From</label>
              <input className="border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100" value={from} onChange={e => setFrom(e.target.value)} />
            </div>
            <button className="p-2.5 border border-slate-200 rounded-xl text-slate-400 hover:bg-slate-50 transition-colors mb-0.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </button>
            <div className="flex flex-col gap-1 flex-1 min-w-32">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">To</label>
              <input className="border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100" value={to} onChange={e => setTo(e.target.value)} />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Departure</label>
              <input type="date" className="border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100" value={date} onChange={e => setDate(e.target.value)} />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Passengers</label>
              <select className="border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-sky-400 bg-white" value={passengers} onChange={e => setPassengers(e.target.value)}>
                <option>1 Adult</option>
                <option>2 Adults</option>
                <option>2 Adults, 1 Child</option>
              </select>
            </div>
            <button className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Update Search
            </button>
          </div>

          <p className="text-sky-200 text-sm mt-4 px-1">
            Mumbai → Goa · Thu, 20 Nov 2025 · {passengers} · Economy
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Sort Tabs */}
        <div className="flex items-center justify-between mb-5">
          <p className="text-sm text-slate-500"><span className="font-semibold text-slate-900">{filtered.length}</span> flights found</p>
          <div className="flex gap-2">
            {(['recommended', 'price', 'duration'] as const).map(s => (
              <button
                key={s}
                onClick={() => setSortBy(s)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${sortBy === s ? 'bg-sky-600 text-white' : 'bg-white text-slate-600 border border-slate-200 hover:border-sky-300'}`}
              >
                {s === 'recommended' ? '⭐ Recommended' : s === 'price' ? '💰 Cheapest' : '⚡ Fastest'}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-6">
          {/* Filters */}
          <aside className="w-56 shrink-0 hidden lg:block space-y-5">
            <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4 text-sm">Filters</h3>

              <div className="mb-5">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-3">Max Price</label>
                <input
                  type="range"
                  min={2000}
                  max={10000}
                  step={500}
                  value={maxPrice}
                  onChange={e => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-sky-600"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>₹2,000</span>
                  <span className="font-semibold text-sky-700">₹{maxPrice.toLocaleString()}</span>
                </div>
              </div>

              <div className="mb-5">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-3">Stops</label>
                <div className="space-y-2">
                  {[{ v: 'any', l: 'Any' }, { v: 'nonstop', l: 'Non-stop only' }, { v: 'one', l: '1 stop' }].map(s => (
                    <label key={s.v} className="flex items-center gap-2.5 cursor-pointer">
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${stopsFilter === s.v ? 'border-sky-600 bg-sky-600' : 'border-slate-300'}`} onClick={() => setStopsFilter(s.v as typeof stopsFilter)}>
                        {stopsFilter === s.v && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                      <span className="text-sm text-slate-700">{s.l}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-3">Airlines</label>
                <div className="space-y-2">
                  {['IndiGo', 'Air India', 'SpiceJet', 'Vistara'].map(a => (
                    <label key={a} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" defaultChecked className="accent-sky-600 w-4 h-4 rounded" />
                      <span className="text-sm text-slate-700">{a}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Results */}
          <div className="flex-1 space-y-3">
            {filtered.map((flight, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl border shadow-sm hover:shadow-md transition-all cursor-pointer ${selectedFlight === i ? 'border-sky-400 ring-2 ring-sky-100' : 'border-slate-100'}`}
                onClick={() => setSelectedFlight(selectedFlight === i ? null : i)}
              >
                <div className="p-5 flex items-center gap-4">
                  {/* Airline */}
                  <div className="w-16 text-center shrink-0">
                    <div className="text-2xl">{flight.logo}</div>
                    <p className="text-xs text-slate-500 mt-1 font-medium">{flight.airline}</p>
                    <p className="text-xs text-slate-400">{flight.code}</p>
                  </div>

                  {/* Times */}
                  <div className="flex-1 flex items-center gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-slate-900">{flight.dep}</p>
                      <p className="text-xs text-slate-500 font-medium">{flight.from}</p>
                    </div>
                    <div className="flex-1 flex flex-col items-center">
                      <p className="text-xs text-slate-400 mb-1">{flight.duration}</p>
                      <div className="w-full flex items-center gap-2">
                        <div className="flex-1 h-px bg-slate-200" />
                        <div className={`text-xs font-medium px-2 py-0.5 rounded-full ${flight.stops === 'Non-stop' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>
                          {flight.stops}
                        </div>
                        <div className="flex-1 h-px bg-slate-200" />
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-slate-900">{flight.arr}</p>
                      <p className="text-xs text-slate-500 font-medium">{flight.to}</p>
                    </div>
                  </div>

                  {/* Class */}
                  <div className="text-center shrink-0 hidden sm:block">
                    <p className="text-xs text-slate-400">Class</p>
                    <p className="text-sm font-semibold text-slate-700">{flight.class}</p>
                  </div>

                  {/* Price */}
                  <div className="text-right shrink-0 ml-4">
                    <p className="text-xs text-slate-400">per person</p>
                    <p className="text-2xl font-bold text-sky-700">₹{flight.price.toLocaleString()}</p>
                    <button
                      onClick={e => { e.stopPropagation(); navigate('checkout') }}
                      className="mt-2 bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
                    >
                      Select
                    </button>
                  </div>
                </div>

                {/* Expanded details */}
                {selectedFlight === i && (
                  <div className="border-t border-slate-100 px-5 py-4 bg-slate-50 rounded-b-2xl">
                    <div className="flex flex-wrap gap-6 text-sm text-slate-600">
                      <div>🧳 <span className="font-medium">Baggage:</span> 15 kg check-in + 7 kg cabin</div>
                      <div>🍽️ <span className="font-medium">Meal:</span> Complimentary snack</div>
                      <div>🔄 <span className="font-medium">Cancellation:</span> ₹3,000 fee</div>
                      <div>✏️ <span className="font-medium">Date change:</span> ₹2,000 fee</div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {filtered.length === 0 && (
              <div className="bg-white rounded-2xl p-20 text-center border border-slate-100">
                <span className="text-5xl block mb-4">✈️</span>
                <p className="text-lg font-semibold text-slate-600">No flights match your filters</p>
                <p className="text-sm text-slate-400 mt-1">Try adjusting the price or stops filter</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
