new Vue({
    el: "#app",
    data: {
        counter: 0,
        secondCounter: 0,
    },
    methods: {
        result: function () {
            console.log("Result")
            return this.counter > 10 ? "10'dan büyüktür" : "10'dan küçüktür.";
        },
    },
    //senkron çalışır
    computed: {
        //sadece kendisini ilgilendiren alanda çalışır. İlgilendirmiyorsa sayfada render edilmez.
        output: function () {
            console.log("output")
            return this.counter > 10 ? "10'dan büyüktür" : "10'dan küçüktür.";
        },
    },
    //asenkron çalışır
    watch: {
        counter : function(value){
            setTimeout(() => {
                console.log(value);  
            }, 1500);
            
        }

    },
});
