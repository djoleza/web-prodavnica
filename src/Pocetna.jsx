import axios from "axios";
import { useEffect, useState } from "react";

 
 
function Pocetna({proizvodi}) {
 
    const [exchangeRate, setExchangeRate] = useState(null);

    useEffect(() => {
      const fetchExchangeRate = async () => {
        try {
          const response = await axios.get(
            "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=RSD&to_currency=EUR&apikey=YOUR_API_KEY"
          );
          const data = response.data["Realtime Currency Exchange Rate"];
          const exchangeRate = data["5. Exchange Rate"];
          setExchangeRate(exchangeRate);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchExchangeRate();
    }, []);
 
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
 
                      <p className="card-price">{parseFloat(proizvod.cena*exchangeRate).toFixed(2)} EUR</p>

                    </div>
                  </div>
                </div>
              </div>


              
            )}
    
    </div>
  );
}

export default Pocetna;
