import ProductDetail from '../components/ProductDetail'
import UsbCable from '../assets/product/USB.png'
function USB() {
    return (
        <ProductDetail img={ UsbCable} productname={"USB MODIE "} price={"PRICE = 49 THB"} description={["-สาย USB มีความยาว 2-8 เมตร", "-มีความทนทาน คุณภาพสัญญาณที่ยอดเยี่ยม"]} />
    )
}

export default USB