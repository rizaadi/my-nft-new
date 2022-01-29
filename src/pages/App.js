import react from 'react';    
import { Routes } from '../config';
import Header from './Header';
import Footer from './Footer';

import './App.css';
// import './index.css';
// import '../assets/css/logo-ds.svg
import '../assets/css/main.css';
import '../assets/css/fonts.css';
import '../assets/css/normalize.css';
import '../assets/css/nice-select2.css';
import '../assets/css/swiper-bundle.css';


function App() {
  return (
    <div>
      <Header />
      <Routes />  
      <Footer />
    </div>
  )
}

export default App;
