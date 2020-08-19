import * as dotenv from 'dotenv';

const envFound = dotenv.config();

if (!envFound) {
    throw new Error ('no .env file found.');

}

export default {
    mysql: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_SCHEMA,
    },
auth: {
    secret: process.env.JWT_SECRET

},

stripe: {
    key: process.env.STRIPE_SECRET
},

mailgun: {
    key: process.env.MAILGUN_SECRET,
    domain: process.env.MAILGUN_DOMAIN

}




}