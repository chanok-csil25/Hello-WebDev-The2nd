import ProductDetail from '../components/ProductDetail'
import SilverPencil from '../assets/product/Pencildrop.png'

function SilverPencile() {
  return (
    <>
      <ProductDetail img={SilverPencil} productname={"SILVER PENCILL MODIE"} price={"PRICE = 69 THB"} description={["-ปากกาลูกลื่น แห้งไว เร็วกว่าปากกาลูกลื่นทั่วไปถึง 9 เท่า", "-มีคลิปหนีบ เพิ่มความสะดวกในการพกพา สำหรับแบบกด", "-หมึกชนิดพิเศษเเละน้ำหมึกผสมน้ำมันความหนืดต่ำ เขียนลื่นและแห้งไว"]} />
    </>
  )
}

export default SilverPencile