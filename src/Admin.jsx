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
      function searchTable() {
        // uzimamo vrednost iz polja za pretragu
        var input = document.getElementById("searchInput").value.toUpperCase();
        
        // pronalazimo tabelu i sve redove u njoj
        var table = document.getElementById("myTable");
        var rows = table.getElementsByTagName("tr");
        
        // prolazimo kroz svaki red u tabeli
        for (var i = 0; i < rows.length; i++) {
          var cells = rows[i].getElementsByTagName("td");
          var found = false;
          // prolazimo kroz svaku ćeliju u trenutnom redu
          for (var j = 0; j < cells.length; j++) {
            var cell = cells[j];
            // ako sadrži traženu vrednost, postavljamo found na true i prekidamo petlju
            if (cell.innerHTML.toUpperCase().indexOf(input) > -1) {
              found = true;
              break;
            }
          }
          // prikazujemo ili skrivamo red u zavisnosti od toga da li smo pronašli traženu vrednost
          if (found) {
            rows[i].style.display = "";
          } else {
            rows[i].style.display = "none";
          }
        }
      }
    return (
      <div className="containerTabela ">    
 
                <input type="text" id="searchInput" onInput={searchTable} />
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
            <tbody id="myTable">
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
  