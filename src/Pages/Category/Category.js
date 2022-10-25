import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Asides from '../Sheared/Sides/Asides';

const Category = () => {
    const topicsCourse = useLoaderData()
    return (
        <div>
            <div>
                <Asides></Asides>
            </div>
            <h3>Category {topicsCourse.length}</h3>
        </div>
    );
};

export default Category;