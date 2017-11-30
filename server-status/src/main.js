import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue'
import Servers from './Servers.vue'
import ServerDetails from './ServerDetails.vue'
import Footer from './Footer.vue'

Vue.component('server-header', Header)
Vue.component('servers', Servers)
Vue.component('server-details', ServerDetails)
Vue.component('server-footer', Footer)

new Vue({
  el: '#app',
  render: h => h(App)
})
