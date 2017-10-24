var data = {
	title:'Initial title'
}

var app1 = new Vue({
	el: "#app1",
  data: data
});

var app2 = new Vue({
	el: "#app2",
  data: {
  	title: 'second title'
  },
  methods: {
  	change: function() {
    	app1.title = "Title - changed by another Vue Instance"
      app1.$refs.myButton.innerText = 'Modify';
  	  this.$refs.heading.innerText = "something else";
      }
  }
});

console.log(app1.$data === data)
console.log(app2.$data === data)
console.log(app1.$data.title)
console.log(this.$refs)