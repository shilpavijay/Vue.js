<template>
    <div class="container">
      <app-new-quote @quoteAdded='NewQuote'></app-new-quote>
      <app-quote-grid :quotes="quotes"></app-quote-grid>
      
    </div>
</template>

<script>

	import QuoteGrid from './components/QuoteGrid.vue'
	import NewQuote from './components/NewQuote.vue'

    export default {
        data: function() {
        	return {
        		quotes: [
        			'First Quote - as a sample'
        		],
        		maxQuotes: 10
        	}
        },
        methods: {
        	NewQuote(quote) {
        		this.quotes.push(quote)
        	}
        },
        components: {
        	appQuoteGrid: QuoteGrid,
        	appNewQuote: NewQuote
        }
    }
</script>

<style>
</style>
