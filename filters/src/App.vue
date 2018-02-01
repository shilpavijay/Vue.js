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

        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins Practice</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <p> {{ text | textReverse}}</p> 

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <p>{{ text | countLen}}</p>
                
                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->

                <h3>Using Computed property and Mixin:</h3>
                <p>{{ revText }}</p>
                <p>{{ textWithCount }}</p>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->

        </div>
    </div>
  </div>      

</template>

<script>
import List from './List.vue';
import { vegMixin } from './vegMixin';
import { strMan } from './strManMixin';

export default {
    mixins: [vegMixin, strMan],
    data() {
        return {
         text: "Hello World!!!"
       }
      },
      filters: {
        'toUpperCase'(value) {
          return value.toUpperCase();
        },
        'textReverse'(value) {
          return value.split('').reverse().join('');
        }
      },     
      components: {
        appList: List
      }
    }
</script>

<style>
</style>
