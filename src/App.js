import logo from './logo.svg';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Nav from './components/Nav';
import Footer from './components/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
    <BrowserRouter> 
     <Nav></Nav>
    <Routes>
    <Route path='/Home' element={<Home/>}/> 
    <Route path='/About' element={<About/>}/> 
    <Route path='/Contact' element={<Contact/>}/> 
    <Route path='/Resume' element={<Resume/>}/> 
    <Route path='/' element={<Home/>}/> 

    </Routes>

     <Footer></Footer> 
     </BrowserRouter>
    </div>
  );
}

export default App;
