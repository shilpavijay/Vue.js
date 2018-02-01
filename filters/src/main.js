import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-lowerCase', function(value) {
	return value.toLowerCase();
});

Vue.filter('countLen', function(value) {
	return value + ' (' + value.length + ')' ;
});

Vue.mixin({
	created() {
		console.log('Global Mixin - Created')
	}
});



new Vue({
  el: '#app',
  render: h => h(App)
})
