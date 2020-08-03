
import * as express from 'express';
import db from '../../db';


const router = express.Router();


router.get('/', async (req, res) => {
   
    try {
    
        const tags = await db.tags.all();
        res.json(tags);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Not working", error });
    }

});

// //Post
router.post('/', async (req, res) => {
    const tagDTO = req.body;
  
    try {

        const { insertId } = await db.tags.insert(tagDTO);
        res.json({msg: 'tag created', id: insertId});

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "code broke", error });
    }

});










export default router;