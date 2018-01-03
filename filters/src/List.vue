<template>
  <div>
      <h1>Filters and Mixins</h1>
      <input v-model="filterText">
      <ul>
        <li v-for="v in filteredVeg">{{ v }}</li>
      </ul>  
  </div>         
</template>

<script>
import { vegMixin } from './vegMixin';
export default {
    mixins: [vegMixin]
    }
</script>

<style>
</style>
