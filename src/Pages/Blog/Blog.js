import React from 'react';
import { Card } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='bg-dark pb-5'>
            <h1 className='text-center text-white fw-bold'>Some interview Question</h1>
            <Card className="mb-5">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <Card.Title>
                        <h3> what is cors?</h3>
                    </Card.Title>

                </Card.Header>
                <Card.Body>

                    <Card.Text>
                        <h5>   A technology called cross-origin resource sharing (CORS) enables limited resources on a web page to be requested from a domain other than the one that originally delivered the initial resource.</h5>



                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="mb-5">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <Card.Title>
                        <h3> Why are you using firebase? What other options do you have to implement authentication?</h3>
                    </Card.Title>

                </Card.Header>
                <Card.Body>

                    <Card.Text>

                        <h5>To authenticate users for your project, Firebase Authentication offers ready-made UI frameworks, simple SDKs, and backend services. It supports federated identity providers like Google, Facebook, and Twitter, as well as passwords, phone numbers, and other methods.</h5>

                        <h5>Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</h5>

                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="mb-5">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <Card.Title>
                        <h3> How does the private route work?</h3>
                    </Card.Title>

                </Card.Header>
                <Card.Body>

                    <Card.Text>
                        <h5>The only differences between the private route component and the public route are the redirect URL and the authenticate condition. The user may only access the authenticated routes if they are authenticated, otherwise else they will be sent to the login page. If he has been verified</h5>
                    </Card.Text>

                </Card.Body>
            </Card>
            <Card className="mb-5">
                <Card.Header className='d-flex justify-content-between align-items-center'>

                    <Card.Title>
                        <h3> What is Node? How does Node work?</h3>
                    </Card.Title>

                </Card.Header>
                <Card.Body>

                    <Card.Text>
                        <h5>It serves as a backend service for applications that use javascript on the server. Javascript is utilized in this fashion for both the front end and the back end. </h5>
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Blog;