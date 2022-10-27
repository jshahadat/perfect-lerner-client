import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';

const TopicsCard = ({ topics }) => {

    const { _id, title, details, image_url, author } = topics;

    return (

        <Card className="mb-5 shadow-lg">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex'>
                    <Image
                        roundedCircle
                        className='me-2'
                        src={author?.img}
                        style={{ height: '60px' }}
                    ></Image>
                    <div>
                        <p className='mb-0'>Instructor :</p>
                        <p >{author?.name}</p>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title><h3>{title}</h3></Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    <h6>
                        {
                            details.length > 200 ?
                                <>{details.slice(0, 200) + '...'} </>
                                :
                                details
                        }
                    </h6>
                </Card.Text>
                <Link to={`/premium/${_id}`}> <Button variant="primary">Get premium access</Button></Link>
            </Card.Body>
        </Card>











        // <div className=''>
        //     <Card style={{ width: '18rem' }}>
        //         <Card.Img variant="top" src={image_url} />
        //         <Card.Body>
        //             <Card.Title>{title}</Card.Title>
        //             <Card.Text>
        //                 {
        //                     details.length > 200 ?
        //                         <p>{details.slice(0, 200) + '....'}</p>
        //                         :
        //                         <p>{details}</p>
        //                 }
        //             </Card.Text>
        //             <Link to={`/topic/${_id}`}> <Button variant="primary">Get premium access</Button></Link>
        //         </Card.Body>
        //     </Card>

        // </div >
    );
};

export default TopicsCard;