export const PAGES = {
  HOME: '/',
  EXPLORE: '/explore',
  PROFILE_FAKE: '/profile-fake',
  PROFILE: (username: string) => `/user/${username}`,
  SHOP: '/shop',
  SSG: '/shop/ssg',
  ISR: '/shop/isr',
  CSR: '/shop/csr'
}