//Bas harfleri buyuk yazdırma

/*let isim = ["asik veysel"]
let ad = isim.substr(0,5);
let rest = ad.slice(1);
ad = ad.charAt(0).toUpperCase() + rest;

let soyad = isim.substr(6,11);
let rest = soyad.slice(1);
soyad = soyad.charAt(0).toUpperCase() + rest;

console.log("isim",ad + "" + soyad);*/

//****************************************************** */

// 0 dan 100 e kadar olan sayilari, bir satirda 10 sayi ve her sayinin arasinda virgul olacak sekilde yazdiriniz (10x10 luk bir kare seklinde)

/*let sum = "";
for(let i = 0; i < 100; i++){
    sum = sum + ",";
}
console.log("0 dan 100 e kadar sayılar", sum.slice(0,sum.lenght-2));*/

//************************************************************** */
/*0 dan 100 e kadar olan prime (asal sayilari) yazdirin (Asal sayilar: sadece kendisine ve 1 e bolunebilen sayilar)
bulunmasi gereken sonuc: 1, 2, 3, 5, 7, 11 ....*/

/*sum = "";
for(let i=0; i<100; i++){
    if(i==2 ||i==3) sum+=i+" , ";
    else{
        for(var k=2; k<Math.floor(Math.sqrt(i))+1; k++){
            if(i=k==0){
                break;
            }else{
               if(k==Math.floor(Math.sqrt(i))) sum+= i + ",";

            }
        }
    }
}
console.log("Asal sayılar, 0 dan 100 ekadar:" + sum);*/

//********************************************************** */
// ****  sekıl cizme

let sekil = "";
for(let i=0; i<6; i++){
    sekil += "*";
    console.log(sekil);
}