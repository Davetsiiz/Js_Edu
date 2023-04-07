
var sehirler=["Anakra","İstanbul","İzmir","Adana"];
console.log(sehirler);
sehirler.pop(); // son elemanı çıkarır Array(3) [ "Anakra", "İstanbul", "İzmir" ] yazar
console.log(sehirler);
sehirler.shift(); //ilk elemanı çıkarır Array [ "İstanbul", "İzmir" ]
console.log(sehirler);
sehirler.push("Bursa"); // sona ekler
console.log(sehirler);
sehirler.unshift("Kırklareli");
console.log(sehirler); // başa ekler
var ilceler=["Pınarhisar","Keçiören","Ümraniye"];
sehirler=sehirler.concat(ilceler);
console.log(sehirler);
console.log(sehirler.lastIndexOf("Bursa")); // kaçıncı sırada onu verir bursa için 3 
sehirler=sehirler.sort(); // alfabetik sıralama
console.log(sehirler);
console.log(sehirler.length) // fonsiyon değil bir özelliktir o yüzden () kullanılmaz
