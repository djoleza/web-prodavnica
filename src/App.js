 
import './App.css';
import axios from "axios";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Pocetna from './Pocetna';
import Navbar from './Navbar';
import Login from './Login';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
function App() {


  const [proizvodi,setProizvodi] = useState([ ]);
  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axiosInstance.get( "http://127.0.0.1:8000/api/proizvodi",
 
        );
        setProizvodi(res.data.data);
        console.log(res.data.data)
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [ axiosInstance]);
  const[token,setToken] = useState();

  return (
    <div className="App">
        <BrowserRouter className="App">
          <Navbar token={token}></Navbar>
          <Routes>

              <Route path="/" element={ <Pocetna proizvodi={proizvodi}></Pocetna>}></Route>
              <Route path="/login" element={ <Login addToken={setToken}></Login>}></Route>
  
          </Routes>
           
          
 
       </BrowserRouter>
    
    </div>
  );
}

export default App;
