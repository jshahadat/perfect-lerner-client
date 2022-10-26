import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Asides from '../Sheared/Sides/Asides';
import TopicsCard from '../Sheared/TopicsCard/TopicsCard';

const Category = () => {
    const coursesTopic = useLoaderData();


    return (



        <div className='d-flex container'>

            <div className='col-4'>
                <Asides></Asides>
            </div>
            <div className='col-8'>
                <h2>This is Category has news: {coursesTopic.length}</h2>
                {
                    coursesTopic.map(topics => <TopicsCard
                        key={topics._id}
                        topics={topics}
                    ></TopicsCard>)
                }
            </div>
        </div>
    );
};

export default Category;