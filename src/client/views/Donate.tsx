//@ts-nocheck

import * as React from 'react';
import { useState } from 'react';
import Navbar from '../component/Navbar';

import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import apiService  from '../utils/api-service';
import { ImportsNotUsedAsValues } from 'typescript';


const Donate: React.FC<DonateProps> = (props) => {

    const [name, setName] = useState<string>('');
    const [amount, setAmount] = useState<string>('');
    const stripe = useStripe();
    const elements = useElements();

    const donate = async (e: React.MouseEvent<HTMLButtonElement>) => {

    
        e.preventDefault();
        const result = await stripe.createToken(elements.getElement(CardElement), { name: name });
        const message = await apiService('/api/donate', 'POST', { token: result.token, amount: amount });

        console.log('test');
        console.log(result);
    };


    return (

        <div className="col-md-7">

            <Navbar />

            <form className="form-group p-3 border-primary rounded-lg">
               


                    <label >Name</label>
                    <input value={name} onChange={e => setName(e.target.value)} type="text" className="form-control my-1" />


                    <label>Amount</label>
                    <input value={amount} onChange={e => setAmount(e.target.value)} type="text" className="form-control my-1" />

                
                    <CardElement className="form-control" />

            

                    <button onClick={donate} className="btn btn-primary btn-block w-50 mx-auto mt-3"> Donate</button>
               

            </form>

        </div>

    );
};

interface DonateProps { }

export default Donate;