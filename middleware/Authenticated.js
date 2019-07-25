export default function({ store, route, redirect }) {
  const user = store.state.users.user

  const blockedRoute = /\admin\/*/g

  // No access to Admin and Profile Pages
  if (!user && route.path.match(blockedRoute)) {
    redirect('/login')
  }

  // No access to Home page
  if (!user && route.path === '/') {
    redirect('/login')
  }
}
