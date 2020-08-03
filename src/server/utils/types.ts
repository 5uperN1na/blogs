
import { Request } from 'express';

export interface IPayload {
    authorid: number;
}

export interface ReqUser extends Request {
    user: {
        id: number;
    }
}