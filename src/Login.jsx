import axios from 'axios';
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';  

function Login({addToken}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    const userData= new FormData();
    userData.append('email',email)
    userData.append('password',password);
    axios
    .post("http://127.0.0.1:8000/api/login", userData )
    .then((res)=>{  
        console.log(res.data[0]);
        if(res.data.success===true){
           // alert("USPESNO");  
           
          
            //token koji smo dobili od korisnika treba da sacuvamo u storag-u da bismo znali cemu taj korisnik ima pristup
            window.sessionStorage.setItem("auth_token",res.data[0].token);
            window.sessionStorage.setItem("auth_name",res.data[0].username);
            window.sessionStorage.setItem("auth_id",res.data[0].id);
            addToken(res.data[0].token);
          
            console.log(res.data[0].token);
            if(res.data[0].role === 'admin')
            {
                 navigate("/admin")
            }
            else{
                navigate("/"); 
            }



        }else{
            alert("NEUSPESNO");
        }
    });
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
