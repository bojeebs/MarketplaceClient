import './App.css';
import { AuthProvider } from './AuthContext';
import Landing from './Components/Landing.tsx';
import Login from './Components/Login.tsx';
import Register from './Components/Register.tsx';
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router';

function App() {
const [authenticated, toggleAuthenticated] = useState(false)
const [user, setUser] = useState(null) 






  return (
    <>
    <AuthProvider>
    <Routes>
      <Route path="/" element={<><Landing /></>}
      />
      <Route path="login" element={<><Login /></>}/>
      <Route path="register" element={<><Register/> </>}/>




    </Routes>
    </AuthProvider>
    
    </>
    
  );
}

export default App;
