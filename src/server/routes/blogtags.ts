
import * as express from 'express';
import db from '../db';


const router = express.Router();


router.get('/:id?', async (req, res) => {
    const id = Number(req.params.id);
    try {
        if (id) {
            //make the one note an object by using [chirp]
            const [blogtag] = await db.blogtags.oneBlogId(id);
            res.json(blogtag);

        } else {
            const blogtags = await db.blogs.all();
            res.json(blogtags);
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Not working", error });
    }

});

export default router;