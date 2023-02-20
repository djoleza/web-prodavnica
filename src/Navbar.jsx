import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
 
import axios from "axios";

function Navbar({token,setToken}) {
  let navigate = useNavigate();
  
  
  function handleLogout(){ 
     
       
    var config = {
      method: 'post',
      url: 'http://127.0.0.1:8000/api/logout',
      headers:{'Authorization': `Bearer ${ window.sessionStorage.getItem('auth_token')}`},
    };
 
    
    axios(config)
    .then(function (response) {
     
      console.log(response);
     
      window.sessionStorage.setItem('auth_token',null); 
      window.sessionStorage.setItem('auth_name',null); 
      window.sessionStorage.setItem('auth_id',null); 
      navigate('/');
      sessionStorage.clear();
      setToken(null)

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
  }
    
  return (
    <div>
          <ul className='listaNavbar'>
                

                {token == null ?   
            <> 
                <li className='elementListeNavbar'> <Link to="/">Pocetna</Link>  </li>
                <li className='elementListeNavbar'> <Link to="/login">Uloguj se</Link>  </li>
                
             
             
             </> 
             :  //ako jeste ulologovan treba da vidimo da li je admin ili nije admin
             <>  
            
                {window.sessionStorage.getItem("auth_name")=='Admin'  ? 
 
                    <> 
                            
 


                    </>
                :  
                     <></>
 
                
                }
                   
                <li className='elementListeNavbar' style={{float:"right"}} onClick={handleLogout}> <Link to="/logout"> Odjavi se </Link> </li>
                 
                   </>
            
              
              }



               


                
            </ul>




    </div>
  )
}

export default Navbar