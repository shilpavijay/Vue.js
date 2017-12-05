<template>
	<div class="col-xs-12 col-sm-6">
		<button @click="clicked">Get Status</button>
		<br />
		<div v-if="stat">
	        <p>Click on a server to view details</p>
	        <p>ServerID: {{ id }}</p>
	        <p>Server Status: {{ status }}</p>
        </div>
    </div>
</template>

<script>
	import { eventBus } from '../main'

	export default {
		data: function() {
			return {
				id: '',
				status: '',
				stat: false
			}
		},
		methods: {
			clicked() {
				this.stat = true
				eventBus.$on('server', (data) => {
					this.id = data.id
					this.status = data.status
				})
			}
		}
	}
</script>
	
<style scoped>
	div {
		/*border: 1px solid;*/
	}
</style>