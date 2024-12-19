
import './App.css';


import Header from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import ShopPage from './pages/ShopPage.jsx';
import Footer from './components/Footer.jsx';
import ShopDetail from './pages/ShopDetail.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from './pages/Card.jsx';
import Contact from './pages/Contact.jsx';
import Login from './pages/Login.jsx';
import { useState } from 'react';

function App() {


  const [loginSuccess, setLoginSuccess] = useState(false);
console.log(loginSuccess);

  return (
    <div>
   { 
     loginSuccess ?<Login setLoginSuccess={setLoginSuccess}/>:
        <>
      
        <BrowserRouter>
           <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="shop" element={ <ShopPage  />} />
                <Route path="shopdetail" element={ <ShopDetail />} />
                <Route path="card" element={<Card />}  />
                <Route path="contact" element={<Contact />} />
                <Route path='siginpage' element={<Login setLoginSuccess={setLoginSuccess}/>} /> 
            </Routes>
          </BrowserRouter>
        <Footer/>
        </>
   }
    </div>
  );
}

export default App;
