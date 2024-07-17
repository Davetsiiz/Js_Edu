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
           
            //bu çalışmaz çünkü scope u kaydı
            //klasik fonksiyon this fonksiyonunu miras almaz. içeri taşıayamaz
            
            setTimeout(function() {
                this.counter=0;
            }, 1500);
            //bu çalışır arrow fonksiyondur this'i miras alarak çalışırlar
            // setTimeout(() => {
            //     this.counter=0;
            // }, 1500);
            //bu da alternatiftir
            // vm=this;
            // setTimeout(function() {
            //     vm.counter=0;
            // }, 1500);
            
        }

    },
});
