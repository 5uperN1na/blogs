
// interface TemplateProps{}
// interface TemplateState {}

// export default Template;

//HOOK TEMPLATE

import * as React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import apiService from '../utils/api-service';

const Lulz: React.FC<LulzProps> = (props) => {
    const history = useHistory();

    useEffect(() => {

        apiService('/api/lulz')
        .then(lulz => console.log(lulz));
        // let token = localStorage.getItem('token');
        // if (!token) {
        //     history.push({ pathname: '/login', state: { msg: 'You must be logged in to view this page.'} });
        // } else {

        //     fetch ('/api/lulz', {
        //         headers: {
        //             'Authorization': 'Bearer ' + token
        //         }
        //     })
        //         .then(res => {
        //             if (res.ok) {
        //                 return res.json();
        //             }
        //         })
        //         .then(lulz => console.log(lulz));
        // }

    }, [])

    return (
        <main className="container">
            <section className="row justify-content-center mt-3">
                <div className="col-12">
                    <h1 className="display-1 text-center text-primary">Lulz  View</h1>
                </div>
            </section>

        </main>
    );
}

interface LulzProps { }

export default Lulz;