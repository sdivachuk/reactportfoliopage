// import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
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
    <Route path='/About' element={<About/>}/> 
    <Route path='/Portfolio' element={<Portfolio/>}/> 
    <Route path='/Contact' element={<Contact/>}/> 
    <Route path='/Resume' element={<Resume/>}/> 
    <Route path='/' element={<About/>}/> 

    </Routes>

     <Footer></Footer> 
     </BrowserRouter>
    </div>
  );
}

export default App;
