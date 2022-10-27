import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Aside.css'

const Asides = () => {
    const [ctaegories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/coures-category')
            .then(res => res.json())
            .then(data => setCategories(data))
    })
    return (
        <div>
            {
                ctaegories.map(category => <p key={category.id} className='border border-light rounded-pill shadow-lg p-4 text-center fs-5 fw-bold '>
                    <Link to={`/category/${category.id}`} className='text-decoration-none'>{category.name}</Link>
                </p>)
            }

        </div>
    );
};

export default Asides;