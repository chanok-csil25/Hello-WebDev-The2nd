import ProductDetail from '../components/ProductDetail'
import iphone from '../assets/product/Iphone.png'
function Iphone() {
    return (
        <ProductDetail img={iphone} productname={" 13 MODIE "} price={"PRICE = 20,400 THB"} description={["-สินค้ารับประกัน 1 ปี ", "-จอภาพ Super Retina XDR ขนาด 6.1 นิ้ว2", "-กล้องหน้า TrueDepth ความละเอียด 12MP", "-ชิป A15 Bionic พร้อม GPU แบบ 4-core ระบบเซลลูลาร์ 5G ที่เร็วสุดแรง1"]} />
    )
}

export default Iphone