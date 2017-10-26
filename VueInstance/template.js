var vueapp1 = new Vue({
  data: {
      name: 'Shilpa'
  }
});

vueapp1.$mount('#app1');

var app2 = new Vue({
   template: '<h1>WORLD!</h1>'
});

app2.$mount()
document.getElementById('app2').appendChild(app2.$el)