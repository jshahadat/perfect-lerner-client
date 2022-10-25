import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
                ctaegories.map(category => <p key={category.id}>
                    <Link to={`/category/${category.id}`}>{category.name}</Link>
                </p>)
            }

        </div>
    );
};

export default Asides;