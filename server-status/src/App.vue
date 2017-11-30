<template>
    <div class="container">
        <server-header></server-header>
        <hr>
        <div class="row">
	        <servers></servers>
	        <serverDetails></serverDetails>
	    </div>
        <hr>
        <server-footer></server-footer>
    </div>
</template>

<script>
    import Header from './components/shared/Header.vue'
    import Servers from './components/Servers.vue'
    import ServerDetails from './components/ServerDetails.vue'
    import Footer from './components/shared/Footer.vue'

    export default {
        components: {
            serverHeader: Header,
            Servers,
            serverDetails: ServerDetails,
            serverFooter: Footer
        }
    }
</script>

<style>

</style>
