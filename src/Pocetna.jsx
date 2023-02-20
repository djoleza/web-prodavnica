 
 
function Pocetna({proizvodi}) {

 
  return (
    <div className="container ">
            {proizvodi.map((proizvod)=>
                <div class="card-container">
                <div class="card">
                  <div class="card-image">
                    <img src={proizvod.slika_url} alt="Beko RCNA406K20P"/>
                  </div>
                  <div class="card-content">
                    <div class="card-header">
                      <h2 class="card-title">{proizvod.naziv}</h2>
                      <p class="card-subtitle">{proizvod.opis}</p>
                    </div>
                    <div class="card-footer">
                      <div class="card-meta">
                        <p class="card-brand">{proizvod.brend.naziv}</p>
                        <p class="card-category">{proizvod.kategorija.naziv}</p>
                      </div>
                      <p class="card-price">{proizvod.cena} RSD</p>
                    </div>
                  </div>
                </div>
              </div>


              
            )}
    
    </div>
  );
}

export default Pocetna;
