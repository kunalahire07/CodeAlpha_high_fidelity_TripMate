import { useState } from 'react'
import Navbar from '../components/Navbar'
import type { NavFn } from '../types'

interface Props { navigate: NavFn }

interface Activity {
  id: number
  time: string
  activity: string
  location: string
  cost: string
  duration: string
  icon: string
}

interface Day {
  day: number
  title: string
  activities: Activity[]
}

const initialItinerary: Day[] = [
  {
    day: 1,
    title: 'Arrival + Beach Evening',
    activities: [
      { id: 1, time: '14:00', activity: 'Arrive at Goa Airport (Dabolim)', location: 'Dabolim Airport', cost: '₹0', duration: '1 hour', icon: '✈️' },
      { id: 2, time: '15:30', activity: 'Hotel check-in at The Leela Goa', location: 'Cavelossim Beach', cost: '₹9,800', duration: '1 hour', icon: '🏨' },
      { id: 3, time: '17:00', activity: 'Evening walk on Cavelossim Beach', location: 'Cavelossim Beach', cost: '₹0', duration: '2 hours', icon: '🏖️' },
      { id: 4, time: '20:00', activity: 'Welcome dinner at Jamavar Restaurant', location: 'The Leela Goa', cost: '₹3,500', duration: '2 hours', icon: '🍽️' },
    ],
  },
  {
    day: 2,
    title: 'North Goa Sightseeing',
    activities: [
      { id: 5, time: '09:00', activity: 'Breakfast at hotel', location: 'The Leela Goa', cost: '₹800', duration: '1 hour', icon: '🥐' },
      { id: 6, time: '10:30', activity: 'Visit Basilica of Bom Jesus (UNESCO)', location: 'Old Goa', cost: '₹0', duration: '1.5 hours', icon: '⛪' },
      { id: 7, time: '12:30', activity: 'Lunch at Ritz Classic', location: 'Panjim', cost: '₹600', duration: '1 hour', icon: '🍛' },
      { id: 8, time: '14:00', activity: 'Explore Fontainhas Latin Quarter', location: 'Panjim', cost: '₹0', duration: '2 hours', icon: '🎨' },
      { id: 9, time: '17:00', activity: 'Calangute & Baga Beach visit', location: 'North Goa', cost: '₹0', duration: '2 hours', icon: '🌊' },
    ],
  },
  {
    day: 3,
    title: 'Adventure Activities',
    activities: [
      { id: 10, time: '08:00', activity: 'Scuba diving beginner session', location: 'Grande Island', cost: '₹4,000', duration: '3 hours', icon: '🤿' },
      { id: 11, time: '13:00', activity: 'Beach shack lunch (fish curry rice)', location: 'Anjuna Beach', cost: '₹450', duration: '1 hour', icon: '🐟' },
      { id: 12, time: '15:00', activity: 'Water sports package (jet ski, parasailing)', location: 'Calangute Beach', cost: '₹2,000', duration: '2 hours', icon: '🏄' },
      { id: 13, time: '19:00', activity: 'Sunset dinner cruise on the Mandovi', location: 'Panjim Jetty', cost: '₹3,500', duration: '2.5 hours', icon: '⛵' },
    ],
  },
  {
    day: 4,
    title: 'Local Exploration',
    activities: [
      { id: 14, time: '09:00', activity: 'Dudhsagar Waterfall day trip', location: 'Western Ghats', cost: '₹1,800', duration: '5 hours', icon: '💧' },
      { id: 15, time: '16:00', activity: 'Visit Spice Plantation (guided tour)', location: 'Ponda', cost: '₹1,200', duration: '2 hours', icon: '🌿' },
      { id: 16, time: '20:00', activity: 'Dinner at Thalassa Greek Restaurant', location: 'Vagator', cost: '₹2,200', duration: '2 hours', icon: '🥗' },
    ],
  },
  {
    day: 5,
    title: 'Shopping + Departure',
    activities: [
      { id: 17, time: '09:00', activity: 'Mapusa Friday Market (handicrafts, spices)', location: 'Mapusa', cost: '₹1,500', duration: '2 hours', icon: '🛍️' },
      { id: 18, time: '12:00', activity: 'Final beach lunch & relaxation', location: 'Morjim Beach', cost: '₹600', duration: '2 hours', icon: '🌅' },
      { id: 19, time: '15:00', activity: 'Hotel check-out & transfer to airport', location: 'The Leela Goa', cost: '₹800', duration: '1 hour', icon: '🚕' },
      { id: 20, time: '18:30', activity: 'Departure flight GOI → BOM', location: 'Dabolim Airport', cost: '₹4,250', duration: '1h 15m', icon: '✈️' },
    ],
  },
]

