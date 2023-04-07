document.getElementById("bio").innerHTML="Emre Murat Eren"; // bio ID li p tagi manipüle edildi.

var intro1=document.getElementById("intro1");
var mesaj = document.getElementById("mesaj");
mesaj.innerHTML=intro1.innerHTML;


var tumliste=document.getElementsByTagName("ul");
var sehirler=tumliste[0];
tumElemanlar=sehirler.getElementsByTagName("li");
for(i=0; i<tumElemanlar.length;i++){
    console.log(tumElemanlar[i].innerHTML);
}

var intro1cls=document.getElementsByClassName("intro1");
console.log(intro1cls[0].innerHTML);
var intro1cls=document.getElementsByClassName("intro2"); // iki elemenalı bir array döner
console.log(intro1cls[0].innerHTML);
console.log(intro1cls[1].innerHTML);

var queryElement=document.querySelectorAll("p.intro3");
queryElement[0].innerHTML="YENİ ağaç değeri";
document.getElementById("intro3").style.fontSize="35px";

var nesli=document.getElementsByClassName("Nesli");

var queryelemenalari=document.querySelectorAll("p.intro3"); // plerin içindeki intro3 kullananları ver
console.log(queryelemenalari.length)

var isimElemanlari=document.getElementsByName("musteriadi");
console.log(isimElemanlari[0].value);  //input girişindeki yazıyı okur 

var nesli=document.getElementById("Nesli").addEventListener("wheel",rengidegistir); //üstüne gelip mouse tekerleğini haraket ettirince değişiyor.
function rengidegistir(){
document.getElementById("P1").style.color="yellow";
isimElemanlari[0].value=document.getElementById("Nesli").innerHTML;
}


var node =document.getElementById("agac");
console.log(node.childNodes[0].nodeValue); //içerideki bilgiyi okur 

var baslik=document.createElement("h6");
var node1=document.createTextNode("Merhaba Dünya! Nasılsın?")
baslik.appendChild(node1);
var div1=document.getElementById("div1");
var p2=document.getElementById("P2");
var p1=document.getElementById("P1");
div1.insertBefore(baslik,P2); //P2 id li p tagli yerin üstüne baslik adlı h6 tagli child ı node1 olan yazı ekledi
div1.removeChild(p2)    //p2 adındaki değişkeni html dayfasından sildi
div1.replaceChild(baslik,p1)   //p1 adındaki değişkenin içeriği değiştirildi. baslik1 node u ile değiştirildi.