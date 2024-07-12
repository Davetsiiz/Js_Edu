new Vue({
  el: "#app",
  data: {
    counter: 0,
    p_Counter: "",
    x: 0,
    y: 0,
  },
  methods: {
    showAlert: function (name) {
      alert(name);
    },
    plusCounter: function (step) {
      this.counter += step;
    },
    minusCounter: function (step) {
      debugger;
      this.counter =
        this.counter <= 0 ? (this.counter = 0) : (this.counter -= step);
        if(this.counter<=0)this.counter = 0;
    },
    updateMouseCoord: function (step,event) {
      this.plusCounter(step);
      this.x = event.clientX;
      this.y = event.clientY;
    },
  },
});
