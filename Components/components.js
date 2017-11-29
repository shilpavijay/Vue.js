Vue.component('my-comp',{
	data: function() {
		return {
		status: 'Critical'
		}
	},
	template: '<p>Application status: {{ status }}</p>'
});

new Vue({
	el: '#app'
})