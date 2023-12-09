import ProductDetail from '../components/ProductDetail'
import Earser from '../assets/product/Earser.png'

function Eraser() {
    return (
        <>
            <ProductDetail img={Earser} productname={"ERASER MODIE"} price={"PRICE = 6 THB"} description={["-ใช้วัสดุพิเศษเนื้อแน่นจึงทำให้ลบง่าย กระดาษไม่เป็นขุย", "-สะอาดโดยไม่ต้องออกแรง ไม่ทิ้งคราบเปื้อนไว้ที่กระดาษ"]} />
        </>
    )
}

export default Eraser