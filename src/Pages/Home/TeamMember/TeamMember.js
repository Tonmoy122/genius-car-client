import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import team1 from '../../../assets/images/team/1.jpg'
import team2 from '../../../assets/images/team/2.jpg'
import team3 from '../../../assets/images/team/3.jpg'
const TeamMember = () => {
    return (
        <div className='mt-20 mb-20'>
            <div className='text-center'>
                <p className='text-xl font-bold text-orange-600 mb-4'>Team</p>
                <h2 className='text-4xl font-semibold mb-4'>Meet Our Team</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
            </div>

            <div className='lg:flex md:flex justify-around mt-4 '>
                <div className="card ease-in-out duration-300 hover:w-96  w-80 bg-base-100 shadow-xl hover:bg-slate-200">
                    <figure className="px-10 pt-10">
                        <img src={team1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p>Engine Expert</p>
                        <div className="card-actions">
                            <FaFacebook></FaFacebook>
                            <FaInstagram></FaInstagram>
                            <FaTwitter></FaTwitter>
                            <FaLinkedin></FaLinkedin>
                        </div>
                    </div>
                </div>
                <div className="card ease-in-out duration-300 hover:w-96 w-80  bg-base-100 shadow-xl hover:bg-slate-200 ">
                    <figure className="px-10 pt-10">
                        <img src={team2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p>Engine Expert</p>
                        <div className="card-actions">
                            <FaFacebook></FaFacebook>
                            <FaInstagram></FaInstagram>
                            <FaTwitter></FaTwitter>
                            <FaLinkedin></FaLinkedin>
                        </div>
                    </div>
                </div>
                <div className="card ease-in-out duration-300 hover:w-96  w-80 bg-base-100 shadow-xl hover:bg-slate-200">
                    <figure className="px-10 pt-10">
                        <img src={team3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p>Engine Expert</p>
                        <div className="card-actions">
                            <FaFacebook></FaFacebook>
                            <FaInstagram></FaInstagram>
                            <FaTwitter></FaTwitter>
                            <FaLinkedin></FaLinkedin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamMember;