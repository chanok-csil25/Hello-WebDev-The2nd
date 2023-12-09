import React from "react";
import Correct from "../assets/Icon/icon-check.png";
import { Link } from 'react-router-dom'

function Payment() {
  return (
    <>
      <div className="bg-cream w-[100%] h-[1000px] font-Gymno ">
        <div className="flex justify-between items-center pt-10">
          <div className="h-[1px] w-[22%] bg-black  mt-7"></div>
          <div className=" text-[64px] Itim-64 mt-5">
            <p>ทางเราได้รับออเดอร์ของคุณเเล้ว</p>
          </div>
          <div className="h-[1px] w-[22%] bg-black flex mt-7"></div>
        </div>

        <div className=" mt-28 bg-white relative  mx-[20rem] drop-shadow-2xl rounded-[30px]">
          <div className=" flex justify-center items-center relative -top-20 mb-[-40px]">
            <img src={Correct} alt=""  className=" adjsut-scale"/>
          </div>
          <div className="text-center ">
            <p>
              <span className="text-[48px] ">ขอบคุณที่ซื้อสินค้าของเรา</span>
            </p>
            <p>
              <span className=" text-black  opacity-50 text-[40px]">
                คุณจะได้รับสินค้าภายใน ไม่เกิน 4-7 วัน
              </span>
            </p>
          </div>
          <div className="mt-10 text-center">
            <Link to='/'>
              <button
                type="submit"
                className=" rounded-[50px] bg-darkgreen text-white py-50 px-[48px] text-[48px] font-Gymno mb-8 hover:bg-cream hover:text-green hover:border-2 hover:duration-150 hover:font-medium"
              >
                ยืนยัน
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
