import { useState } from 'react'
import Navbar from '../components/Navbar'
import type { NavFn } from '../types'

interface Props { navigate: NavFn }

const images = [
  'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=900&h=600&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1651376589881-0e5a7eb15ae4?w=900&h=600&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1516802206155-e05169365fc7?w=900&h=600&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1597221336986-7a948756cd3a?w=900&h=600&fit=crop&auto=format',
]

const rooms = [
  { name: 'Deluxe Garden Room', size: '45 sqm', beds: '1 King Bed', price: 9800, maxGuests: 2, amenities: ['Garden View', 'Bathtub', 'Free WiFi', 'Mini Bar', 'Smart TV'] },
  { name: 'Ocean Suite', size: '72 sqm', beds: '1 King Bed', price: 14500, maxGuests: 2, amenities: ['Ocean View', 'Jacuzzi', 'Private Balcony', 'Butler Service', 'Free WiFi'] },
  { name: 'Family Pool Villa', size: '120 sqm', beds: '2 King Beds', price: 22000, maxGuests: 4, amenities: ['Private Pool', 'Kitchen', 'Living Room', 'Beach Access', 'Free WiFi'] },
]

const reviews = [
  { name: 'Arjun Kapoor', rating: 5, date: 'October 2025', comment: 'Absolutely magical stay. The infinity pool overlooking the Arabian Sea is something else entirely. Staff were incredibly warm and attentive throughout our 6-night honeymoon.' },
  { name: 'Sarah Mitchell', rating: 5, date: 'September 2025', comment: 'The best hotel I have ever stayed in. The food at Jamavar restaurant was exceptional — the prawn balchão is a must. Room service was prompt and the room itself immaculate.' },
  { name: 'Ravi Shankar', rating: 4, date: 'August 2025', comment: 'Great property overall. The beach is private and pristine. Slightly overpriced for what you get compared to competitors, but the service quality is unmatched.' },
]

