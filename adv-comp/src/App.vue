<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">

        <button @click="selComp = 'appQuote'">Quote</button>
        <button @click="selComp = 'appAuthor'">Author</button>
        <button @click="selComp = 'appNew'">New</button>
        
        <keep-alive>
          <component :is="selComp">
            <p>Default text</p>
          </component>
        </keep-alive>
        
        <!-- <app-quote>
          <h2 slot="title">{{ quoteTitle }}</h2>
          <p slot="subtitle">replace sub</p>
          <p>A wonderful Quote</p>
        </app-quote>  -->
      </div>
    </div>
  </div>
</template>

<script>
  import Quote from './components/Quote.vue';
  import Author from './components/Author.vue';
  import New from './components/New.vue';

  export default {
    data: function() {
      return {
        quoteTitle: "The Quote",
        selComp: "appQuote"
      }
    }, 
    components: {
      appQuote: Quote,
      appAuthor: Author,
      appNew: New
    }
  }
</script>

<style>
</style>
