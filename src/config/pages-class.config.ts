class PagesConfig {
  PROFILE(username: string) {
    return `/user/${username}`
  }
}

export const PAGES = new PagesConfig();