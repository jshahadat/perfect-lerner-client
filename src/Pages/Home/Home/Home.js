import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Picture from '../../../assets/logo/home-logo.jpg'

const Home = () => {
    return (
        <div className='bg-dark '>
            <h1 className='text-center text-white fw-bold mb-5'>
                “The Road to Success is Always Under Construction”</h1>
            <Container className='d-lg-flex '>
                <div className='col-lg-6 '>
                    <img src={Picture} alt="" className='w-100' />
                </div>
                <div className='col-lg-6'>
                    <h1 className='text-center text-white fw-bold '><span className='learn'>Learn</span> civil engineering</h1>
                    <ul className='text-white'>
                        <li>A civil engineer helps to design and build public works infrastructure including roads, bridges, canals, dams, airports, sewerage systems, pipelines, buildings, and railways.</li>
                        <li>Beyond the study of structural engineering books, today most civil engineers work in offices designing structural plans that can withstand changes in our environment including earthquakes and hurricanes.</li>
                        <li>Civil engineering courses cover a wide variety of civil engineering subjects</li>
                        <li>With engineering programs online, you can register and learn more about civil engineering today.</li>
                    </ul>

                    <Link to='/courses'>   <Button className='ms-5 mt-4 p-2 ps-5 pe-5 fs-4 fw-semibold color ' variant="success" >Contenue Course</Button>
                    </Link>
                </div>

            </Container>
        </div>
    );
};

export default Home;