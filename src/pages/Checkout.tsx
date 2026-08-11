import { useState } from 'react'
import Navbar from '../components/Navbar'
import type { NavFn } from '../types'

interface Props { navigate: NavFn }

export default function Checkout({ navigate }: Props) {
  const [payMethod, setPayMethod] = useState<'card' | 'upi' | 'emi'>('card')
  const [agreed, setAgreed] = useState(false)
  const [form, setForm] = useState({ name: 'Priya Sharma', email: 'priya@example.com', phone: '+91 98765 43210', cardNumber: '', expiry: '', cvv: '', upiId: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!agreed) return
    navigate('confirmation')
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar navigate={navigate} />

      <div className="pt-16">
        <div className="bg-sky-950 py-10">
          <div className="max-w-7xl mx-auto px-6">
            <button onClick={() => navigate('hotel-detail')} className="text-sky-300 hover:text-white text-sm flex items-center gap-1.5 mb-3 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
            <h1 className="text-3xl font-bold text-white" style={{ fontFamily: "'DM Serif Display', serif" }}>Complete Your Booking</h1>
            <p className="text-sky-300 mt-1 text-sm">You're just a few steps away from your dream trip</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-10">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left: Form */}
              <div className="lg:col-span-2 space-y-6">
                {/* Traveler Info */}
                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                  <h2 className="font-bold text-slate-900 text-lg mb-5 flex items-center gap-2">
                    <span className="w-7 h-7 bg-sky-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    Traveler Information
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                      <label className="text-xs font-semibold text-slate-500 block mb-1.5">Full Name (as per passport)</label>
                      <input
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all"
                        value={form.name}
                        onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-500 block mb-1.5">Email Address</label>
                      <input
                        type="email"
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all"
                        value={form.email}
                        onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-500 block mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all"
                        value={form.phone}
                        onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-500 block mb-1.5">Date of Birth</label>
                      <input type="date" defaultValue="1995-04-15" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 bg-white" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-500 block mb-1.5">Nationality</label>
                      <select className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-sky-400 bg-white">
                        <option>Indian</option>
                        <option>American</option>
                        <option>British</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Payment */}
                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                  <h2 className="font-bold text-slate-900 text-lg mb-5 flex items-center gap-2">
                    <span className="w-7 h-7 bg-sky-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    Payment Method
                  </h2>

                  {/* Method Tabs */}
                  <div className="flex gap-3 mb-5">
                    {[
                      { id: 'card', label: '💳 Credit / Debit Card' },
                      { id: 'upi', label: '📱 UPI' },
                      { id: 'emi', label: '📊 EMI' },
                    ].map(m => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setPayMethod(m.id as typeof payMethod)}
                        className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold border-2 transition-all ${payMethod === m.id ? 'border-sky-500 bg-sky-50 text-sky-700' : 'border-slate-100 text-slate-500 hover:border-slate-200'}`}
                      >
                        {m.label}
                      </button>
                    ))}
                  </div>

                  {payMethod === 'card' && (
                    <div className="space-y-4">
                      <div>
                        <label className="text-xs font-semibold text-slate-500 block mb-1.5">Card Number</label>
                        <input
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 font-mono tracking-widest"
                          placeholder="1234  5678  9012  3456"
                          maxLength={19}
                          value={form.cardNumber}
                          onChange={e => setForm(p => ({ ...p, cardNumber: e.target.value }))}
                        />
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-2">
                          <label className="text-xs font-semibold text-slate-500 block mb-1.5">Expiry Date</label>
                          <input
                            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 font-mono"
                            placeholder="MM / YY"
                            maxLength={5}
                            value={form.expiry}
                            onChange={e => setForm(p => ({ ...p, expiry: e.target.value }))}
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-slate-500 block mb-1.5">CVV</label>
                          <input
                            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 font-mono"
                            placeholder="•••"
                            maxLength={3}
                            type="password"
                            value={form.cvv}
                            onChange={e => setForm(p => ({ ...p, cvv: e.target.value }))}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-slate-500 block mb-1.5">Cardholder Name</label>
                        <input className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100" defaultValue="PRIYA SHARMA" />
                      </div>
                    </div>
                  )}

                  {payMethod === 'upi' && (
                    <div>
                      <label className="text-xs font-semibold text-slate-500 block mb-1.5">UPI ID</label>
                      <input
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                        placeholder="yourname@upi"
                        value={form.upiId}
                        onChange={e => setForm(p => ({ ...p, upiId: e.target.value }))}
                      />
                      <div className="flex gap-3 mt-4">
                        {['GPay', 'PhonePe', 'Paytm', 'BHIM'].map(app => (
                          <button key={app} type="button" className="flex-1 py-2.5 border border-slate-200 rounded-xl text-xs font-semibold text-slate-600 hover:border-sky-300 hover:bg-sky-50 transition-colors">
                            {app}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {payMethod === 'emi' && (
                    <div className="space-y-3">
                      <p className="text-sm text-slate-600">Choose your EMI tenure:</p>
                      {[
                        { months: 3, amount: '₹20,237/month', interest: '0% interest' },
                        { months: 6, amount: '₹10,118/month', interest: '0% interest' },
                        { months: 12, amount: '₹5,393/month', interest: '5.99% p.a.' },
                      ].map(plan => (
                        <label key={plan.months} className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-100 hover:border-sky-200 cursor-pointer">
                          <input type="radio" name="emi" className="accent-sky-600" />
                          <div>
                            <p className="text-sm font-semibold text-slate-900">{plan.months} months · {plan.amount}</p>
                            <p className="text-xs text-emerald-600">{plan.interest}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  )}

                  <div className="flex items-start gap-3 mt-5 p-3 bg-slate-50 rounded-xl">
                    <svg className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <p className="text-xs text-slate-600">Your payment is secured with 256-bit SSL encryption. We do not store your card details.</p>
                  </div>
                </div>

                {/* Terms */}
                <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="mt-0.5 w-4 h-4 accent-sky-600 rounded"
                      checked={agreed}
                      onChange={e => setAgreed(e.target.checked)}
                    />
                    <p className="text-sm text-slate-600 leading-relaxed">
                      I agree to TripMate's <button type="button" className="text-sky-600 underline">Terms & Conditions</button> and <button type="button" className="text-sky-600 underline">Cancellation Policy</button>. I confirm that all traveler details are accurate and I have read the hotel's cancellation terms.
                    </p>
                  </label>
                </div>
              </div>

              {/* Right: Summary */}
              <div>
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 sticky top-24">
                  <h3 className="font-bold text-slate-900 mb-4 text-base">Booking Summary</h3>

                  <div className="relative h-36 rounded-xl overflow-hidden bg-slate-200 mb-4">
                    <img src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=500&h=300&fit=crop&auto=format" alt="The Leela" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <p className="text-white font-bold text-sm">The Leela Goa</p>
                      <p className="text-white/70 text-xs">Cavelossim Beach, South Goa</p>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex justify-between text-slate-600">
                      <span>Check-in</span><span className="font-medium text-slate-900">Thu, 20 Nov 2025</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Check-out</span><span className="font-medium text-slate-900">Tue, 25 Nov 2025</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Room</span><span className="font-medium text-slate-900">Deluxe Garden Room</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Guests</span><span className="font-medium text-slate-900">2 Adults</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Nights</span><span className="font-medium text-slate-900">5</span>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-4 space-y-2 text-sm">
                    <div className="flex justify-between text-slate-600">
                      <span>₹9,800 × 5 nights</span><span>₹49,000</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Service fee</span><span>₹2,450</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Taxes (18% GST)</span><span>₹9,261</span>
                    </div>
                    <div className="flex justify-between font-bold text-slate-900 text-base border-t border-slate-100 pt-3 mt-1">
                      <span>Total Amount</span>
                      <span className="text-sky-700">₹60,711</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={!agreed}
                    className={`w-full mt-5 py-3.5 rounded-xl font-bold text-sm transition-all ${agreed ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-sm' : 'bg-slate-100 text-slate-400 cursor-not-allowed'}`}
                  >
                    Confirm Booking · ₹60,711
                  </button>

                  <div className="flex items-center justify-center gap-4 mt-4">
                    {['🔒 Secure', '✓ Instant Confirm', '↩ Free Cancel'].map(t => (
                      <span key={t} className="text-xs text-slate-400">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
