import ProductDetail from '../components/ProductDetail'
import Tablet from '../assets/product/Lenova.png'
function Lenovo() {
    return (
        <ProductDetail img={Tablet} productname={"TAB 101 MODIEREST MODIE "} price={"PRICE = 3990 THB"} description={["-รุ่น: แท็บเล็ต Android", "-Ram : 16GB", "-Rom : 512GB", "ซีพียู: 10-Core", "ขนาดหน้าจอ: หน้าจอ  10 นิ้ว"]} />
    )
}

export default Lenovo