new Vue({
    el: "#app",
    data: {
        title: "Deneme Başlığı",
        description: "Bu bir deneme versidir. Açıklama alanıdır.",
        test1:"",
    },
    methods: {
        changeTitle: function (key) {
            if(key==" "){
                this.description ="Bu bir deneme versidir. Açıklama alanıdır.";
            }
            else if(key!=" "){
                this.description = key.target.value;
            }
            
        },
        hello: function(name){
            this.test1=name.target.value;
        },
        merhaba: function(){
            return this.title+this.test1;
        }
    }
});

// stringintepuliton => {{buraya yazdırlan yazıdır}}
