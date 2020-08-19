import * as express from 'express';
import { sendEmail } from '../../utils/mailgun';

const router = express.Router();


// Post
router.post('/', async (req, res) => {
    const emailDTO = req.body;

    try {
        const result = await sendEmail('pauladzuck@hotmail.com', emailDTO.email, emailDTO.subject, emailDTO.message);
        res.json(result);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Post route failed for contact form.', error });
    }


});



export default router;