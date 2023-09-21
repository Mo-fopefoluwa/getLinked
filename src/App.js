import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './pages/Hero';
import Parts from './pages/Parts';
import Rules from './pages/Rules';
import Faq from './pages/Faq';
import Idea from './pages/Idea';
import Key from './pages/Key';
import Reward from './pages/Reward';
import Terms from './pages/Terms';
import Time from './pages/Time';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
       <Header/>
      {/*<Hero />
      <Idea/>
      <Rules/>
      <Key/>
      <Faq/>
      <Time/>
      <Reward/>
      <Parts/>
      <Terms/>
      <Footer/> */}
      <Register/>
    </div>
  );
}

export default App;
