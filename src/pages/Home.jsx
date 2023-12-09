import React, { useState } from 'react'
import Banner1 from '../assets/Banners/Banner1.png'
import Banner2 from '../assets/Banners/Banner2.png'
import Banner3 from '../assets/Banners/Banner3.png'
import NextBTN from '../assets/Icon/next-bottom.png'
import BackBTN from '../assets/Icon/back-bottom.png'
import CircleBlack from '../assets/Icon/circle-black.png'
import CircleGray from '../assets/Icon/circle-gray.png'
import Thunder from '../assets/Icon/icon-thunder.png'
import ProductCard from '../components/productcard/ProductCard'
import pencily from '../assets/product/pencilYellow.png'
import pencildrop from '../assets/product/Pencildrop.png'
import earserModie from '../assets/product/Earser.png'
import ModieNote from '../assets/product/Note.png'
import LiqueModie from '../assets/product/Liquie.png'
import Ruler from '../assets/product/Ruler.png'
import iphone from '../assets/product/iphone.png'
import Lenova from '../assets/product/Lenova.png'
import Headphone from '../assets/product/Headphone.png'


import { Link } from 'react-router-dom'

const slideImage = [{Banner1},{Banner2},{Banner3}];
function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slideImage.length - 1 : currentIndex -1 ;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slideImage.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div className='flex justify-center'>
        <div className='bg-no-repeat bg-center mt-4' style={{backgroundImage:`url(${slideImage[currentIndex].Banner1}), url(${slideImage[currentIndex].Banner2}), url(${slideImage[currentIndex].Banner3})`,   width: `1234px`,height: `600px`}}>
          <div className='flex justify-between items-center px-5 w-[100%] h-[100%]'>
            <button onClick={prevSlide} className=' cursor-pointer'>
              <img src={BackBTN} alt="" /> 
            </button>
            <button onClick={nextSlide}>
              <img src={NextBTN} alt="" />
            </button>
          </div>
          <div className=' flex flex-row justify-center gap-5 top-[-40px] relative'>
            <img src={CircleBlack} alt="" />
            <img src={CircleGray} alt="" />
            <img src={CircleGray} alt="" />
          </div>        
        </div>
      </div>
      <div className=' w-[1234px] m-auto pt-[100px] flex flex-row pb-20'>
        <div className=' flex flex-row items-center font-itim text-[64px] rounded-2xl bg-red w-fit text-white px-3 py-2'>
          Flash<img src={Thunder} alt="" />Sales
        </div>
        <div className=' font-itim text-[48px] ml-8 pt-6 '>
          end at 07 : 03 : 48
        </div>
      </div>
      <div className={` border-solid w-[100%] py-10 gap-[5em] justify-center grid grid-cols-3 bg-gray`}>
        <ProductCard img={pencily} productname='Pencil Modie' price='12 THB' urlpath='/pencilyellow' />
        <ProductCard img={pencildrop} productname='SILVER PENCIL MODIE' price='69 THB' urlpath='/silverpencile' />
        <ProductCard img={Ruler} productname='ONE TWO MODIE' price='20 THB' urlpath='/Ruler' />
        <ProductCard img={Lenova} productname='TAB 101 MODIE' price='3990 THB' urlpath='/Lenovo' />
        <ProductCard img={iphone} productname='13 MODIE' price='20,400 THB' urlpath='/Iphone' />
        <ProductCard img={Headphone} productname='FOREST MODIE' price='220 THB' urlpath='/HeadPhone' />

      </div>
    </>
  )
}

export default Home 