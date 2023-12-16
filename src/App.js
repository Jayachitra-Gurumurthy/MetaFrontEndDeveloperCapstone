import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import { BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className='App'> 
    <Header/> 
    <NavBar/>
   
    <MainSection/>
   
    <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
