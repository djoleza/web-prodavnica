 
 
function Admin({proizvodi}) {
    function azuriraj(p){

    }
    function obrisi(id){

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
  