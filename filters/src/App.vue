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
        </div>

    </div>
  </div>         
</template>

<script>
export default {
    data() {
        return {
         text: "Hello World!!!",
         veg: ['carrot','cabbage','brinjal','avocado','broccoli'],
         filterText: ''
       }
      },
      computed: {
        filteredVeg() {
          return this.veg.filter((element) => {
            return element.match(this.filterText);
          });
        }
      },
      filters: {
        'toUpperCase'(value) {
          return value.toUpperCase();
        }
      }
    }
</script>

<style>
</style>
