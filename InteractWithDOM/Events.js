new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        
        methods: {
        	alertuser: function(event) {
          	 alert('Alert!!!')
          },
          
          listening: function(event) {
          	this.value = event.target.value;
          },
          
          selectiveListen: function(event) {
          	this.value = event.target.value;
          }
        }
    });