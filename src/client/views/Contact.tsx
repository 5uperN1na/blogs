//@ts-nocheck

import * as React from 'react';
import { useState } from 'react';
import Navbar from '../component/Navbar';
import apiService from '../utils/api-service'
import { ImportsNotUsedAsValues } from 'typescript';


const Contact: React.FC<ContactProps> = (props) => {

    const [email, setEmail] = useState<string>('');
    const [subject, setSubject] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const contact = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        await apiService('/api/contact', 'POST', { email: email, subject: subject, message: message });
        console.log('test');

    };


    return (

        <div className="col-md-7">

            <Navbar />

            <form className="form-group p-3 border-primary rounded-lg">

                <label>Email</label>
                <input value={email} onChange={e => setEmail(e.target.value)} type="text" className="form-control my-1" />


                <label>Subject</label>
                <input value={subject} onChange={e => setSubject(e.target.value)} type="text" className="form-control my-1" />


                <label>Message</label>
                <input value={message} onChange={e => setMessage(e.target.value)} type="text" className="form-control my-1" />


                <button onClick={contact} className="btn btn-primary btn-block w-50 mx-auto mt-3"> Submit</button>

            </form>
        </div>

    );
};

interface ContactProps { }

export default Contact;