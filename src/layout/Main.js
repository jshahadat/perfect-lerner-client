import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Sheared/Header/Header';

const Main = () => {
    return (
        <div className='bg-dark pb-5'>
            <Header></Header>

            <Container className='pb-5'>
                <Outlet></Outlet>
            </Container>
        </div>
    );
};

export default Main;