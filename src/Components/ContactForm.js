import React from 'react'
import './ContactStyles.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ContactForm() {
    return (
        <>
            <div className="ContactContainer">
                <Form>
                    <Form.Group className="fgroup" controlId="formBasicEmail">
                        <Form.Label className='label'>Name:</Form.Label>
                        <Form.Control className='input' type="text" placeholder="Enter Your Name" />

                    </Form.Group>

                    <Form.Group className="fgroup" controlId="formBasicPassword">
                        <Form.Label className='label'>Email:</Form.Label>
                        <Form.Control className='input' type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group className="checkbox" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className='label'>Leave a message:</Form.Label>
                        <Form.Control
                            as="textarea"
                            style={{ height: '100px' }}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" className='btn'>
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default ContactForm