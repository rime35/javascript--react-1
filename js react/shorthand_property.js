const isim = "emir";
const yas = 35;
const kullanici_objesi = { isim, yas }; 

console.log(kullanici_objesi); 
/////
function Sayac({ baslangicDegeri, adim }) {
    
    const [sayac, setSayac] = useCounter({ baslangicDegeri, adim }); // Burada kısayol kullanım var.
    return <button onClick={setSayac}>{sayac}</button>;
}