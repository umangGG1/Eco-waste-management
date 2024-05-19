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
import Azad from './components/Bhawan Pages/azadBhawan';
import Cautley from './components/Bhawan Pages/cautleyBhawan';
import Ganga from './components/Bhawan Pages/gangaBhawan';
import Govind from './components/Bhawan Pages/govindBhawan';
import Jawahar from './components/Bhawan Pages/jawaharBhawan';
import Kasturba from './components/Bhawan Pages/kasturbaBhawan';
import Radhakrishnan from './components/Bhawan Pages/radhakrishnanBhawan';
import Rajendra from './components/Bhawan Pages/rajendraBhawan';
import Ravindra from './components/Bhawan Pages/ravindraBhawan';
import Sarojini from './components/Bhawan Pages/sarojiniBhawan';
import Vigyan from './components/Bhawan Pages/vigyanBhawan';

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
     <Route
          path="/scanner/azad"
          element={<Azad/>}
        />
      <Route
          path="/scanner/cautley"
          element={<Cautley/>}
        />
      <Route
          path="/scanner/ganga"
          element={<Ganga/>}
        />
      <Route
          path="/scanner/govind"
          element={<Govind/>}
      />
      <Route
          path="/scanner/jawahar"
          element={<Jawahar/>}
      />
      <Route
          path="/scanner/kasturba"
          element={<Kasturba/>}
      />
      <Route
          path="/scanner/rkb"
          element={<Radhakrishnan/>}
      />
      <Route
          path="/scanner/rajendra"
          element={<Rajendra/>}
      />
      <Route
          path="/scanner/ravindra"
          element={<Ravindra/>}
      />
      <Route
          path="/scanner/sarojini"
          element={<Sarojini/>}
      />
      <Route
          path="/scanner/vigyan"
          element={<Vigyan/>}
      />

             
    </Routes>
    
  );
};

export default App;