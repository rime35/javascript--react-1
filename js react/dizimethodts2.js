const urunler = [
    { id: 1, name: "Kalem", fiyat: 5 },
    { id: 2, name: "Defter", fiyat: 10 },
    { id: 3, name: "Silgi", fiyat: 2 },
    { id: 4, name: "Kalemtraş", fiyat: 7 },
  ];
  //urunler.filter((urun) => urun.name.includes("Kalem")); 
  urunler
  .filter((urun) => urun.name.includes("Kalem")) 
  .map((urun) => `${urun.name} fiyatı ${urun.fiyat} liradır.`); 
  ////////////////////////////////////////////////////////////////
  urunler.reduce((toplam, urun) => toplam + urun.fiyat, 0)
  urunler.reduce((isimler, urun) => isimler + " " + urun.name, "Ürün İsimleri:");
  