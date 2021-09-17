import React from 'react';
import TheNavbar from './Components/TheNavbar';
import './App.css';
import Home from './Components/Pages/Home';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import Services from './Components/Pages/Services';
import Products from './Components/Pages/Products';
import ContactUs from './Components/Pages/ContactUs';
import SignUp from './Components/Pages/SignUp';
import Marketing from './Components/Pages/Marketing';
import Consulting from './Components/Pages/Consulting';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <BrowserRouter>
<TheNavbar />
      <Switch>
        <Route exact path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/marketing' component={Marketing} />
        <Route path='/consulting' component={Consulting} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
