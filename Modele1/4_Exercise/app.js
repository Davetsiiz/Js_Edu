new Vue({
  el: "#exercise",
  data: {
    discoClass: "",
    timer: null,
    changeClass: false,
    time: 2000,
    arrayClasses:['bold','redText','absoluteCenter'],
    inputDiv:"",
    class1:"",
    class2:"",
    x:0,
    y:0,
    time1:10000,
    box: {
        width: '100px',
        height: '100px',
        backgroundColor: 'gray',
        display: 'inline-block',
        marginRight: '5px',
       
      },
      styleArray:""
  },
  methods: {
    startEffect: function () {
      if (this.changeClass) {
        clearInterval(this.timer);
      }
      this.timer = setInterval(() => {
        this.discoClass = this.changeClass ? "shrink" : "highlight";
        this.changeClass = !this.changeClass;
      }, this.time?this.time:1000);
    },
    startProgress:function(){
      setInterval(() => {
        if(this.x<100){
          this.x=this.x+1;
        }
        else return;
        
        
      }, this.time1/100);
    }
  },
  computed:{
    x1:function(){
      return "width: "+this.x+";";
    }
  }
});
