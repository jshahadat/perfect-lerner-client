import React from 'react';
import { Col, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Asides from '../Sheared/Sides/Asides';
import TopicsCard from '../Sheared/TopicsCard/TopicsCard';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);


    return (
        <Container className='d-flex'>

            <Col lg="4">

                <Asides></Asides>
            </Col>

            <Col lg="8">

                <div className=''>
                    {
                        courses.map(topics => <TopicsCard
                            key={topics._id}
                            topics={topics}
                        ></TopicsCard>)
                    }

                </div>
            </Col>
        </Container>
    );
};

export default Courses;