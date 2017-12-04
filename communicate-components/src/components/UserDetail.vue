<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>Name: {{ revName() }}</p>
    </div>
</template>

<script>
	export default {
		props: ['name'],
		methods: {
			revName() {
				return this.name.split("").reverse("").join("");
			}
		}
	}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
