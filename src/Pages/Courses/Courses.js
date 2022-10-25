import React from 'react';
import { Col, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Asides from '../Sheared/Sides/Asides';
import TopicsCard from '../Sheared/TopicsCard/TopicsCard';

const Courses = () => {
    const courses = useLoaderData();


    return (
        <Container>
            <Asides></Asides>
            <div>
                All {courses.length}
            </div>
        </Container>
    );
};

export default Courses;