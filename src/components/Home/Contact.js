import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



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
        <section className='contact-img' id='contact'>
            <div className="container py-5">
                <div className="d-flex row py-5 align-items-center">
                    <h5 className='mt-5 pb-3' style={{ color: '#98b3f2' }}>Contact  with  me</h5>
                    <div className="col-sm-12">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className='mb-2'>
                                <input type="text" name="user_name" className='input-style' placeholder='Enter Your Name' required />
                            </div>
                            <div className='mb-2'>
                                <input type="email" name="user_email" className='input-style' placeholder='Enter Your Email' required />
                            </div >
                            <div className='mb-2'>
                                <textarea rows="6" name="message" className='input-style' placeholder='Write message here..' required />
                            </div>
                            <input type='submit' value="Send" className='btn-style' />

                        </form>
                        <ToastContainer></ToastContainer>
                    </div>
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </section>
    );
};

export default Contact;