import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import HomePage from './screens/homePage';
import Promosyon from './screens/promosyon';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route>
        <Route path='/' element={<App />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/promosyon' element={<Promosyon />} />


      </Route>
    </Routes>
  </Router>
);


reportWebVitals();
