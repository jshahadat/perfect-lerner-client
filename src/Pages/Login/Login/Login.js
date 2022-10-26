import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {

    const [error, setError] = useState('');
    const { providerLogin, signIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation()

    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);


            })
            .catch(error => console.error(error))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })

    }




    return (
        // <div className='bg-gray'>
        //     <section className="vh-100 bg-gray">
        //         <div className="container py-5 h-100">
        //             <div className="row d-flex align-items-center justify-content-center h-100">
        //                 <div className="col-md-8 col-lg-7 col-xl-6">
        //                     <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
        //                         className="img-fluid" alt="Phone image" />
        //                 </div>
        //                 <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">

        //                     <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign In</p>



        //                     <Form onSubmit={handleSubmit}>
        //                         <Form.Group className="mb-3 br-gray" controlId="formBasicEmail">
        //                             <Form.Label>Email address</Form.Label>
        //                             <Form.Control name="email" type="email" placeholder="Enter email" required />

        //                         </Form.Group>

        //                         <Form.Group className="mb-3" controlId="formBasicPassword">
        //                             <Form.Label>Password</Form.Label>
        //                             <Form.Control name="password" type="password" placeholder="Password" required />
        //                         </Form.Group>

        //                         <Button variant="primary" type="submit">
        //                             Login
        //                         </Button>
        //                         <Form.Text className="text-danger">
        //                             {error}
        //                         </Form.Text>
        //                     </Form>
        //                     <p><small>New to this website? Please <Link to='/register'>Sign Up</Link></small></p>
        //                     <div >
        //                         <Button onClick={handleGoogleSignIn} variant="outline-primary" > Continue with Google</Button>
        //                         <Button variant="outline-dark">Continue with Github</Button>

        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </section >

        // </div >


















        <section className="vh-100  bg-gray" >
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black rounded" >
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign IN</p>

                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group className="mb-3 br-gray" controlId="formBasicEmail">
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control name="email" type="email" placeholder="Enter email" required />

                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control name="password" type="password" placeholder="Password" required />
                                            </Form.Group>



                                            <Button variant="primary" type="submit">
                                                Login
                                            </Button>
                                            <Form.Text className="text-danger">
                                                {error}
                                            </Form.Text>
                                            <p><small>New to this website? Please <Link to='/register'>Sign Up</Link></small></p>
                                        </Form>

                                        <div >
                                            <Button onClick={handleGoogleSignIn} variant="outline-primary" > Continue with Google</Button>
                                            <Button variant="outline-dark">Continue with Github</Button>

                                        </div>
                                    </div>


                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                            className="img-fluid" alt="Phone image" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



















    );
};

export default Login;