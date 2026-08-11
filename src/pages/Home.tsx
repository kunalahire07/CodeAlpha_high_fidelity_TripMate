import { useState } from 'react'
import Navbar from '../components/Navbar'
import type { NavFn } from '../types'

interface Props { navigate: NavFn }

function Stars({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'md' }) {
  const s = size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <svg key={i} className={`${s} ${i <= rating ? 'text-amber-400' : 'text-slate-200'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

const destinations = [
  { name: 'Santorini', country: 'Greece', img: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&h=400&fit=crop&auto=format', price: '₹85,000', rating: 4.9, tag: 'Trending' },
  { name: 'Bali', country: 'Indonesia', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=400&fit=crop&auto=format', price: '₹42,000', rating: 4.8, tag: 'Popular' },
  { name: 'Tokyo', country: 'Japan', img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop&auto=format', price: '₹95,000', rating: 4.7, tag: 'Favourite' },
  { name: 'Maldives', country: 'Maldives', img: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&h=400&fit=crop&auto=format', price: '₹1,10,000', rating: 4.9, tag: 'Luxury' },
  { name: 'Paris', country: 'France', img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop&auto=format', price: '₹75,000', rating: 4.6, tag: 'Romantic' },
  { name: 'Goa', country: 'India', img: 'https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?w=600&h=400&fit=crop&auto=format', price: '₹18,000', rating: 4.5, tag: 'Beaches' },
]

const trips = [
  {
    title: 'Goa Beach Escape',
    duration: '5 Days / 4 Nights',
    price: '₹24,999',
    img: 'https://images.unsplash.com/photo-1533358122925-6eb2658855bb?w=600&h=400&fit=crop&auto=format',
    includes: ['Hotel', 'Flights', 'Transfers'],
    rating: 4.7,
  },
  {
    title: 'Swiss Alps Adventure',
    duration: '7 Days / 6 Nights',
    price: '₹1,29,999',
    img: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=400&fit=crop&auto=format',
    includes: ['Hotel', 'Flights', 'Tours'],
    rating: 4.9,
  },
  {
    title: 'Bangkok City Explorer',
    duration: '4 Days / 3 Nights',
    price: '₹35,999',
    img: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop&auto=format',
    includes: ['Hotel', 'Sightseeing'],
    rating: 4.5,
  },
]

const reviews = [
  { name: 'Rahul Mehta', location: 'Mumbai', text: 'TripMate made our Bali honeymoon absolutely seamless. Every detail was perfect — from the hotel recommendations to the local tour bookings.', rating: 5, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format' },
  { name: 'Ananya Singh', location: 'Delhi', text: "Booked my first solo trip to Santorini through TripMate. The itinerary planner is brilliant — I'd never have discovered half those spots on my own.", rating: 5, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&auto=format' },
  { name: 'Vikram Nair', location: 'Bangalore', text: 'The flight and hotel comparison saved us almost ₹12,000 on our family trip to Thailand. Will use TripMate for every trip from now on.', rating: 5, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&auto=format' },
]

export default function Home({ navigate }: Props) {
  const [searchTab, setSearchTab] = useState<'flights' | 'hotels'>('flights')
  const [destination, setDestination] = useState('')
  const [from, setFrom] = useState('Mumbai (BOM)')
  const [to, setTo] = useState('')
  const [checkin, setCheckin] = useState('')
  const [checkout, setCheckout] = useState('')
  const [travelers, setTravelers] = useState('2 Adults')

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar navigate={navigate} activePage="home" />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0 bg-slate-900">
          <img
            src="https://images.unsplash.com/photo-1618064541372-289bdb6f5b7b?w=1600&h=900&fit=crop&auto=format"
            alt="Aerial beach view"
            className="w-full h-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/20 to-slate-900/60" />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white text-sm font-medium">500+ Destinations • Best Price Guarantee</span>
            </div>
            <h1 className="text-6xl font-bold text-white leading-tight mb-5" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Your Journey<br />Starts Here
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Discover breathtaking destinations, compare flights and hotels, and plan your dream trip — all from one beautiful platform.
            </p>
          </div>

          {/* Search Widget */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl">
            {/* Tabs */}
            <div className="flex border-b border-slate-100">
              <button
                onClick={() => setSearchTab('flights')}
                className={`flex items-center gap-2 px-6 py-4 text-sm font-semibold transition-colors ${searchTab === 'flights' ? 'text-sky-700 border-b-2 border-sky-600' : 'text-slate-500 hover:text-slate-700'}`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Flights
              </button>
              <button
                onClick={() => setSearchTab('hotels')}
                className={`flex items-center gap-2 px-6 py-4 text-sm font-semibold transition-colors ${searchTab === 'hotels' ? 'text-sky-700 border-b-2 border-sky-600' : 'text-slate-500 hover:text-slate-700'}`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Hotels
              </button>
            </div>

            {/* Fields */}
            <div className="p-5">
              {searchTab === 'flights' ? (
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">From</label>
                    <input
                      className="border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                      value={from}
                      onChange={e => setFrom(e.target.value)}
                      placeholder="Departure city"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">To</label>
                    <input
                      className="border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                      value={to}
                      onChange={e => setTo(e.target.value)}
                      placeholder="Destination"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Departure</label>
                    <input
                      type="date"
                      className="border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                      value={checkin}
                      onChange={e => setCheckin(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Travelers</label>
                    <select
                      className="border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 bg-white"
                      value={travelers}
                      onChange={e => setTravelers(e.target.value)}
                    >
                      <option>1 Adult</option>
                      <option>2 Adults</option>
                      <option>2 Adults, 1 Child</option>
                      <option>2 Adults, 2 Children</option>
                    </select>
                  </div>
                  <button
                    onClick={() => navigate('flights')}
                    className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors shadow-sm flex items-center justify-center gap-2 mt-auto"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Search
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
                  <div className="col-span-2 lg:col-span-1 flex flex-col gap-1">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Destination</label>
                    <input
                      className="border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                      value={destination}
                      onChange={e => setDestination(e.target.value)}
                      placeholder="City or hotel name"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Check-in</label>
                    <input
                      type="date"
                      className="border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                      value={checkin}
                      onChange={e => setCheckin(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Check-out</label>
                    <input
                      type="date"
                      className="border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                      value={checkout}
                      onChange={e => setCheckout(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Guests</label>
                    <select
                      className="border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 bg-white"
                      value={travelers}
                      onChange={e => setTravelers(e.target.value)}
                    >
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4 Guests</option>
                    </select>
                  </div>
                  <button
                    onClick={() => navigate('hotels')}
                    className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors shadow-sm flex items-center justify-center gap-2 mt-auto"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Search
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 mt-8">
            {[['50K+', 'Happy Travelers'], ['500+', 'Destinations'], ['10K+', 'Hotels'], ['100+', 'Airlines']].map(([n, l]) => (
              <div key={l} className="text-center">
                <p className="text-2xl font-bold text-white">{n}</p>
                <p className="text-white/60 text-sm">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sky-600 text-sm font-semibold uppercase tracking-widest mb-2">Explore</p>
            <h2 className="text-4xl font-bold text-slate-900" style={{ fontFamily: "'DM Serif Display', serif" }}>Popular Destinations</h2>
          </div>
          <button onClick={() => navigate('explore')} className="text-sky-600 hover:text-sky-800 text-sm font-semibold flex items-center gap-1 transition-colors">
            View all
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map(dest => (
            <button
              key={dest.name}
              onClick={() => navigate('destination')}
              className="group text-left bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100"
            >
              <div className="relative h-52 bg-slate-200 overflow-hidden">
                <img
                  src={dest.img}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 backdrop-blur-sm text-sky-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                    {dest.tag}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between mb-1">
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg leading-tight">{dest.name}</h3>
                    <p className="text-slate-500 text-sm flex items-center gap-1 mt-0.5">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {dest.country}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-400 font-medium">from</p>
                    <p className="text-sky-700 font-bold text-base">{dest.price}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 mt-2">
                  <Stars rating={Math.floor(dest.rating)} />
                  <span className="text-xs text-slate-500 font-medium">{dest.rating}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Recommended Trips */}
      <section className="bg-sky-950 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-2">Curated for you</p>
            <h2 className="text-4xl font-bold text-white" style={{ fontFamily: "'DM Serif Display', serif" }}>Recommended Trips</h2>
            <p className="text-sky-200/70 mt-3 max-w-lg mx-auto">Hand-picked packages with flights, hotels, and experiences — ready to book.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trips.map(trip => (
              <button
                key={trip.title}
                onClick={() => navigate('trip-planner')}
                className="group text-left bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <div className="relative h-48 bg-slate-800 overflow-hidden">
                  <img src={trip.img} alt={trip.title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-orange-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">{trip.duration}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-white text-lg mb-1">{trip.title}</h3>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {trip.includes.map(inc => (
                      <span key={inc} className="text-xs bg-white/10 text-sky-300 px-2 py-0.5 rounded-full">{inc}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Stars rating={Math.floor(trip.rating)} />
                      <span className="text-xs text-sky-300">{trip.rating}</span>
                    </div>
                    <div>
                      <span className="text-xs text-sky-400">from </span>
                      <span className="text-white font-bold text-lg">{trip.price}</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Why TripMate */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-sky-600 text-sm font-semibold uppercase tracking-widest mb-2">Why Us</p>
          <h2 className="text-4xl font-bold text-slate-900" style={{ fontFamily: "'DM Serif Display', serif" }}>Why Choose TripMate?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: '🏷️', title: 'Best Price Guarantee', desc: 'We match any lower price you find within 24 hours of booking.' },
            { icon: '🗺️', title: 'AI Trip Planner', desc: 'Smart itinerary suggestions tailored to your travel style and budget.' },
            { icon: '🛡️', title: 'Secure Booking', desc: 'PCI-DSS compliant payments with instant confirmation every time.' },
            { icon: '📞', title: '24/7 Support', desc: 'Our travel experts are always available — call, chat, or email.' },
          ].map(f => (
            <div key={f.title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-4xl block mb-4">{f.icon}</span>
              <h3 className="font-bold text-slate-900 mb-2 text-lg">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sky-600 text-sm font-semibold uppercase tracking-widest mb-2">Testimonials</p>
            <h2 className="text-4xl font-bold text-slate-900" style={{ fontFamily: "'DM Serif Display', serif" }}>What Travelers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map(rev => (
              <div key={rev.name} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <Stars rating={rev.rating} size="md" />
                <p className="text-slate-700 text-sm leading-relaxed mt-4 mb-5 italic">"{rev.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden shrink-0">
                    <img src={rev.avatar} alt={rev.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{rev.name}</p>
                    <p className="text-xs text-slate-500">{rev.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="relative bg-gradient-to-r from-sky-600 to-sky-800 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1541417904950-b855846fe074?w=1200&h=400&fit=crop&auto=format" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 px-10 py-14">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'DM Serif Display', serif" }}>Ready to Start Your Adventure?</h2>
              <p className="text-sky-100">Join 50,000+ travelers who plan smarter with TripMate.</p>
            </div>
            <div className="flex gap-3 shrink-0">
              <button onClick={() => navigate('explore')} className="bg-white text-sky-700 font-semibold px-6 py-3 rounded-xl hover:bg-sky-50 transition-colors text-sm">
                Explore Destinations
              </button>
              <button onClick={() => navigate('my-trips')} className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-xl hover:bg-orange-600 transition-colors text-sm">
                Plan Your Trip
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-sky-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-white" style={{ fontFamily: "'DM Serif Display', serif" }}>TripMate</span>
              </div>
              <p className="text-sm leading-relaxed max-w-xs">Your all-in-one travel companion for smarter trips, better bookings, and unforgettable experiences.</p>
            </div>
            {[
              { title: 'Company', links: ['About Us', 'Careers', 'Press', 'Blog'] },
              { title: 'Support', links: ['Help Centre', 'Contact Us', 'Privacy Policy', 'Terms of Service'] },
              { title: 'Explore', links: ['Destinations', 'Flights', 'Hotels', 'Trip Planner'] },
            ].map(col => (
              <div key={col.title}>
                <h4 className="text-white font-semibold text-sm mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map(l => (
                    <li key={l}><button className="text-sm hover:text-white transition-colors">{l}</button></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs">© 2025 TripMate Technologies Pvt. Ltd. All rights reserved.</p>
            <p className="text-xs">Made with ❤️ for travelers everywhere</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
