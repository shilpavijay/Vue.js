<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>Name: {{ revName() }}</p>
        <button @click="resetName">Reset Name</button>
    </div>
</template>

<script>
	export default {
		props: {
			name: {
				type: String,
			 default: 'I am Default'
			}
		},
		methods: {
			revName() {
				return this.name.split("").reverse("").join("");
			},
			resetName() {
				this.name = "Shilpa",
				this.$emit('nameReset',this.name)
			}
		}
	}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
