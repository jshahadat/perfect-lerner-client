import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Asides from '../Sides/Asides';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Topic = () => {
    const topic = useLoaderData()
    const { title, details, image_url, category_id } = topic;
    return (
        <div>
            <div>
                <Asides></Asides>
            </div>
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {details}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

            </div>
        </div>
    );
};

export default Topic;