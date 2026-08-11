import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import type { NavFn } from '../types'

interface Props { navigate: NavFn }

interface WishItem {
  id: number
  name: string
  type: 'destination' | 'hotel' | 'activity'
  location: string
  price: string
  rating: number
  img: string
}

const initialItems: WishItem[] = [
  { id: 1, name: 'Santorini', type: 'destination', location: 'Greece', price: '₹85,000', rating: 4.9, img: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&h=300&fit=crop&auto=format' },
  { id: 2, name: 'Maldives Water Villas', type: 'destination', location: 'Maldives', price: '₹1,10,000', rating: 4.9, img: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=400&h=300&fit=crop&auto=format' },
  { id: 3, name: 'W Goa Vagator Beach', type: 'hotel', location: 'North Goa, India', price: '₹9,800/night', rating: 4.8, img: 'https://images.unsplash.com/photo-1651376589881-0e5a7eb15ae4?w=400&h=300&fit=crop&auto=format' },
  { id: 4, name: 'Swiss Alps Trek', type: 'activity', location: 'Zermatt, Switzerland', price: '₹12,000', rating: 4.9, img: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop&auto=format' },
  { id: 5, name: 'Tokyo City Explorer', type: 'destination', location: 'Japan', price: '₹95,000', rating: 4.7, img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop&auto=format' },
  { id: 6, name: 'Alila Diwa Goa', type: 'hotel', location: 'South Goa, India', price: '₹8,900/night', rating: 4.8, img: 'https://images.unsplash.com/photo-1597221336986-7a948756cd3a?w=400&h=300&fit=crop&auto=format' },
]

const typeBadge: Record<string, string> = {
  destination: 'bg-sky-100 text-sky-700',
  hotel: 'bg-violet-100 text-violet-700',
  activity: 'bg-amber-100 text-amber-700',
}

export default function Wishlist({ navigate }: Props) {
  const [items, setItems] = useState<WishItem[]>(initialItems)
  const [filter, setFilter] = useState<'all' | 'destination' | 'hotel' | 'activity'>('all')

  const remove = (id: number) => setItems(prev => prev.filter(i => i.id !== id))

  const filtered = filter === 'all' ? items : items.filter(i => i.type === filter)

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar navigate={navigate} activePage="wishlist" />

      <main className="flex-1 p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900" style={{ fontFamily: "'DM Serif Display', serif" }}>My Wishlist</h1>
            <p className="text-slate-500 mt-1">{items.length} saved items</p>
          </div>
          <button onClick={() => navigate('explore')} className="flex items-center gap-2 bg-sky-600 text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-sky-700 transition-colors">
            + Explore More
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-6">
          {(['all', 'destination', 'hotel', 'activity'] as const).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors capitalize ${filter === f ? 'bg-sky-600 text-white' : 'bg-white text-slate-600 border border-slate-200 hover:border-sky-300'}`}
            >
              {f === 'all' ? 'All' : f.charAt(0).toUpperCase() + f.slice(1) + 's'}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="bg-white rounded-2xl p-20 text-center border border-slate-100">
            <span className="text-5xl block mb-4">❤️</span>
            <p className="text-lg font-semibold text-slate-600">No saved items here</p>
            <p className="text-sm text-slate-400 mt-1">Explore destinations and save your favourites</p>
            <button onClick={() => navigate('explore')} className="mt-4 bg-sky-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-sky-700 transition-colors">
              Explore Now
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {filtered.map(item => (
              <div key={item.id} className="group bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-44 bg-slate-200 overflow-hidden">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full capitalize bg-white/90 ${typeBadge[item.type]}`}>
                      {item.type}
                    </span>
                  </div>
                  <button
                    onClick={() => remove(item.id)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 hover:bg-red-50 flex items-center justify-center text-red-500 hover:text-red-600 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <h3 className="font-bold text-slate-900">{item.name}</h3>
                      <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        {item.location}
                      </p>
                    </div>
                    <div className="text-right shrink-0 ml-2">
                      <p className="text-xs text-slate-400">from</p>
                      <p className="text-sky-700 font-bold text-sm">{item.price}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5 mt-2 mb-3">
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} className={`w-3.5 h-3.5 ${i <= Math.floor(item.rating) ? 'text-amber-400' : 'text-slate-200'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-xs text-slate-500 ml-1">{item.rating}</span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => navigate(item.type === 'hotel' ? 'hotel-detail' : 'destination')}
                      className="flex-1 text-xs font-semibold border border-slate-200 text-slate-600 py-2 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      View
                    </button>
                    <button
                      onClick={() => navigate('checkout')}
                      className="flex-1 text-xs font-semibold bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
