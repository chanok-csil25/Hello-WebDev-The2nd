import ProductDetail from '../components/ProductDetail'
import ruler from '../assets/product/Ruler.png'


function Ruler() {
  return (
    <ProductDetail img={ruler} productname={"ONE TWO MODIE"} price={"PRICE = 20 THB"} description={["-จำนวน 1 อัน", "-แสดงหน่วยวัดเป็น 30 ซม. และ 12 นิ้ว", "-สเกลในการวัดชัดเจน เเละตัวเลขมาตราฐานตามหลักสากล"]} />
  )
}

export default Ruler