import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import HeaderLogin from '../components/HeaderLogin'

const ResetPassword = () => {

    const [viewSendOTPForm, setViewSendOTPForm] = useState(true);
    const [viewSubmitOTPForm, setViewSubmitOTPForm] = useState(false);
    
    const sendOTP = (e)=>{
        e.preventDefault();
        setViewSendOTPForm(false);
        setViewSubmitOTPForm(true);
    }

    const resentOTP= (e)=>{
        e.preventDefault();
        setViewSendOTPForm(true);
        setViewSubmitOTPForm(false);
    }

  return (
    <div className='login-container'>
            <HeaderLogin/>
            <div className='login-wrapper'>
            <div className="login-form">
                {viewSendOTPForm && (
                    <Form onSubmit={sendOTP} id='sendOTPForm'>
                    <Form.Group className="mb-3" >
                        <Form.Label>Enter Mobile Number:</Form.Label>
                        <Form.Control size="lg" type="number" placeholder="XXXX XX XX XX"/>
                    </Form.Group>
                    
                    <Button type="submit" className='w-100' variant="primary" >Send OTP</Button>
                </Form>
                )}
                
                {viewSubmitOTPForm && (
                    <>
                        <Form onSubmit={sendOTP} id='submitOTPForm'>
                    <Form.Group className="mb-3" >
                        <Form.Label>Enter OTP:</Form.Label>
                        <Form.Control size="lg" type="number" placeholder="XXXX"/>
                    </Form.Group>
                    
                    <Button type="submit" className='w-100' variant="primary" >Submit OTP</Button>
                </Form>
                <Form onSubmit={resentOTP}>
                    <Button type="submit" className='w-100 mt-2' variant="primary" >Resend OTP</Button>
                </Form>
                    </>
                )}
                
                <div>
                    <Link to={'/'} className='link-primary text-center d-block pt-2'>
                    Back to login
                    </Link>
                </div>
            </div>
        </div>
        </div>
  )
}

export default ResetPassword