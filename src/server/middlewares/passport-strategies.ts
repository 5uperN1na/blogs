import * as passport from 'passport';
import * as jwtStrategy from 'passport-jwt';
import * as PassportLocal from 'passport-local';
import config from '../config';
import type { IPayload } from '../utils/types';
import db from '../db';
import { comparePasswords } from '../utils/passwords';
import authors from '../db/queries/authors';

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use(new jwtStrategy.Strategy({
    jwtFromRequest: jwtStrategy.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.auth.secret
}, async (payload: IPayload, done) => {
    try {
        const [author] = await db.authors.find('id', payload.authorid);
        if (author && author.banned !== 'y') {
            delete author.password;
            done(null, author);
        } else {
            done(null, false);
        }
    } catch (error) {
        console.log(error);
        done(error);
    }

}));

passport.use(new PassportLocal.Strategy({
    usernameField: 'email'
}, async (email, password, done) => {
    try {
        const [author] = await db.authors.find('email', email);
        if (author && comparePasswords(password, author.password)) {
            delete author.password;
            done(null, author);

        } else {
            done(null, false);

        }

    } catch (error) {
        console.log(error);
        done(error);

    }

}));