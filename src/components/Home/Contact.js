import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img from '../../images/img.jpg';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hvsmeyu', 'template_0u2ll8o', form.current, 'uXOqf_EF4YDTAl7q_')
            .then((result) => {
                console.log(result.text);
                toast.success('Send message');
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                toast.error('Send can not message');
            });
    };

    return (
        <div className="container">
            <h5 className='text-center text-color mb-5'>CONTACT US</h5>
            <div className="d-flex row py-5 align-items-center">
                <div className="col-sm-12 col-md-6 col-lg-6  px-5 order-2 order-lg-1 order-md-1 ">
                    <img src={img} className="img-fluid border rounded-2 shadow-lg" alt="img" />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 px-5 mt-4 order-1 order-md-2 order-lg-2">
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="user_name" />
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <label>Message</label>
                        <textarea name="message" />
                        <input type="submit" value="Send" />
                    </form>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Contact;