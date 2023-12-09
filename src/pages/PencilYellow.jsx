import ProductDetail from '../components/ProductDetail'
import PencilY from '../assets/product/pencilYellow.png'

function PencilYellow() {
  return (
    <>
      <ProductDetail img={PencilY} productname={"Pencil MODIE"} price={"PRICE = 12 THB"} description={["-ไส้ดินสอ คุณภาพสูงสามารถลบออกได้ง่าย", "-มียางลบที่ปลายด้าน สามารถเอาไปลบได้เลย", "-ความเข้มดินสอเป็น HB"]} />
    </>
  )
}

export default PencilYellow