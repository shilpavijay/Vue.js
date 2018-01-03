<template>
  <div class="container">
    <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <h1>Filters</h1>
            <p>{{ text | toUpperCase | to-lowerCase}}</p>
        </div>

         <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <h1>Alternative to Filters - Computed</h1>
            <input v-model="filterText">
            <ul>
              <li v-for="v in filteredVeg">{{ v }}</li>
            </ul>  
            <hr>
             <app-list></app-list>
        </div>
    </div>
  </div>      

</template>

<script>
import List from './List.vue';
import { vegMixin } from './vegMixin';

export default {
    mixins: [vegMixin],
    data() {
        return {
         text: "Hello World!!!"
       }
      },
      filters: {
        'toUpperCase'(value) {
          return value.toUpperCase();
        }
      },
      components: {
        appList: List
      }
    }
    
</script>

<style>
</style>
