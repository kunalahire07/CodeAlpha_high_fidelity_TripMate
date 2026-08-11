export type Page =
  | 'home'
  | 'explore'
  | 'destination'
  | 'flights'
  | 'hotels'
  | 'hotel-detail'
  | 'trip-planner'
  | 'checkout'
  | 'confirmation'
  | 'my-trips'
  | 'wishlist'
  | 'profile'
  | 'trip-summary'

export type NavFn = (page: Page) => void
