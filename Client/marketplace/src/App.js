import './App.css';
import { AuthProvider } from './AuthContext';
import Landing from './Components/Landing.tsx';
import Login from './Components/Login.tsx';
import Register from './Components/Register.tsx';
import ProductDetails from './Components/ProductDetails.tsx'
import Cart from './Components/Cart.tsx';
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router';

function App() {
const [authenticated, toggleAuthenticated] = useState(false)
const [user, setUser] = useState(null) 






  return (
    <>
    <AuthProvider>
    <Routes>
      <Route path="/home" element={<><Landing /></>}/>
      <Route path="login" element={<><Login /></>}/>
      <Route path="register" element={<><Register/> </>}/>
      <Route path="product-details/:productId" element={<><ProductDetails/></>}/>
      <Route path="cart" element={<><Cart/> </>}/>




    </Routes>
    </AuthProvider>
    
    </>
    
  );
}

export default App;
