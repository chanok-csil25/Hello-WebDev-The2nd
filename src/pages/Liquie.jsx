import ProductDetail from '../components/ProductDetail'
import Lq from '../assets/product/Liquie.png'

function Liquie() {
  return (
    <ProductDetail img={Lq} productname={"AT MODIE"} price={"PRICE = 80 THB"} description={["-เทปลบคำผิด 1 แผงมี 1 ชิ้น", "-เนื้อเทปเรียบสนิท ไม่หลุดร่อน", "-เทคโนโลยีเกลียวหมุนพิเศษ ใช้งานได้จนหมดม้วน"]} />
  )
}

export default Liquie