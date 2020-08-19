import * as express from 'express';
import { charge } from '../../utils/stripe';

const router = express.Router();


// Post
router.post('/', async (req, res) => {
    const newCharge = req.body;


    try {
        const result = await charge(newCharge.token.id, newCharge.amount);
        res.json(result);

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Post route failed for donate.', error });
    }

});



export default router;