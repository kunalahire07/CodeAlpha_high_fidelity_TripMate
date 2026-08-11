import { useState } from 'react'
import type { Page } from './types'
import Home from './pages/Home'
import Explore from './pages/Explore'
import DestinationDetail from './pages/DestinationDetail'
import FlightSearch from './pages/FlightSearch'
import HotelSearch from './pages/HotelSearch'
import HotelDetail from './pages/HotelDetail'
import TripPlanner from './pages/TripPlanner'
import Checkout from './pages/Checkout'
import BookingConfirmation from './pages/BookingConfirmation'
import MyTrips from './pages/MyTrips'
import Wishlist from './pages/Wishlist'
import Profile from './pages/Profile'
import TripSummary from './pages/TripSummary'

export default function App() {
  const [page, setPage] = useState<Page>('home')
  const navigate = (p: Page) => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  switch (page) {
    case 'home':
      return <Home navigate={navigate} />
    case 'explore':
      return <Explore navigate={navigate} />
    case 'destination':
      return <DestinationDetail navigate={navigate} />
    case 'flights':
      return <FlightSearch navigate={navigate} />
    case 'hotels':
      return <HotelSearch navigate={navigate} />
    case 'hotel-detail':
      return <HotelDetail navigate={navigate} />
    case 'trip-planner':
      return <TripPlanner navigate={navigate} />
    case 'checkout':
      return <Checkout navigate={navigate} />
    case 'confirmation':
      return <BookingConfirmation navigate={navigate} />
    case 'my-trips':
      return <MyTrips navigate={navigate} />
    case 'wishlist':
      return <Wishlist navigate={navigate} />
    case 'profile':
      return <Profile navigate={navigate} />
    case 'trip-summary':
      return <TripSummary navigate={navigate} />
    default:
      return <Home navigate={navigate} />
  }
}
