import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

 
 
function Admin({proizvodi,setPAzuriraj}) {
    const navigate = useNavigate();

    function azuriraj(p){
        setPAzuriraj(p)
        navigate('/azuriraj');

    }
    function obrisi(id){
        axios
        .delete("http://127.0.0.1:8000/api/proizvodi/"+id,
        {headers:{'Authorization': `Bearer ${ window.sessionStorage.getItem('auth_token')}`} } )
        .then((res)=>{  
            console.log(res.data);
            alert("OBRISANO")
        })
        .catch(function (error) {
            if (error.response) {
              // Request made and server responded
              console.log(error.response.data);
              
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
            }
        
          });
      }
  
    return (
      <div className="containerTabela ">
 

            <table>
            <thead>
                <tr>
                <th>ID</th>
                <th>Naziv</th>
                <th>Opis</th>
                <th>Cena</th>
                <th>Kategorija</th>
                <th>Brend</th>
                <th>Stanje na lageru</th>
                <th>Opcije</th>

                </tr>
            </thead>
            <tbody>
                {proizvodi.map((product) => (
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.naziv}</td>
                    <td>{product.opis}</td>
                    <td>{product.cena}</td>
                    <td>{product.kategorija.naziv}</td>
                    <td>{product.brend.naziv}</td>
                    <td>{product.stanje_na_lageru}</td>
                    <td>
                        <button className='btn btn-danger' onClick={()=>obrisi(product.id)}>Obrisi</button>
                    <button className='btn btn-success' onClick={()=>azuriraj(product)}>Azuriraj</button>
                    </td>

                </tr>
                ))}
            </tbody>
            </table>
                        
              
      
      </div>
    );
  }
  
  export default Admin;
  