import { Link } from 'react-router-dom'
import Logo from '../assets/Icon/Logo.png'
import Iconp from '../assets/Icon/icon-person.png'
import Iconc from '../assets/Icon/icon-cart.png'
import Iconh from '../assets/Icon/icon-hamberger-bar.png'
import Icons from '../assets/Icon/sub-hamberger-bar.png'
import Login from './Login'
import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [setLogo] = useState({Iconh})
  const [isOpenLogin, setIsOpenLogin] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setLogo(isOpen ? {Iconh} : {Icons})
  }
  const toggleLogin = () => {
    setIsOpenLogin(!isOpenLogin);
  }
  return (
    <>
    <div className=' bg-sky sticky top-0 z-50'>
      <div className=' flex justify-between px-8 py-5'>
        <div><Link to='/'><img src={Logo} alt="" /></Link></div>
        <div className=''>
          <ul className=' flex gap-7 pt-5 pr-3'>
            <li>
              <button onClick={toggleLogin}>
                <img src={Iconp} alt="" width='71px' height='71px' />
              </button>
            </li>
            <li><img src={Iconc} alt="" width='86px' height='84px' /></li>
            <li className=' pt-4 '>
              <button onClick={toggleMenu}>
                {!isOpen && <img src={Iconh} alt="" width='58px' height='41px' />}
                {isOpen && <img src={Icons} alt="" width='58px' height='41px' />}
              </button>
            </li>
          </ul>
          <div className=' rounded-b-2xl bg-white absolute mt-8 '>
                {isOpen && (
                  <div className=' rounded-lg w-[283px] '>
                    <ul>
                      <li className=' border-b p-4 font-itim font-bold text-4xl'><h1><Link to='/stationary'>Stationery</Link></h1></li>
                      <li className=' border-b p-4 font-itim font-bold text-4xl'><h1><Link to='/mobile'>Media Devices</Link></h1></li>
                      <li className=' p-4 font-itim font-bold text-4xl'><h1><Link to='/Member'>About us</Link></h1></li>
                    </ul>
                  </div>
                )}
          </div>
        </div>
      </div>
    </div>
    {isOpenLogin && (
      <Login />
    )}
  
    </>
    
  )
}

export default Navbar