export default function TripPlanner({ navigate }: Props) {
  const [itinerary, setItinerary] = useState<Day[]>(initialItinerary)
  const [activeDay, setActiveDay] = useState(1)
  const [editing, setEditing] = useState<number | null>(null)
  const [showAddModal, setShowAddModal] = useState(false)
  const [newActivity, setNewActivity] = useState({ time: '', activity: '', location: '', cost: '', duration: '', icon: '📍' })

  const currentDay = itinerary.find(d => d.day === activeDay)!

  const deleteActivity = (dayNum: number, id: number) => {
    setItinerary(prev => prev.map(d => d.day === dayNum ? { ...d, activities: d.activities.filter(a => a.id !== id) } : d))
  }

  const addActivity = () => {
    const maxId = Math.max(...itinerary.flatMap(d => d.activities.map(a => a.id)))
    setItinerary(prev => prev.map(d => d.day === activeDay ? { ...d, activities: [...d.activities, { ...newActivity, id: maxId + 1 }] } : d))
    setNewActivity({ time: '', activity: '', location: '', cost: '', duration: '', icon: '📍' })
    setShowAddModal(false)
  }

  const totalCost = itinerary.flatMap(d => d.activities).reduce((sum, a) => {
    const num = parseInt(a.cost.replace(/[^0-9]/g, '')) || 0
    return sum + num
  }, 0)

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar navigate={navigate} />

      <div className="pt-16 bg-gradient-to-br from-sky-900 to-sky-700">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sky-300 text-sm font-semibold uppercase tracking-widest mb-1">Trip Planner</p>
              <h1 className="text-4xl font-bold text-white" style={{ fontFamily: "'DM Serif Display', serif" }}>5 Days in Goa</h1>
              <div className="flex flex-wrap gap-5 mt-4 text-white/80 text-sm">
                <span>📅 20–25 November 2025</span>
                <span>👥 2 Travelers</span>
                <span>💰 Est. total: ₹{totalCost.toLocaleString()}</span>
              </div>
            </div>
            <div className="flex gap-3">
              <button onClick={() => navigate('trip-summary')} className="bg-white/15 backdrop-blur-sm border border-white/20 text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-white/25 transition-colors">
                View Summary
              </button>
              <button onClick={() => navigate('checkout')} className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors">
                Book This Trip
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Budget Overview */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Est. Cost', value: `₹${totalCost.toLocaleString()}`, sub: 'for 2 travelers', color: 'sky' },
            { label: 'Activities', value: '20', sub: 'planned activities', color: 'violet' },
            { label: 'Duration', value: '5 Days', sub: '4 nights', color: 'emerald' },
            { label: 'Per Person', value: `₹${(totalCost / 2).toLocaleString()}`, sub: 'estimated', color: 'amber' },
          ].map(stat => (
            <div key={stat.label} className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
              <p className="text-xs text-slate-400 font-medium">{stat.label}</p>
              <p className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</p>
              <p className="text-xs text-slate-400 mt-0.5">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Day Tabs */}
        <div className="flex gap-2 overflow-x-auto mb-6 pb-1">
          {itinerary.map(day => (
            <button
              key={day.day}
              onClick={() => setActiveDay(day.day)}
              className={`shrink-0 px-5 py-3 rounded-2xl text-sm font-semibold transition-all ${activeDay === day.day ? 'bg-sky-600 text-white shadow-sm' : 'bg-white text-slate-600 border border-slate-100 hover:border-sky-200 hover:text-sky-700'}`}
            >
              <span className="font-bold">Day {day.day}</span>
              <span className="hidden sm:inline ml-1 font-normal opacity-80">· {day.title}</span>
            </button>
          ))}
        </div>

        {/* Day Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 bg-sky-50 border-b border-sky-100">
                <div>
                  <h2 className="font-bold text-slate-900 text-lg">Day {activeDay}: {currentDay.title}</h2>
                  <p className="text-sm text-slate-500">{currentDay.activities.length} activities planned</p>
                </div>
                <button
                  onClick={() => setShowAddModal(true)}
                  className="flex items-center gap-2 text-sm font-semibold text-sky-700 bg-sky-100 hover:bg-sky-200 px-3 py-2 rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Add Activity
                </button>
              </div>

              <div className="divide-y divide-slate-50">
                {currentDay.activities.map((act, i) => (
                  <div key={act.id} className="group flex items-start gap-4 p-4 hover:bg-slate-50 transition-colors">
                    <div className="flex flex-col items-center gap-1 shrink-0 w-16 text-center">
                      <div className="w-10 h-10 rounded-2xl bg-sky-50 flex items-center justify-center text-xl">{act.icon}</div>
                      <span className="text-xs text-slate-400 font-medium">{act.time}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      {editing === act.id ? (
                        <div className="space-y-2">
                          <input
                            className="w-full border border-sky-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-sky-500"
                            defaultValue={act.activity}
                          />
                          <div className="flex gap-2">
                            <button onClick={() => setEditing(null)} className="text-xs bg-sky-600 text-white px-3 py-1 rounded-lg">Save</button>
                            <button onClick={() => setEditing(null)} className="text-xs border border-slate-200 text-slate-500 px-3 py-1 rounded-lg">Cancel</button>
                          </div>
                        </div>
                      ) : (
                        <>
                          <h3 className="font-semibold text-slate-900 text-sm">{act.activity}</h3>
                          <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-1">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            </svg>
                            {act.location}
                          </p>
                          <div className="flex items-center gap-3 mt-1 text-xs text-slate-400">
                            <span>⏱ {act.duration}</span>
                            <span className="font-semibold text-sky-700">{act.cost}</span>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                      <button onClick={() => setEditing(act.id)} className="p-1.5 text-slate-400 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button onClick={() => deleteActivity(activeDay, act.id)} className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
              <h3 className="font-bold text-slate-900 mb-3">Day {activeDay} Cost Breakdown</h3>
              {currentDay.activities.filter(a => a.cost !== '₹0').map(act => (
                <div key={act.id} className="flex justify-between text-sm py-2 border-b border-slate-50 last:border-0">
                  <span className="text-slate-600 truncate mr-2">{act.activity}</span>
                  <span className="font-semibold text-slate-900 shrink-0">{act.cost}</span>
                </div>
              ))}
              <div className="flex justify-between text-sm font-bold border-t border-slate-200 pt-2 mt-1">
                <span>Day {activeDay} Total</span>
                <span className="text-sky-700">
                  ₹{currentDay.activities.reduce((sum, a) => sum + (parseInt(a.cost.replace(/[^0-9]/g, '')) || 0), 0).toLocaleString()}
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
              <h3 className="font-bold text-slate-900 mb-3">Trip Overview</h3>
              {itinerary.map(day => (
                <button
                  key={day.day}
                  onClick={() => setActiveDay(day.day)}
                  className={`w-full flex items-center justify-between p-2.5 rounded-xl text-sm mb-1 transition-colors ${activeDay === day.day ? 'bg-sky-50 text-sky-700' : 'hover:bg-slate-50 text-slate-700'}`}
                >
                  <span className="font-medium">Day {day.day}</span>
                  <span className="text-xs text-slate-400">{day.title}</span>
                </button>
              ))}
              <button onClick={() => navigate('checkout')} className="w-full mt-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors">
                Book This Trip →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add Activity Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowAddModal(false)}>
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl" onClick={e => e.stopPropagation()}>
            <h3 className="font-bold text-slate-900 text-lg mb-4">Add Activity</h3>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-500 block mb-1">Time</label>
                  <input type="time" className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-sky-400" value={newActivity.time} onChange={e => setNewActivity(p => ({ ...p, time: e.target.value }))} />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-500 block mb-1">Icon</label>
                  <select className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm bg-white focus:outline-none focus:border-sky-400" value={newActivity.icon} onChange={e => setNewActivity(p => ({ ...p, icon: e.target.value }))}>
                    {['📍', '🏖️', '🍽️', '🏨', '✈️', '🚗', '🎭', '🛍️', '🤿', '⛵', '🌿', '⛪'].map(i => (
                      <option key={i} value={i}>{i}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-500 block mb-1">Activity</label>
                <input className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100" placeholder="What will you do?" value={newActivity.activity} onChange={e => setNewActivity(p => ({ ...p, activity: e.target.value }))} />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-500 block mb-1">Location</label>
                <input className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100" placeholder="Where?" value={newActivity.location} onChange={e => setNewActivity(p => ({ ...p, location: e.target.value }))} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-500 block mb-1">Est. Cost</label>
                  <input className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-sky-400" placeholder="₹0" value={newActivity.cost} onChange={e => setNewActivity(p => ({ ...p, cost: e.target.value }))} />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-500 block mb-1">Duration</label>
                  <input className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-sky-400" placeholder="2 hours" value={newActivity.duration} onChange={e => setNewActivity(p => ({ ...p, duration: e.target.value }))} />
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              <button onClick={() => setShowAddModal(false)} className="flex-1 border border-slate-200 text-slate-600 py-2.5 rounded-xl text-sm font-medium hover:bg-slate-50 transition-colors">Cancel</button>
              <button onClick={addActivity} className="flex-1 bg-sky-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-sky-700 transition-colors">Add Activity</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
