<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>Name: {{ revName() }}</p>
        <p>Age: {{ age }}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="agefn()">Reset Age</button> 
    </div>
</template>

<script>
	import { eventBus } from '../main'

	export default {
		props: {
			name: {
				type: String,
			 default: 'I am Default'
			},
			age: {
				type: Number
			},
			agefn: Function    
			// this is: communicating with callback
		},
		methods: {
			revName() {
				return this.name.split("").reverse("").join("");
			},
			resetName() {
				this.name = "Shilpa"
				// this.$emit('nameReset',this.name)
				// this is: by custom event
			},
			created() {
				eventBus.$on('ageChanged', (data) => {
					this.age = data;
				})
			}
		}
	}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
