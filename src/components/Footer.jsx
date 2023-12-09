import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Facebook from '../assets/Icon/icon-facebook.png'
import Instagram from '../assets/Icon/icon-instagram.png'
import Twitter from '../assets/Icon/icon-twitter.png'

function Footer() {
    return (
        <>
            <div className=' bg-white h-[20rem] flex justify-center items-center'>
                <form action="/input" className=' flex flex-row'>
                    <div className='box-border flex justify-center items-center border-b'>
                        <input type="text" placeholder='Email address' className=' outline-none ml-3 mb-2 text-4xl font-itim'/>
                    </div>
                    <div className=' bg-sky'>
                        <button className=' font-itim font-semibold py-2 px-5 text-4xl'><Link to='/'>SUBSCRIBE</Link></button>
                    </div>
                </form>
            </div>
            <div className=' bg-sky '>
                <div className=' flex  justify-between'>
                    <div className=' flex flex-row gap-[26px] ml-[108px] mt-[34px] mb-[30px]'>
                        <Link to='/'>
                            <button>
                                <h5 className=' font-itim text-4xl text-center font-normal'>Order</h5>
                            </button>
                        </Link>
                        <Link to='/Member'>
                            <butoon>
                                <h5 className=' font-itim text-4xl text-center font-normal w-[284px] h-[45px    ]'>Contact us</h5>
                            </butoon>
                        </Link>
                    </div>
                    <div className=' flex flex-row gap-10 py-7 mr-7'>
                        <img src={Facebook} alt="" />
                        <img src={Instagram} alt="" />
                        <img src={Twitter} alt="" />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer