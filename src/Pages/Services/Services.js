import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className='text-center'>
                <p className='text-2xl font-bold text-orange-600 mb-4'>Services</p>
                <h2 className='text-5xl font-semibold mb-4'> Our Service Area</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Nisi eaque commodi, veritatis molestiae provident facilis repellat minus error sequi! Reprehenderit?</p>
            </div>

            <div className='mt-12 mb-12  grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='flex justify-center mb-12'>
                <button className="btn btn-outline btn-secondary">More Services</button>
            </div>
        </div>
    );
};

export default Services;