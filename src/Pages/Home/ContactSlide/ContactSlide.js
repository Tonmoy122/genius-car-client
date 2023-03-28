import React from 'react';
import { FaBusinessTime, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
const ContactSlide = () => {
    return (
        <div className='bg-black pt-14 pb-6 mb-10 rounded drop-shadow-lg'>
            <div className='flex justify-around text-white mb-14'>
                <div className='flex'>
                    <div className='mr-4 pt-2'>
                        <FaBusinessTime className='w-10 h-10'></FaBusinessTime>
                    </div>
                    <div>
                        <p>We are open Monday - Friday</p>
                        <h2 className='font-bold text-2xl'> 7:00 am - 9:00 pm</h2>
                    </div>
                </div>
                <div className='flex'>
                    <div className='mr-4 pt-2'>
                        <FaPhoneAlt className='w-10 h-10'></FaPhoneAlt>
                    </div>
                    <div>
                        <p>Have a question.??</p>
                        <h2 className='font-bold text-2xl'>+2546 251 2658</h2>
                    </div>
                </div>
                <div className='flex'>
                    <div className='mr-4 pt-2'>
                        <FaLocationArrow className='w-10 h-10'></FaLocationArrow>
                    </div>
                    <div>
                        <p>Need a repair? our address</p>
                        <h2 className='font-bold text-2xl'>Liza Street, New York</h2>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ContactSlide;