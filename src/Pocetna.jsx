 
 
function Pocetna({proizvodi}) {

 
  return (
    <div className="container ">
            {proizvodi.map((proizvod)=>
                <div className="card" key={proizvod.id}>
                <img src={proizvod.slika_url} alt={proizvod.naziv} />
                <h2>{proizvod.naziv}</h2>
                <h3>Cena: {proizvod.cena} RSD</h3>
                <p>{proizvod.opis}</p>
                <p>Kategorija: {proizvod.kategorija.naziv}</p>
                <p>Brend: {proizvod.brend.naziv}</p>
                <p>Stanje na lageru: {proizvod.stanje_na_lageru}</p>
              </div>
            )}
    
    </div>
  );
}

export default Pocetna;
