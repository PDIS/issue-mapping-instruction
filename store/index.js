export const state = () => ({
  sidebar: false,
  locales: ['en', 'zh-TW'],
  locale: 'zh-TW'
})

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  },
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}