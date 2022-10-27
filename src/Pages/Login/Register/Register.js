import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LogOut from '../../../assets/logOut/logOut.webp'

const Register = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext)
    const [accepted, setAccepted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })



    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .catch(error => console.error(error))
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }

    return (
        <div className='bg-dark pb-5'>
            <section className="vh-100  bg-gray mb-5 " >
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black rounded" >
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                                            <Form onSubmit={handleSubmit} className='className="mx-1 mx-md-4"'>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Your Name</Form.Label>
                                                    <Form.Control name="name" type="text" placeholder="Your Name" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Photo URL</Form.Label>
                                                    <Form.Control name="photoURL" type="text" placeholder="Phot URL" />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Email address</Form.Label>
                                                    <Form.Control name="email" type="email" placeholder="Enter email" required />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                    <Form.Label>Password</Form.Label>
                                                    <Form.Control name="password" type="password" placeholder="Password" required />
                                                </Form.Group>



                                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                    <Form.Check
                                                        type="checkbox"
                                                        onClick={handleAccepted}
                                                        label={<>Accept <Link to="/terms">Terms and conditions</Link></>} />
                                                </Form.Group>



                                                <Button variant="primary" type="submit" disabled={!accepted}>
                                                    Register
                                                </Button>
                                                <Form.Text className="text-danger">
                                                    {error}

                                                </Form.Text>
                                            </Form>

                                            <p><small>Already have an account? Please <Link to='/login'>Log In</Link></small></p>
                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src={LogOut} alt="" className="img-fluid" />



                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;