new Vue({
    el: "#app",
    data: {
      link:"https://www.google.com",
      message:"Merhaba, ",
      title:"Google Giriş.",
      blogLink:"<a href='https://www.google.com'>Tıklayınız!</a>"
    },
    methods: {
        hello:function(){
            this.title="Google";
            return this.message+this.title;
        }
    }
});