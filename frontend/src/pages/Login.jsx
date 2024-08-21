import React from 'react'
import "./Login.css";
import {Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HeaderLogin from '../components/HeaderLogin';

const Login = () => {
    return (
        <div className='login-container'>
            <HeaderLogin/>
            <div className='login-wrapper'>
            <div className="login-form">
                <Form>
                    <Form.Group className="mb-3" >
                        <Form.Label>Enter Mobile Number:</Form.Label>
                        <Form.Control size="lg" type="number" placeholder="XXXX XX XX XX"/>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Enter Password:</Form.Label>
                        <Form.Control size="lg" type="password" id='password' placeholder="......."/>
                    </Form.Group>
                    <Button type="submit" className='w-100' variant="primary" >Login</Button>
                </Form>
                <div>
                    <Link to={'/reset-password'} className='link-primary text-center d-block pt-2'>
                    Forgot password?
                    </Link>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Login