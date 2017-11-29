var comp = {
	data: function() {
		return {
		status: 'Critical'
		}
	},
	template: '<p>Application status: {{ status }} <button @click="changeStatus">Modify</button></p>',
	methods: {
		changeStatus: function() {
		this.status = 'Normal';
		}
	}
};

new Vue({
	el: '#app',
	components: {
		'my-comp': comp
	}
})