import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            {/* left session */}
            <div >
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima porro, dolore illum consequuntur quam amet, provident voluptate omnis atque explicabo autem, minus quo voluptas eos maxime quod ipsum. Nisi sequi ullam eveniet nesciunt aspernatur iste et doloribus suscipit tempora dolorem!</p>
            </div>

            {/* center session */}
            <div>
                <p className='text-xl font-medium mb-5'>Company</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            {/* right session */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+1-212-456-7890</li>
                    <li>listyodwi062@gmail.com</li>
                </ul>
            </div>
        </div>

        {/* Copyright */}
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024 @Prescripto - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer