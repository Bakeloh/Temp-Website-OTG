import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/nav/NavBar';
import Footer from './components/nav/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactUs from './pages/ContactUs';
import PageNotFound from './pages/PageNotFound';
import OrderPage from './pages/OrderPage';
import {BsFillTelephoneOutboundFill, BsWhatsapp, BsFacebook} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import ProgramsPage from './pages/ProgramsPage';
import TeamPage from './pages/TeamPage';
import LivestockPage from './pages/LivestockPage';


function App() {
  function openModal(){
    const openBtn = document.getElementById('open-btn')
    openBtn.click()
  }
  return (
    <div className="App">
      <NavBar openModal={openModal}/>
      <div>
        <label htmlFor='talk-modal' id='open-btn' className='hidden'>open modal</label>
        <input type="checkbox" id="talk-modal" className="modal-toggle"/>
        <div className="modal">
          <div className="modal-box relative">
            <label htmlFor="talk-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="text-lg font-bold mb-5">Talk To Us On:</h3>
            <div className='flex justify-between py-6 mb-5'>
              <div className='border p-5 rounded-box border-accent'>
                <BsFacebook className='h-7 w-7 md:h-12 md:w-12'/>
              </div>
              <div className='border p-5 rounded-box border-accent'>
                <BsFillTelephoneOutboundFill className='h-7 w-7 md:h-11 md:w-11'/>
              </div>
              <div className='border p-5 rounded-box border-accent'>
                <BsWhatsapp className='h-7 w-7 md:h-12 md:w-12'/>
              </div>
              <div className='border p-5 rounded-box border-accent'>
                <MdEmail className='h-7 w-7 md:h-12 md:w-12'/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/order' element={<OrderPage/>}/>
        <Route path='/livestock' element={<LivestockPage/>} />
        <Route path='/team' element={<TeamPage/>} />
        <Route path='/programs' element={<ProgramsPage/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
