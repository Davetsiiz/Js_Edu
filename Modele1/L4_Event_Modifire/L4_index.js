new Vue({
    el: "#app",
    data: {
        x: 0,
        y: 0,
      
    },
    methods: {
        updateMouseCoord: function (event) {
            this.x = event.clientX;
            this.y = event.clientY;
          },
          showInputAlert:function(event){
            alert(event.target.value);
            //inputun değerini alır
            //enter a tıklanana kadar alert basmaz
          },
    }
});