import React from 'react';
import { FaHandHoldingHeart, FaHandshake, FaStethoscope, FaStopwatch20, FaUser } from 'react-icons/fa';

const CoreFeatures = () => {
    return (
        <div className='mt-20 mb-20'>
            <div className='text-center'>
                <p className='text-xl font-bold text-orange-600 mb-4'>Core Features</p>
                <h2 className='text-4xl font-semibold mb-4'>Why Choose Us</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
            </div>

            <div className='lg:flex md:flex justify-around mt-4 '>

                <div className='justify-center hover:bg-orange-500 p-4 rounded'>
                    <div ><FaUser className='w-14 h-12'></FaUser></div>
                    <p className='font-semibold'>Expert Team</p>
                </div>


                <div className='bg-orange-400 p-2 hover:bg-orange-500 rounded'>
                    <div><FaStopwatch20 className='w-14 h-12'></FaStopwatch20></div>
                    <p className='font-semibold'>Timely Delivery</p>
                </div>
                <div className='items-center text-center hover:bg-orange-500 p-4 rounded'>
                    <div><FaHandHoldingHeart className='w-14 h-12'></FaHandHoldingHeart></div>
                    <p className='font-semibold'>24/7 Support</p>
                </div>
                <div className='items-center text-center hover:bg-orange-500 p-4 rounded'>
                    <div><FaStethoscope className='w-14 h-12'></FaStethoscope></div>
                    <p className='font-semibold'>Best Equipment</p>
                </div>
                <div className='items-center text-center hover:bg-orange-500 p-4 rounded'>
                    <div><FaHandshake className='w-14 h-12'></FaHandshake></div>
                    <p className='font-semibold'>100% Guranty</p>
                </div>
            </div>
        </div>
    );
};

export default CoreFeatures;