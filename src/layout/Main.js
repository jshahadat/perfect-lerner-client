import React from 'react';
import { Col, Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Sheared/Header/Header';
import Home from '../Pages/Home/Home/Home'
import Asides from "../Pages/Sheared/Sides/Asides";

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