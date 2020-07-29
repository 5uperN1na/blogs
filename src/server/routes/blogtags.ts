
import * as express from 'express';
import db from '../db';


const router = express.Router();


router.get('/:blogid', async (req, res) => {
const blogid = Number(req.params.blogid)
    try {

        const blogtags = await db.blogtags.oneBlogTag(blogid);
        res.json(blogtags);

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'code broke', error })
    }

});


    // router.get('/:blogid?', async (req, res) => {
    //     const blogid = Number(req.params.blogid);
    //     try {
    //         if (blogid) {
    //             //make the one note an object by using [chirp]
    //             const blogtag = await db.blogtags.oneBlogTag(blogid);
    //             res.json(blogtag);
    
    //         } else {
    //             const blogtags = await db.blogtags.allBlogTags();
    //             res.json(blogtags);
    //         }
    
    //     } catch (error) {
    //         console.log(error);
    //         res.status(500).json({ msg: "Not working", error });
    //     }
    
    // });



router.post('/', async (req, res) => {
    const blogtagDTO = req.body;
    try {

        await db.blogtags.insert(blogtagDTO.blogid, blogtagDTO.tagid);
        res.json({ msg: "blogtag created"});

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'code broke', error })
    }

})

export default router;