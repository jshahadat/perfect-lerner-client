import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const TopicsCard = ({ topics }) => {

    const { _id, title, details, image_url, } = topics;

    return (

        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {
                            details.length > 200 ?
                                <p>{details.slice(0, 200) + '....'}</p>
                                :
                                <p>{details}</p>
                        }
                    </Card.Text>
                    <Link to={`/topic/${_id}`}> <Button variant="primary">Get premium access</Button></Link>
                </Card.Body>
            </Card>

        </div >
    );
};

export default TopicsCard;