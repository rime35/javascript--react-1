const urunler = [
    { id: 1, name: "Kalem", fiyat: 5 },
    { id: 2, name: "Defter", fiyat: 10 },
    { id: 3, name: "Silgi", fiyat: 2 },
    { id: 4, name: "Kalemtraş", fiyat: 7 },
  ];
  /* urunler.find((urun) => urun.fiyat > 5);
  /////////////////////////////////////////////
  urunler.some((urun) => urun.fiyat < 2);
urunler.some((urun) => urun.fiyat > 9); 
////////////////////////////////////////////////////////
runler.every((urun) => urun.fiyat > 1); 
urunler.every((urun) => urun.fiyat < 5);
//////////////////////////////////////////////
urunler.some((urun) => urun.name.includes("Kalem")); 
urunler.every((urun) => urun.name.includes("Kalem")); */
const isim="emir";
console.log(isim.includes("em"));
console.log(isim.includes("Emir"));

const yeniIsim=isim.toLowerCase();
console.log(yeniIsim);


    const urunOlustucu=urunler.map((urun) => `${urun.name} fiyatı ${urun.fiyat} liradır.`);
    console.log(urunOlustucu);
    function UrunGoster({ urunListesi }) {
        return urunListesi.map((urun) => <li key={urun.id}>{urun.name}</li>);
      }


      





