import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Register from './pages/Register';
import Contact from './components/Contact';
import { Route, Routes } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import Modal from './pages/Modal';
import Hero from './pages/Hero';
import Time from './pages/Time';
import Faq from './pages/Faq';

function App() {
  return (
    <div className="App font-['Montserrat', sans-serif]">
       <Header/>
       
       <Routes>
        <Route path='/' element={<Wrapper/>}/>
        <Route path='timeline' element={<Time/>}/>
        <Route path='FAQs' element={<Faq/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='contact' element={<Contact/>}/>
       </Routes>
     
    </div>
  );
}

export default App;
