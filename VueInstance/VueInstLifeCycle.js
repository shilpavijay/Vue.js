var newApp1 = new Vue({
	 el: "#app1",
   data: {
   	name: "VueJS Instance Life Cycle",
   },

   beforeCreate: function() {
   	console.log('beforeCreate()')
   },
   created: function() {
   	console.log('created()')
   },
   beforeMount: function() {
   	console.log('beforeMount()')
   },
   mounted: function() {
   	console.log('mounted()')
   },
   beforeUpdate: function() {
   	console.log('beforeUpdate()')
   },
   updated: function() {
   	console.log('updated()')
   },
   beforeDestroy: function() {
   	console.log('beforeDestroy()')
   },
   destroyed: function() {
   	console.log('destroyed()')
   },
   methods: {
   	destroy: function(){
    	this.$destroy();
    }
   }
});