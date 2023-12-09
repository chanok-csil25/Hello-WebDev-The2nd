
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Payment from './pages/Payment';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Stationary from './pages/Stationary';
import Mobile from './pages/Mobile';
import PencilYellow from './pages/PencilYellow';
import SilverPencile  from './pages/SilverPencile';
import Eraser from './pages/Eraser';
import Note from './pages/Note';
import Liquie from './pages/Liquie';
import Ruler from './pages/Ruler';
import MouseMagic from './pages/MouseMagic';
import USB from './pages/USB';
import HeadPhone from './pages/Headphone';
import Lenovo from './pages/Lenovo';
import Iphone from './pages/Iphone';
import Mouse from './pages/Mouse';
import Member from './pages/Member';


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stationary/" element={<Stationary />} />
        <Route path="/mobile/" element={<Mobile />} />
        <Route path="/search" element={<Search />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/pencilyellow" element={<PencilYellow />} />
        <Route path="/silverpencile" element={<SilverPencile />} /> 
        <Route path="/eraser" element={<Eraser />} />
        <Route path="/note" element={<Note />} />
        <Route path="/Liquie" element={<Liquie />} />
        <Route path="/Ruler" element={<Ruler />} />
        <Route path="/MouseMagic" element={<MouseMagic/>} />
        <Route path="/USB" element={<USB/>} />
        <Route path="/HeadPhone" element={<HeadPhone/>} />
        <Route path="/Lenovo" element={<Lenovo/>} />
        <Route path="/Iphone" element={<Iphone/>} />
        <Route path="/Mouse" element={<Mouse/>} />
        <Route path='/Member' element={<Member/>}/>
        <Route path='/Payment' element={<Payment/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
