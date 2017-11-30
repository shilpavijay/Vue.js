<template>
	<div>
		<p>Application status: {{ status }}</p>
		<br/>
		<button @click="changeStatus">Change</button>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				status: 'Critical'
			}
		},
		methods: {
			changeStatus() {
				this.status = 'Normal'
			}
		}
	}
</script>