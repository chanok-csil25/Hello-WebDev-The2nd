import ProductDetail from '../components/ProductDetail'
import Book from '../assets/product/Note.png'

function Note() {
  return (
    <ProductDetail img={Book} productname={"MODIE NOTE"} price={"PRICE = 55 THB"} description={["-ขนาด  : 8.5 x 10.5 cm", "-จำนวน 16 แผ่น/36 หน้า", "เนื้อกระดาษเรียบเนียน แบบมีเส้น"]} />
  )
}

export default Note