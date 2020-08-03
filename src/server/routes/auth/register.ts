import { Router } from 'express';
import { generateHash } from '../../utils/passwords';
import db from '../../db';
import { createToken } from '../../utils/tokens';

const router = Router();

//post auth
router.post('/', async (req, res) => {
    const newAuthor = req.body
    newAuthor.password = generateHash(newAuthor.password);
    try {

        
        const cannedResponse = await db.authors.insert(newAuthor);

        const token = createToken ({ authorid: cannedResponse.insertId});
        res.json(token);

    }catch (error) {
        console.log(error);
        res.status(500).json({msg: 'code bad', error});
    }

});

export default router;