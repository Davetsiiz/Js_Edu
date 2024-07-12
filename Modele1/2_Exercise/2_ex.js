new Vue({
  el: "#app",
  data: {
    pKeyWord: null,
    pKeyWordWithEnter: null,
  },
  methods: {
    alertFire: function () {
      alert("Ödev 2. \n1.soru");
    },
    reWriteP: function (event) {
      this.pKeyWord = event.target.value;
    },
    reWritePresEnter: function (event) {
      this.pKeyWordWithEnter = event.target.value;
    },
  },
});
