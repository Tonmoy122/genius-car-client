import React from 'react';
import image1 from '../../../assets/images/banner/1.jpg';
import image2 from '../../../assets/images/banner/2.jpg';
import image3 from '../../../assets/images/banner/3.jpg';
import image4 from '../../../assets/images/banner/4.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className="carousel w-full mb-10">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='banner-img'>
                    <img src={image1} alt='' className="w-full rounded-xl" />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-12 top-1/4">
                    <h1 className='text-6xl font-bold text-white'>
                        Affordable <br />
                        Price for car <br />
                        Servicing
                    </h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-12 top-2/4 w-2/5">
                    <p className='text-white text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In magnam illo at, dolor odio ut doloribus sunt. <br />
                        Similique delectus exercitationem soluta explicabo facere corrupti molestiae, amet praesentium eligendi eius. </p>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-12 top-3/4 w-2/5">
                    <button className="btn btn-warning mr-5">Warning</button>
                    <button className="btn btn-outline btn-warning ">Button</button>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className='banner-img'>
                    <img src={image2} alt='' className="w-full" />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-12 top-1/4">
                    <h1 className='text-6xl font-bold text-white'>
                        Affordable <br />
                        Price for car <br />
                        Servicing
                    </h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-12 top-2/4 w-2/5">
                    <p className='text-white text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In magnam illo at, dolor odio ut doloribus sunt. <br />
                        Similique delectus exercitationem soluta explicabo facere corrupti molestiae, amet praesentium eligendi eius. </p>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-12 top-3/4 w-2/5">
                    <button className="btn btn-warning mr-5">Warning</button>
                    <button className="btn btn-outline btn-warning ">Button</button>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className='banner-img'>
                    <img src={image3} alt='' className="w-full" />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-12 top-1/4">
                    <h1 className='text-6xl font-bold text-white'>
                        Affordable <br />
                        Price for car <br />
                        Servicing
                    </h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-12 top-2/4 w-2/5">
                    <p className='text-white text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In magnam illo at, dolor odio ut doloribus sunt. <br />
                        Similique delectus exercitationem soluta explicabo facere corrupti molestiae, amet praesentium eligendi eius. </p>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-12 top-3/4 w-2/5">
                    <button className="btn btn-warning mr-5">Warning</button>
                    <button className="btn btn-outline btn-warning ">Button</button>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <div className='banner-img'>
                    <img src={image4} alt='' className="w-full" />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-12 top-1/4">
                    <h1 className='text-6xl font-bold text-white'>
                        Affordable <br />
                        Price for car <br />
                        Servicing
                    </h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-12 top-2/4 w-2/5">
                    <p className='text-white text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In magnam illo at, dolor odio ut doloribus sunt. <br />
                        Similique delectus exercitationem soluta explicabo facere corrupti molestiae, amet praesentium eligendi eius. </p>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-12 top-3/4 w-2/5">
                    <button className="btn btn-warning mr-5">Warning</button>
                    <button className="btn btn-outline btn-warning ">Button</button>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>


        </div>
    );
};

export default Banner;