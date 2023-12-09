import ProductCard from '../components/productcard/ProductCard'
import MousePencily from '../assets/product/MousePencil.png'
import USB from '../assets/product/USB.png'
import Headphone from '../assets/product/Headphone.png'
import Lenovo from '../assets/product/Lenova.png'
import Iphone from '../assets/product/iphone.png'
import MouseUsb from '../assets/product/Mouse.png'
import { Link } from 'react-router-dom'
import ProductCardb from '../components/productcard/ProductCardb'

function Mobile() {
  return (
    <>
      <div className={` text-8xl font-semibold font-itim text-purple pl-60 mb-[-50px] pt-[80px]`} style={{ textShadow: '8px 3px 3px #FFC300' }}>Media Devices</div>
      <div className={`border-b-2 my-20 mx-60`}></div>
      <div className={` border-solid w-[100%] py-10 gap-[5em] justify-center grid grid-cols-3 bg-gray`}>
        <ProductCardb img={MousePencily} productname='MAGIC MODIE' price='799 THB' urlpath='/MouseMagic' />
        <ProductCardb img={USB} productname='USB MODIE' price='49 THB' urlpath='/USB' />
        <ProductCard img={Headphone} productname='FOREST MODIE' price='220 THB' urlpath='/HeadPhone' />
        <ProductCard img={Lenovo} productname='TAB 101 MODIE' price='3990 THB' urlpath='/Lenovo' />
        <ProductCard img={Iphone} productname='13 MODIE' price='20,400THB' urlpath='/Iphone' />
        <ProductCardb img={MouseUsb} productname='CHAT H1 MODIE' price='99 THB' urlpath='/Mouse' />
      </div>
    </>
  )
}

export default Mobile;