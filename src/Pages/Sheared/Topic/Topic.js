import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Asides from '../Sides/Asides';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



// import { PDFDownloadLink } from "@react-pdf/renderer";
// import PDFFile from '../PDFFile/PDFFile';










const Topic = () => {
    const topic = useLoaderData()
    const { title, details, image_url, author } = topic;






    return (
        <div className='d-lg-flex '>
            {/* 
            <PDFDownloadLink document={<PDFFile />} filename="FORM">
                {({ loading }) => (loading ? <button>Loading Document...</button> : <button>Download</button>)}
            </PDFDownloadLink> */}


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
                <div>
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

    );
};

export default Topic;