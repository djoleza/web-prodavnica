import React from 'react'
import { Link } from 'react-router-dom'
 
import axios from "axios";

function Navbar() {
  
  
    
    
  return (
    <div>
          <ul className='listaNavbar'>
                

                {window.sessionStorage.getItem("auth_token") == null ?   
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
                   
                 
                   </>
            
              
              }



               


                
            </ul>




    </div>
  )
}

export default Navbar