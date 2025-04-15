export const API_URL = {
  root: '/',
  auth: {
    root: 'auth',
    login: 'login',
    forgotPassword: {
      root: 'forgot-password',
      init: 'init',
      finish: ':resetKey'
    }
  },
  dashboard: {
    root: 'dashboard'
  },
  users: {
    root: 'users',
    list: 'list'
  },
  profile: {
    root: 'profile'
  },
  error: {
    notFound: 'not-found'
  }
}