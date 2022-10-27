import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Sheared/Header/Header';

const Main = () => {
    return (
        <div className='bg-dark'>
            <Header></Header>

            <Container>
                <Outlet></Outlet>
            </Container>
        </div>
    );
};

export default Main;