import React from 'react';
import { Col, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Asides from '../Sheared/Sides/Asides';
import TopicsCard from '../Sheared/TopicsCard/TopicsCard';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);


    return (
        <Container>
            <Asides></Asides>
            <div>
                {
                    courses.map(topics => <TopicsCard
                        key={topics._id}
                        topics={topics}
                    ></TopicsCard>)
                }
            </div>
        </Container>
    );
};

export default Courses;