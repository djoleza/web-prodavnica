import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
 
const Azuriraj = ({proizvod}) => {
    let navigate = useNavigate();


  const [naziv, setNaziv] = useState(proizvod.naziv);
  const [opis, setOpis] = useState(proizvod.opis);
  const [cena, setCena] = useState(proizvod.cena);
  const [slikaUrl, setSlikaUrl] = useState(proizvod.slika_url);
  const [kategorija_id, setKategorija] = useState(proizvod.kategorija.id);
  const [brend_id, setBrend] = useState(proizvod.brend.id);
  const [stanjeNaLageru, setStanjeNaLageru] = useState(proizvod.stanje_na_lageru);

  const handleSubmit = (event) => {
    event.preventDefault();
    const noviProizvod = {
      naziv,
      opis,
      cena,
      slika_url: slikaUrl,
      kategorija_id:kategorija_id,
      brend_id:brend_id,
      stanje_na_lageru: stanjeNaLageru
    };
 
    setNaziv(proizvod.naziv);
    setOpis(proizvod.opis);
    setCena(proizvod.cena);
    setSlikaUrl(proizvod.slika_url);
    setKategorija(proizvod.kategorija.id);
    setBrend(proizvod.brend.id);
    setStanjeNaLageru(proizvod.stanje_na_lageru);
    console.log(noviProizvod)
    var config = {
        method: 'put',
        url: 'http://127.0.0.1:8000/api/proizvodi/'+proizvod.id,
        data:noviProizvod,
        headers:{'Authorization': `Bearer ${ window.sessionStorage.getItem('auth_token')}`},
      };
   
      
      axios(config)
      .then(function (response) {
       
        console.log(response);
       
        alert("USPESNO")
       navigate("/")
  
      })
      .catch(function (error) {
       
        if (error.response) {
                
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            
            console.log(error.request);
        } else {
          
            console.log('Error', error.message);
        }
    
        
        
  
      }); 





  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="naziv">Naziv:</label>
        <input
          type="text"
          id="naziv"
          value={naziv}
          onChange={(event) => setNaziv(event.target.value)}
          defaultValue={proizvod.naziv}
        />
      </div>
      <div>
        <label htmlFor="opis">Opis:</label>
        <textarea
          id="opis"
          value={opis}
          onChange={(event) => setOpis(event.target.value)}
          defaultValue={proizvod.opis}

        />
      </div>
      <div>
        <label htmlFor="cena">Cena:</label>
        <input
          type="number"
          id="cena"
          value={cena}
          onChange={(event) => setCena(event.target.cena)}
          defaultValue={proizvod.opis}

        />
      </div>
      <div>
        <label htmlFor="slikaUrl">URL slike:</label>
        <input
          type="text"
          id="slikaUrl"
          value={slikaUrl}
          onChange={(event) => setSlikaUrl(event.target.value)}
          defaultValue={proizvod.slika_url}

        />
      </div>
      <div>
        <label htmlFor="kategorija_id">Kategorija:</label>
          
        <select   name="kategorija_id" onChange={(event) => setKategorija(event.target.value)}  defaultValue={proizvod.kategorija_id}>
        <option value={1}>Frižideri</option>
        <option value={2}>Veš mašine</option>
        <option value={3}>Mašine za sušenje veša</option>
        <option value={4}>Mašine za sudove</option>
        <option value={5}>Rerne</option>
        </select>
      </div>
      <div>
        <label htmlFor="brend_id">Brend:</label>
        <select   name="brend_id" onChange={(event) => setBrend(event.target.value)} defaultValue={proizvod.brend_id}>
        <option value={1}>Samsung</option>
        <option value={2}>LG</option>
        <option value={3}>Bosch</option>
        <option value={4}>Whirlpool</option>
        <option value={5}>Siemens</option>
        </select>

      </div>
      <div>
        <label htmlFor="stanjeNaLageru">Stanje na lageru:</label>
        <input
          type="number"
          id="stanjeNaLageru"
          value={stanjeNaLageru}
          onChange={(event) => setStanjeNaLageru(event.target.value)}
          defaultValue={proizvod.stanje_na_lageru}
        />
      </div>
      <button type="submit">Azuriraj proizvod</button>
      </form>
      )
}
export default Azuriraj;
