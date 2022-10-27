import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Asides from '../Sides/Asides';
import Card from 'react-bootstrap/Card';
import Pdf from "react-to-pdf";
import { Button } from 'react-bootstrap';

const ref = React.createRef();

const options = {
    orientation: 'landscape',
    unit: 'in',
    width: 100,
    height: 100,
    margin: 10,
    padding: 10,

};


const Topic = () => {
    const topic = useLoaderData()
    const { title, details, image_url, author } = topic;

    return (

        <div >
            <div>
                <Pdf targetRef={ref} filename="Course-Details.pdf" options={options}>
                    {({ toPdf }) => <Button onClick={toPdf} className='mb-4 p-2 ps-5 pe-5 fs-4 fw-semibold' variant="outline-success" >Download Course Details</Button>}
                </Pdf>
            </div>

            <div ref={ref} className='d-lg-flex '>
                <div className='col-lg-4'>
                    <Asides></Asides>
                </div>
                <div className='col-lg-8 container'>
                    <div>
                        <Card>
                            <Card.Img variant="top" src={image_url} />
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>
                                    {details}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div >
                        < h1 className='perfect'> Instructor info</h1>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={author.img} />
                            <Card.Body>
                                <Card.Title>{author.name}</Card.Title>
                                <Card.Text>
                                    {author.qualification}
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Topic;