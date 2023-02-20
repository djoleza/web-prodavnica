import React from 'react'
import { Link } from 'react-router-dom'
import { BsCartFill } from "react-icons/bs";
import axios from "axios";

function Navbar({cartNum,token}) {
  
  
    
    
  return (
    <div>
          <ul className='listaNavbar'>
                <li className='elementListeNavbar'> <Link to="/">Pocetna</Link>  </li>

                {token == null ?   //ako nije ulogovan moze da se uloguje ili registruje
            <> 
 
                
             
             
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