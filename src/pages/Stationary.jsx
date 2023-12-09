import ProductCard from '../components/productcard/ProductCard'
import pencily from '../assets/product/pencilYellow.png'
import pencildrop from '../assets/product/Pencildrop.png'
import earserModie from '../assets/product/Earser.png'
import ModieNote from '../assets/product/Note.png'
import LiqueModie from '../assets/product/Liquie.png'
import Ruler from '../assets/product/Ruler.png'
import { Link } from 'react-router-dom'
import ProductCardb from '../components/productcard/ProductCardb'

function Stationary() {
  return (
    <>
      <div className={` text-8xl font-semibold font-itim text-purple pl-60 mb-[-50px] pt-[80px]` }style={{ textShadow: '8px 3px 3px #FFC300' }}>Stationery</div>
      <div className={`border-b-2 my-20 mx-60`}></div>
      <div className={` border-solid w-[100%] py-10 gap-[5em] justify-center grid grid-cols-3 bg-gray `}>
        <ProductCard img={pencily} productname='Pencil Modie' price='12 THB' urlpath='/pencilyellow' />
        <ProductCard img={pencildrop} productname='SILVER PENCIL MODIE' price='69 THB' urlpath='/silverpencile' />
        <ProductCardb img={earserModie} productname='ERASER MODIE' price='6 THB' urlpath='/eraser' />
        <ProductCardb img={ModieNote} productname='MODIE NOTE' price='55 THB' urlpath='/note' />
        <ProductCardb img={LiqueModie} productname='AT MODIE' price='80 THB' urlpath='/Liquie' />
        <ProductCard img={Ruler} productname='ONE TWO MODIE' price='20 THB' urlpath='/Ruler' />
      </div>
    </>
  )
}

export default Stationary