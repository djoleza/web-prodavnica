import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
 
const Dodaj = () => {
    let navigate = useNavigate();


  const [naziv, setNaziv] = useState('');
  const [opis, setOpis] = useState('');
  const [cena, setCena] = useState('');
  const [slikaUrl, setSlikaUrl] = useState('');
  const [kategorija_id, setKategorija] = useState(1);
  const [brend_id, setBrend] = useState(1);
  const [stanjeNaLageru, setStanjeNaLageru] = useState('');

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
 
    setNaziv('');
    setOpis('');
    setCena('');
    setSlikaUrl('');
    setKategorija(1);
    setBrend('');
    setStanjeNaLageru(1);
    console.log(noviProizvod)
    var config = {
        method: 'post',
        url: 'http://127.0.0.1:8000/api/proizvodi',
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
        />
      </div>
      <div>
        <label htmlFor="opis">Opis:</label>
        <textarea
          id="opis"
          value={opis}
          onChange={(event) => setOpis(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="cena">Cena:</label>
        <input
          type="number"
          id="cena"
          value={cena}
          onChange={(event) => setCena(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="slikaUrl">URL slike:</label>
        <input
          type="text"
          id="slikaUrl"
          value={slikaUrl}
          onChange={(event) => setSlikaUrl(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="kategorija_id">Kategorija:</label>
        <select   name="kategorija_id" onChange={(event) => setKategorija(event.target.value)}>
        <option value={1}>Frižideri</option>
        <option value={2}>Veš mašine</option>
        <option value={3}>Mašine za sušenje veša</option>
        <option value={4}>Mašine za sudove</option>
        <option value={5}>Rerne</option>
        </select>
      </div>
      <div>
        <label htmlFor="brend_id">Brend:</label>
        <select   name="brend_id" onChange={(event) => setBrend(event.target.value)}>
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
        />
      </div>
      <button type="submit">Dodaj proizvod</button>
      </form>
      )
}
export default Dodaj;
