import icon from '../assets/Icon/icon-truck.png'
import buybutton from '../assets/Icon/buy-bottom.png'
import '../styles/animation.css'
import { Link } from 'react-router-dom'
import Favbtn from '../assets/Icon/fav-bottom.png'
import FavRedbtn from '../assets/Icon/red-fav bottom.png'
import { useState } from 'react'

function ProductDetail({ img, productname, price, description }) {
    const details = description.map((item) => {
        return (
            <>
                <div className='flex'>
                    <span className='mr-3'></span>
                    <span className="" key={item}>{item}</span>
                </div>
                <br></br></>
        )

    })
    const [isOpenFavDesc, setIsOpenFavDesc] = useState(false);

    const toggleFavDesc = () => {
        setIsOpenFavDesc(!isOpenFavDesc);
    }
    return (
        <>
            <div className=' flex justify-center px-8 mt-[50px]'>
                <div className=' bg-white flex-col flex-1 justify-start pl-24 pb-10'>
                    <div className={`text-[48px]  font-itim`}>
                        <h1>{productname}</h1>
                    </div>
                    <div className={` text-[40px] mt-10 font-Gymno`}>
                        <p>รายละเอียด</p>
                    </div>
                    <div className=' mt-8 text-[22px] '>
                        <div className=' flex flex-row '>
                            <ul className=' list-disc font-Gymno text-black opacity-60 pb-10'>
                                {details}
                            </ul>
                        </div>
                    </div>
                    <div className='flex '>
                        <div className='mt-10 flex-1 border-b-2 '>
                            <img src={icon} width="40" />
                        </div>
                        <div className=' ml-[-400px]  mt-10 flex-1 w-10 mb-10 '>
                            <span className='text-[22px] font-Gymno '>การจัดส่ง : ส่งฟรี</span>

                        </div>
                    </div>

                    <div className=' font-itim text-[28px] mt-8 mb-8'>
                        {price}
                    </div>
                    <div>
                        <button><Link to='/Payment'><img src={buybutton} alt="sdsd" width={180} height={60} /></Link></button>
                    </div>
                </div>
                <div className={`Box-right  bg-cream flex flex-col justify-center items-center  `}>
                    <button onClick={toggleFavDesc}>
                        <div className=' relative left-[270px] bottom-[180px]'>
                        {!isOpenFavDesc && <img src={Favbtn} alt="" width={37.5} height={35} />}
                        {isOpenFavDesc && <img src={FavRedbtn} width={37.5} height={35}/>}
                        </div>
                    </button>
                    <div className={'mx-16 adjsut-scale w-[600px] h-[330px] flex items-center justify-center'}><img src={img } alt="product"  /></div>
                </div>
            </div>

        </>
    )
}

export default ProductDetail