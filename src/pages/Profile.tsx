import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import type { NavFn } from '../types'

interface Props { navigate: NavFn }

export default function Profile({ navigate }: Props) {
  const [activeTab, setActiveTab] = useState<'profile' | 'payment' | 'notifications' | 'privacy'>('profile')
  const [emailNotifs, setEmailNotifs] = useState(true)
  const [pushNotifs, setPushNotifs] = useState(true)
  const [smsNotifs, setSmsNotifs] = useState(false)
  const [priceAlerts, setPriceAlerts] = useState(true)
  const [currency, setCurrency] = useState('INR (₹)')
  const [language, setLanguage] = useState('English')
  const [travelStyle, setTravelStyle] = useState<string[]>(['Beach', 'Adventure'])

  const toggleStyle = (s: string) => {
    setTravelStyle(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s])
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar navigate={navigate} activePage="profile" />

      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-6" style={{ fontFamily: "'DM Serif Display', serif" }}>Profile & Settings</h1>

        <div className="flex gap-6">
          {/* Left: Profile card + tabs */}
          <div className="w-64 shrink-0 space-y-4">
            {/* Avatar card */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 text-center">
              <div className="relative inline-block mb-3">
                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto border-4 border-sky-100">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop&auto=format" alt="Priya" className="w-full h-full object-cover" />
                </div>
                <button className="absolute bottom-0 right-0 w-7 h-7 bg-sky-600 rounded-full flex items-center justify-center text-white hover:bg-sky-700 transition-colors">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
              </div>
              <p className="font-bold text-slate-900">Priya Sharma</p>
              <p className="text-xs text-slate-500 mt-0.5">priya@example.com</p>
              <div className="flex justify-center gap-4 mt-3 text-center">
                <div>
                  <p className="text-lg font-bold text-slate-900">5</p>
                  <p className="text-xs text-slate-400">Trips</p>
                </div>
                <div className="border-x border-slate-100 px-4">
                  <p className="text-lg font-bold text-slate-900">7</p>
                  <p className="text-xs text-slate-400">Countries</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-slate-900">12</p>
                  <p className="text-xs text-slate-400">Saved</p>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              {[
                { id: 'profile', label: 'Personal Info', icon: '👤' },
                { id: 'payment', label: 'Payment Methods', icon: '💳' },
                { id: 'notifications', label: 'Notifications', icon: '🔔' },
                { id: 'privacy', label: 'Privacy & Security', icon: '🔒' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`w-full flex items-center gap-2.5 px-4 py-3 text-sm font-medium text-left border-b border-slate-50 last:border-0 transition-colors ${activeTab === tab.id ? 'bg-sky-50 text-sky-700' : 'text-slate-600 hover:bg-slate-50'}`}
                >
                  <span>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            <button onClick={() => navigate('home')} className="w-full flex items-center justify-center gap-2 border border-red-100 text-red-500 hover:bg-red-50 py-2.5 rounded-xl text-sm font-medium transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Log Out
            </button>
          </div>

          {/* Right: Content */}
          <div className="flex-1 space-y-5">
            {activeTab === 'profile' && (
              <>
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                  <h2 className="font-bold text-slate-900 mb-5">Personal Information</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-500 block mb-1.5">First Name</label>
                      <input defaultValue="Priya" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-500 block mb-1.5">Last Name</label>
                      <input defaultValue="Sharma" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-500 block mb-1.5">Email Address</label>
                      <input type="email" defaultValue="priya@example.com" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-500 block mb-1.5">Phone Number</label>
                      <input defaultValue="+91 98765 43210" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-500 block mb-1.5">Date of Birth</label>
                      <input type="date" defaultValue="1995-04-15" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-sky-400 bg-white" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-500 block mb-1.5">Nationality</label>
                      <select defaultValue="Indian" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-sky-400 bg-white">
                        <option>Indian</option>
                        <option>American</option>
                        <option>British</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-500 block mb-1.5">Language</label>
                      <select className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-sky-400 bg-white" value={language} onChange={e => setLanguage(e.target.value)}>
                        <option>English</option>
                        <option>Hindi</option>
                        <option>Spanish</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-500 block mb-1.5">Currency</label>
                      <select className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-sky-400 bg-white" value={currency} onChange={e => setCurrency(e.target.value)}>
                        <option>INR (₹)</option>
                        <option>USD ($)</option>
                        <option>EUR (€)</option>
                        <option>GBP (£)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                  <h2 className="font-bold text-slate-900 mb-4">Preferred Travel Style</h2>
                  <div className="flex flex-wrap gap-2">
                    {['Beach', 'Mountains', 'Adventure', 'Cultural', 'Luxury', 'Budget', 'Solo', 'Family', 'Food & Drink', 'Wildlife'].map(style => (
                      <button
                        key={style}
                        onClick={() => toggleStyle(style)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${travelStyle.includes(style) ? 'bg-sky-600 text-white border-sky-600' : 'bg-white text-slate-600 border-slate-200 hover:border-sky-300'}`}
                      >
                        {style}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end">
                  <button className="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition-colors">
                    Save Changes
                  </button>
                </div>
              </>
            )}

            {activeTab === 'payment' && (
              <div className="space-y-4">
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                  <h2 className="font-bold text-slate-900 mb-5">Saved Payment Methods</h2>
                  <div className="space-y-3">
                    {[
                      { type: 'Visa', last4: '4242', expires: '08/27', icon: '💳', primary: true },
                      { type: 'Mastercard', last4: '5555', expires: '03/26', icon: '💳', primary: false },
                      { type: 'UPI', last4: 'priya@upi', expires: '', icon: '📱', primary: false },
                    ].map(card => (
                      <div key={card.last4} className="flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{card.icon}</span>
                          <div>
                            <p className="text-sm font-semibold text-slate-900">
                              {card.type} {card.last4.length === 4 ? `•••• ${card.last4}` : card.last4}
                              {card.primary && <span className="ml-2 text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-medium">Primary</span>}
                            </p>
                            {card.expires && <p className="text-xs text-slate-400">Expires {card.expires}</p>}
                          </div>
                        </div>
                        <button className="text-xs text-red-400 hover:text-red-600 transition-colors">Remove</button>
                      </div>
                    ))}
                  </div>
                  <button className="mt-4 flex items-center gap-2 text-sky-600 hover:text-sky-800 text-sm font-semibold transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Add New Payment Method
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                <h2 className="font-bold text-slate-900 mb-5">Notification Preferences</h2>
                <div className="space-y-5">
                  {[
                    { label: 'Email Notifications', desc: 'Booking confirmations, trip reminders, and updates', value: emailNotifs, setter: setEmailNotifs },
                    { label: 'Push Notifications', desc: 'Real-time alerts for deals and booking changes', value: pushNotifs, setter: setPushNotifs },
                    { label: 'SMS Notifications', desc: 'Text messages for urgent booking updates', value: smsNotifs, setter: setSmsNotifs },
                    { label: 'Price Drop Alerts', desc: 'Get notified when prices drop for wishlisted items', value: priceAlerts, setter: setPriceAlerts },
                  ].map(n => (
                    <div key={n.label} className="flex items-start justify-between py-4 border-b border-slate-50 last:border-0">
                      <div>
                        <p className="font-medium text-slate-900 text-sm">{n.label}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{n.desc}</p>
                      </div>
                      <button
                        onClick={() => n.setter(!n.value)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors shrink-0 ml-4 ${n.value ? 'bg-sky-600' : 'bg-slate-200'}`}
                      >
                        <span className={`inline-block h-4 w-4 rounded-full bg-white shadow transition-transform ${n.value ? 'translate-x-6' : 'translate-x-1'}`} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'privacy' && (
              <div className="space-y-4">
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                  <h2 className="font-bold text-slate-900 mb-5">Password & Security</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-500 block mb-1.5">Current Password</label>
                      <input type="password" placeholder="••••••••" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-500 block mb-1.5">New Password</label>
                      <input type="password" placeholder="••••••••" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-500 block mb-1.5">Confirm New Password</label>
                      <input type="password" placeholder="••••••••" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100" />
                    </div>
                    <button className="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors">
                      Update Password
                    </button>
                  </div>
                </div>
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                  <h2 className="font-bold text-slate-900 mb-4">Privacy Settings</h2>
                  <div className="space-y-3">
                    {[
                      'Share my travel reviews publicly',
                      'Allow TripMate to personalise recommendations',
                      'Enable location-based suggestions',
                    ].map(opt => (
                      <label key={opt} className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" defaultChecked className="w-4 h-4 accent-sky-600 rounded" />
                        <span className="text-sm text-slate-700">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="bg-red-50 rounded-2xl border border-red-100 p-5">
                  <h3 className="font-bold text-red-700 mb-1 text-sm">Danger Zone</h3>
                  <p className="text-xs text-red-600 mb-3">This will permanently delete your account and all associated data.</p>
                  <button className="text-xs font-semibold text-red-600 border border-red-200 px-4 py-2 rounded-lg hover:bg-red-100 transition-colors">
                    Delete Account
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
