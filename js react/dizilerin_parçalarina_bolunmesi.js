//const kullanici = { isim: "emirhan", yas: 21 };

//const { isim, yas } = kullanici;
//console.log(isim);
//console.log(yas);

const kullanici = { isim: "emirhan", yas: 21, sehir: "İstanbul" };

const { isim, yas, ...kalanlar } = kullanici; //rest öperaötür  ...

console.log(isim);
console.log(kalanlar);

function KullaniciYasGoster({ isim, yas }) {
  return `${isim}  kullanıcısı ${yas} yaşındadır.`;
}

const sayilar = [1, 2, 3, 4, 5];
const [bir, iki, uc, dort, bes] = sayilar;
console.log({ bir,iki,uc });
 
