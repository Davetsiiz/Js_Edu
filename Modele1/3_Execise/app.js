new Vue({
        el: '#exercise',
        data: {
            value: 0,
        },
        methods:{
            
        },
        computed:{
            result:function(){
                return this.value != 33 ? "Henüz Bitmedi!" : "Tamamlandı!";
            }
        },
        watch:{
            value:function(value){
                setTimeout(() => {
                    this.value=0;
                }, 5000);
            }
        }
    });