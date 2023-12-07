import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import EventTable from './components/table/Event';
import SignUp from './components/signup/Signup';
import Login from './components/login/Login';
import LearnState from './components/LearnState';
import Dropdown from './components/Toggled';
import Dropdown2 from './components/CoolorList';
import MultiStepForm from './components/classwork/Form';
// import First from './components/First';
// import Bitcoin from '../src/components/Bitcoin'; 
// import Ideas from './components/Header'
// import Footer from './components/Footer'
// import Main from './components/Main'
 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Ideas/>
    <Main/>
    <Footer/> */
    // <EventTable />
    
    <MultiStepForm/>
    }
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
