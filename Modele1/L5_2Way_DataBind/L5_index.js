new Vue({
    el: "#app",
    data: {
      name:"Murat",
      counter:0,
    },
    methods: {
        result:function(){
            return this.counter>10?"10'dan büyüktür":"10'dan küçüktür."
        },
    },
    computed:{

    },
    watch:{
    
    }
});