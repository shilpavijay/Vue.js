<template>
    <div class="container">
     {{ quotes }}
    </div>
</template>

<script>
    export default {
        data: function() {
        	return {
        		quotes: [
        			'First Quote'
        		],
        		maxQuotes: 10
        	}
        }
    }
</script>

<style>
</style>
