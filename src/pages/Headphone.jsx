import ProductDetail from '../components/ProductDetail'
import Head from '../assets/product/Headphone.png'

function Headphone() {
  return (
    <ProductDetail img={Head} productname={"USB FOREST MODIE "} price={"PRICE = 220 THB"} description={["-ตัดเสียงรบกวน", "-ความจุแบตเตอรี่หูฟัง 90mAh", "ระยะบลูทูธ ที่มีประสิทธิภาพ  10 เมตร"]} />
  )
}

export default Headphone