export default function HotelDetail({ navigate }: Props) {
  const [activeImg, setActiveImg] = useState(0)
  const [wishlisted, setWishlisted] = useState(false)
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar navigate={navigate} />

      {/* Gallery */}
      <div className="pt-16">
        <div className="relative h-[55vh] bg-slate-900 overflow-hidden">
          <img
            src={images[activeImg]}
            alt="Hotel"
            className="w-full h-full object-cover transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

          {/* Back */}
          <button onClick={() => navigate('hotels')} className="absolute top-6 left-6 flex items-center gap-2 text-white/90 hover:text-white text-sm font-medium bg-black/20 backdrop-blur-sm px-3 py-2 rounded-lg transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Hotels
          </button>

          {/* Thumbnails */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`w-16 h-10 rounded-lg overflow-hidden border-2 transition-all ${i === activeImg ? 'border-white scale-110' : 'border-white/40 hover:border-white/70'}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-sm text-slate-500 font-medium">5-Star Luxury Resort</span>
                  </div>
                  <h1 className="text-3xl font-bold text-slate-900" style={{ fontFamily: "'DM Serif Display', serif" }}>The Leela Goa</h1>
                  <p className="text-slate-500 mt-1 flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    Cavelossim Beach, South Goa, India 403731
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white bg-emerald-600 w-14 h-10 rounded-lg flex items-center justify-center">9.4</div>
                    <p className="text-xs text-slate-500 mt-1">Exceptional</p>
                  </div>
                  <button
                    onClick={() => setWishlisted(!wishlisted)}
                    className={`p-2.5 rounded-xl border-2 transition-all ${wishlisted ? 'border-red-400 bg-red-50 text-red-500' : 'border-slate-200 text-slate-400 hover:border-red-300 hover:text-red-400'}`}
                  >
                    <svg className="w-5 h-5" fill={wishlisted ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed mt-4 text-sm">
                Nestled on the pristine Cavelossim Beach in South Goa, The Leela Goa is a legendary luxury resort that has defined the gold standard of hospitality in India. Set amidst lush tropical gardens overlooking a tranquil lagoon and the Arabian Sea, the resort blends Portuguese colonial architecture with modern luxury across 206 elegantly appointed rooms, suites, and pool villas.
              </p>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h2 className="font-bold text-slate-900 text-lg mb-4">Amenities & Facilities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { icon: '🏊', label: 'Infinity Pool' },
                  { icon: '🧖', label: 'Jiva Spa' },
                  { icon: '🏖️', label: 'Private Beach' },
                  { icon: '🍽️', label: 'Fine Dining (3 restaurants)' },
                  { icon: '💪', label: 'Fitness Centre' },
                  { icon: '📶', label: 'Free High-speed WiFi' },
                  { icon: '🛎️', label: '24hr Room Service' },
                  { icon: '🚢', label: 'Water Sports Centre' },
                  { icon: '🏌️', label: 'Golf Course (nearby)' },
                  { icon: '👶', label: "Kids' Club" },
                  { icon: '🚗', label: 'Valet Parking' },
                  { icon: '✈️', label: 'Airport Transfer' },
                ].map(a => (
                  <div key={a.label} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50">
                    <span className="text-lg shrink-0">{a.icon}</span>
                    <span className="text-sm text-slate-700">{a.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Available Rooms */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h2 className="font-bold text-slate-900 text-lg mb-5">Available Rooms</h2>
              <div className="space-y-4">
                {rooms.map((room, i) => (
                  <div
                    key={room.name}
                    className={`border rounded-2xl p-4 cursor-pointer transition-all ${selectedRoom === i ? 'border-sky-400 bg-sky-50 ring-1 ring-sky-200' : 'border-slate-100 hover:border-sky-200 hover:bg-slate-50'}`}
                    onClick={() => setSelectedRoom(selectedRoom === i ? null : i)}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-slate-900">{room.name}</h3>
                        <p className="text-sm text-slate-500 mt-0.5">{room.size} · {room.beds} · Up to {room.maxGuests} guests</p>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {room.amenities.map(a => (
                            <span key={a} className="text-xs bg-white border border-slate-100 text-slate-600 px-2 py-0.5 rounded-full">{a}</span>
                          ))}
                        </div>
                      </div>
                      <div className="text-right shrink-0 ml-4">
                        <p className="text-xl font-bold text-sky-700">₹{room.price.toLocaleString()}</p>
                        <p className="text-xs text-slate-400">per night</p>
                        {selectedRoom === i && (
                          <button
                            onClick={e => { e.stopPropagation(); navigate('checkout') }}
                            className="mt-2 bg-orange-500 text-white text-xs font-semibold px-4 py-1.5 rounded-lg hover:bg-orange-600 transition-colors"
                          >
                            Reserve
                          </button>
                        )}
                      </div>
                    </div>
                    <p className="text-xs text-emerald-600 mt-2 font-medium">✓ Free cancellation until 48 hours before check-in</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-bold text-slate-900 text-lg">Guest Reviews</h2>
                <div className="flex items-center gap-2">
                  <div className="bg-emerald-600 text-white font-bold text-lg w-12 h-10 rounded-xl flex items-center justify-center">9.4</div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Exceptional</p>
                    <p className="text-xs text-slate-500">847 reviews</p>
                  </div>
                </div>
              </div>
              <div className="space-y-5">
                {reviews.map(rev => (
                  <div key={rev.name} className="border-b border-slate-50 pb-5 last:border-0 last:pb-0">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 font-bold text-sm shrink-0">
                        {rev.name[0]}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-semibold text-slate-900">{rev.name}</p>
                          <span className="text-xs text-slate-400">{rev.date}</span>
                        </div>
                        <div className="flex gap-0.5 mt-0.5">
                          {[1,2,3,4,5].map(i => (
                            <svg key={i} className={`w-3.5 h-3.5 ${i <= rev.rating ? 'text-amber-400' : 'text-slate-200'}`} fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">{rev.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 sticky top-24">
              <div className="text-center mb-4">
                <p className="text-xs text-slate-400">Starting from</p>
                <p className="text-3xl font-bold text-sky-700">₹9,800</p>
                <p className="text-sm text-slate-500">per night · incl. taxes</p>
              </div>
              <div className="space-y-3 mb-4">
                <div>
                  <label className="text-xs font-semibold text-slate-500 block mb-1">Check-in</label>
                  <input type="date" defaultValue="2025-11-20" className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-500 block mb-1">Check-out</label>
                  <input type="date" defaultValue="2025-11-25" className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-500 block mb-1">Guests</label>
                  <select className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-sky-400">
                    <option>2 Adults</option>
                    <option>2 Adults, 1 Child</option>
                    <option>4 Adults</option>
                  </select>
                </div>
              </div>
              <div className="border-t border-slate-100 pt-4 mb-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">₹9,800 × 5 nights</span>
                  <span className="font-medium">₹49,000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Service fee</span>
                  <span className="font-medium">₹2,450</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Taxes (18% GST)</span>
                  <span className="font-medium">₹9,261</span>
                </div>
                <div className="flex justify-between font-bold text-slate-900 border-t border-slate-100 pt-2 mt-2">
                  <span>Total</span>
                  <span className="text-sky-700">₹60,711</span>
                </div>
              </div>
              <button onClick={() => navigate('checkout')} className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition-colors text-sm">
                Reserve Room
              </button>
              <p className="text-xs text-center text-slate-400 mt-3">Free cancellation · No prepayment needed</p>
            </div>

            <div className="bg-sky-50 rounded-2xl p-4 border border-sky-100">
              <p className="text-sm font-semibold text-sky-800 mb-1">🏆 Best Price Guarantee</p>
              <p className="text-xs text-sky-700">Found a lower price? We'll match it and give you an additional 5% off.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
