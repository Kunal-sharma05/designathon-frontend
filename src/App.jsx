import './index.css'; 
import React from 'react'; 
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; 
import Login from './Components/Login'; 
import Signup from './Components/Signup'; 
import PasswordReset from './Components/PasswordReset'; 
import PasswordResetForm from './Components/PasswordResetForm'; 
import Dashboard from './Components/Dashboard';
function App() { 
  return ( 
    <Router> 
      <Routes> 
        <Route path="/" element={<Navigate to="/login" />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/dashboard" element={<Dashboard />} />
        
        <Route path="/password-reset-form" element={<PasswordResetForm />} /> 
        <Route path="/password-reset" element={<PasswordReset/>} /> 

      </Routes> 
    </Router> 
  ); 
} 

export default App; 
