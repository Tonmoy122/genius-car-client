import React, { useEffect, useState } from 'react';

const Products = () => {

    // const [products, setProducts] = useState([]);
    // useEffect(()=>{
    //     fetch('')
    // },[])

    return (
        <div className='mt-20 mb-20'>
            <div className='text-center'>
                <p className='text-xl font-bold text-orange-600 mb-4'>Popular Products</p>
                <h2 className='text-4xl font-semibold mb-4'> Browse Our Products</h2>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='lg:flex md:flex justify-around mt-4'>
                <div className="card w-96 bg-base-100 shadow-xl mt-4">
                    <figure><img src="https://previews.123rf.com/images/annyart/annyart1602/annyart160200006/51896857-llantas-de-regalo-con-una-cinta-ref-envuelta-y-el-arco-ilustraci%C3%B3n-3d-aislada-en-el-fondo-blanco.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Tires!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>


                <div className="card w-96 bg-base-100 shadow-xl mt-4">
                    <figure><img src="https://previews.123rf.com/images/annyart/annyart1602/annyart160200006/51896857-llantas-de-regalo-con-una-cinta-ref-envuelta-y-el-arco-ilustraci%C3%B3n-3d-aislada-en-el-fondo-blanco.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Tires!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Products;