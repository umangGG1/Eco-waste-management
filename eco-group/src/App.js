import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';
import StartPage from './components/startPage';
import LoginPage from './components/loginPage';
import ScannerPage from './components/scannerPage';
import SuccessPage from './components/successPage';
import Signup from './components/signUp';
import Rajeev from './components/Bhawan Pages/rajeevBhawan';
import ProtectedRoute from './components/protectedRoute';
import FirstPage from './components/admin side/firstPage';
import AdminPage from './components/admin side/adminPage';

const App = () => {
  const user = localStorage.getItem("token")
  return (
    
    <Routes>
    <Route path="/" element={<StartPage />} />
    <Route path="/admin" element={<ProtectedRoute element={AdminPage} />} />
    <Route path="/usertype" element={<FirstPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path='/signup' element={<Signup/>}/>
    <Route path="/success" element={<SuccessPage />} />
    <Route
          path="/scanner"
          element={<ScannerPage/>} 
        />
        <Route
          path="/scanner/rajeev"
          element={<Rajeev/>}
        />
    </Routes>
    
  );
};

export default App;