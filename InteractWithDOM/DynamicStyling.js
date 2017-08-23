new Vue({
  el: '#exercise',
  data: {
		highnow: false,
    shrinknow: true,
    usrentry: "shrink",
    usrclass: "taller",
    bgcolor: "green",
    width: 0
  },
  computed: {
  	custom: function() {
    	return {
      	backgroundColor: this.bgcolor,
        color: 'white',
        width: 30 + 'px'
      }
    },
   startProgress: function() {
      var cur = this;
      cur.width = 0
      stIn = setInterval(function(){
       if (cur.width < 400){
      	cur.width += 40
        }
      },1000)          
   },
   
   progbar: function() {
   	return {
    	width: this.width + 'px',
      height: 20 + 'px',
      backgroundColor: "blue"
    }
   }
  }
  
  
});
