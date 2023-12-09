import ProductDetail from '../components/ProductDetail'
import Mouse from '../assets/product/MousePencil.png'

function MouseMagic() {
  return (
    <ProductDetail img={Mouse} productname={"MAGIC MODIE "} price={"PRICE = 799 THB"} description={["-ขนาดหน้าจอ 13.3 นิ้ว สามารถวาดภาพลงบนหน้าจอได้เลย", "-แรงกดปากการองรับได้มากถึง 8192 ระดับ", "-ปากการุ่นใหม่ ไม่ต้องชาร์จ ไม่ใส่ถ่าน"]} />
  )
}

export default MouseMagic