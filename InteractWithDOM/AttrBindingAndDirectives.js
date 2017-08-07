var app = new Vue({
	el: "#exercise",
  data: {
  		name: "Shilpa",
      age: "100",
      srclink: 'http://www.planwallpaper.com/wallpaper-hd#static/images/bicycle-1280x720.jpg'
  },
  methods: {
    thrice: function () {
      return this.age*3
    },
    rand: function () {
    	return Math.random(0,1)
    }
  }
  
});