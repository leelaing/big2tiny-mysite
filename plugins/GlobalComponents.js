import Vue from 'vue'

// Import to be used Global Components
import fontAwesome from '@nuxtjs/font-awesome'
import Navbar from '~/components/Navbar'
import TitleBanner from '~/components/TitleBanner'
import Footer from '~/components/Footer'
import Clock from '~/components/Clock'
import LogoutButton from '~/components/LogoutButton'
import LoginComponent from '~/components/LoginComponent'
import SocialMediaLinks from '~/components/SocialMediaLinks'
import ImageButton from '~/components/ImageButton'

// Vue.use Definition
Vue.use('fontAwesome', fontAwesome.js)
Vue.use('Navbar', Navbar)
Vue.use('TitleBanner', TitleBanner)
Vue.use('Footer', Footer)
Vue.use('Clock', Clock)
Vue.use('LogoutButton', LogoutButton)
Vue.use('LoginComponent', LoginComponent)
Vue.use('SocialMediaLinks', SocialMediaLinks)
Vue.use('ImageButton', ImageButton)

// Export Components
const components = {
  fontAwesome,
  Navbar,
  TitleBanner,
  Footer,
  Clock,
  LogoutButton,
  LoginComponent,
  SocialMediaLinks,
  ImageButton
}

// Register Components
Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
