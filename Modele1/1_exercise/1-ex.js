new Vue({
    el: "#app",
    data: {
      name: "Murat",
      age: 25,
      number: Math.random(0, 1),
      link: "https://kinsta.com/wp-content/uploads/2019/05/edit-wordpress-code-image-1024x512.jpg",
      word: "",
    },
    methods: {
      changeWord: function (key) {
        this.word = key.target.value;
      },
    },
  });