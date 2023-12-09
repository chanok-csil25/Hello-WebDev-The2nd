
import '../../styles/animation.css'
import Favbtn from '../../assets/Icon/fav-bottom.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import FavRedbtn from '../../assets/Icon/red-fav bottom.png'
function ProductCard({ img, productname, price, urlpath }) {
  const [isOpenFavB, setIsOpenFavB] = useState(false);

  const toggleFavB = () => {
    setIsOpenFavB(!isOpenFavB);
  }
  return (
   <div className=' border-1 adjsut-scale'>
    <div className={`bg-cream h-[300px] flex flex-col justify-center p-9 mx-auto rounded-t-3xl w-[255px] `}>
        <button onClick={toggleFavB}>
          <div className=' relative bottom-16 left-40'>
            {!isOpenFavB && <img src={Favbtn} alt="" width={37.5} height={35} />}
            {isOpenFavB && <img src={FavRedbtn} width={37.5} height={35}/>}
          </div>
        </button>
          <div className=' h-[120px] flex items-center '>
            <Link to={urlpath}><button><img src={img} alt={img}  /></button></Link>
          </div>
      </div>
      <div className={`bg-white h-[130px] mx-auto rounded-b-3xl w-[255px]`}>
        
          <Link to={urlpath}>
            <button>
              <div className=' font-itim text-base pt-8 pl-6'>{productname}</div>
            </button>
          </Link>
        
        
          <div className=' font-itim text-base pb-8 pl-6'>Price: {price}</div>
      </div>
   </div> 
  )
}

export default ProductCard