 
 
function Pocetna({proizvodi}) {

 
  return (
    <div className="container ">
            {proizvodi.map((proizvod)=>
                <div className="card-container" key={proizvod.id}>
                <div className="card">
                  <div className="card-image">
                    <img src={proizvod.slika_url} alt="Beko RCNA406K20P"/>
                  </div>
                  <div className="card-content">
                    <div className="card-header">
                      <h2 className="card-title">{proizvod.naziv}</h2>
                      <p className="card-subtitle">{proizvod.opis}</p>
                    </div>
                    <div className="card-footer">
                      <div className="card-meta">
                        <p className="card-brand">{proizvod.brend.naziv}</p>
                        <p className="card-category">{proizvod.kategorija.naziv}</p>
                      </div>
                      <p className="card-price">{proizvod.cena} RSD</p>
                    </div>
                  </div>
                </div>
              </div>


              
            )}
    
    </div>
  );
}

export default Pocetna;
