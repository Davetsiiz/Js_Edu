new Vue({
    el: "#app",
    data: {
    colorYellow:false,
    color:"green",
    styleColor:"red",
    },
    methods: {
    },
    computed:{
        divColorClass:function(){
            return{
                yellow:this.colorYellow,
                blue:!this.colorYellow
            }
        }
    }
});