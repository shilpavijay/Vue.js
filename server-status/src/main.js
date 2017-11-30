import Vue from 'vue'
import App from './App.vue'
import Header from './components/shared/Header.vue'
import Servers from './components/Servers.vue'
import ServerDetails from './components/ServerDetails.vue'
import Footer from './components/shared/Footer.vue'

Vue.component('server-header', Header)
Vue.component('servers', Servers)
Vue.component('server-details', ServerDetails)
Vue.component('server-footer', Footer)

new Vue({
  el: '#app',
  render: h => h(App)
})
