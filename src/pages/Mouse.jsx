import ProductDetail from '../components/ProductDetail'
import mouse from '../assets/product/Mouse.png'

function Mouse() {
    return (
        <ProductDetail img={mouse} productname={" CHAT H1 MODIE  "} price={"PRICE = 99 THB"} description={["-ใช้วัสดุเคลือบคุณภาพดี", "-ปรับระดับได้ 500-1500 DPI", "-หน้ากว้าง จับได้เต็มมือ", "-รองรับ Window 98/2000/XP/7/8/10 และ Mac OS"]} />
    )
}

export default Mouse