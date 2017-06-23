var abc = new Vue({
	el: "#hello",
	data: {
		"test": "Hello Vue!!!"
	}
});

var firstApp = new Vue({
  el: "#firstApp",
data: {message: "Hello World!!!"
      }
});

Vue.component('to-do', {
  props: ['todo'],
  template: '<li> {{ todo.comp }} </li>'
})

var newapp = new Vue({
  el: '#newapp',
  data: {
    hovermsg: 'You loaded this page on ' + new Date(),
    list: [
      { items: 'Pandas' },
      { items: 'Scikit-Learn'},
      { items: 'Matplotlib'},
      { items: 'BeautifulSoup'}
    ],
    
    todolist: [
      { id: 0, comp: 'Buy Abc' },
      { id: 1, comp: 'Go to xyz' }
    ],
    msg: 'Vue.js is Fun!',
    text: 'Change me!'
  },
  methods: {
    doThisOnClick: function(){
      this.msg = this.msg.split('').reverse().join('')
    }
  }
});



