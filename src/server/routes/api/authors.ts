import * as express from 'express';
import * as passport from 'passport';
import db from '../../db';

const router = express.Router();

//GET /api/lulz
// router.get('/', passport.authenticate('jwt'), (req, res) => {
//     console.log(req.user);
//     res.json({msg: "I like to mess with people for the lulz!"});

// });



//GET
router.get('/', async (req, res)=> {
    try {
        const users = await db.authors.all();
        res.json(users);
    } catch (error){
        console.log(error);
        res.status(500).json({msg: 'code bad.', error});
    }
});



// Post
router.post('/', async (req, res) => {
    const authorDTO = req.body;
    try {

      const { insertId } = await db.authors.insert(authorDTO);
      res.json ({msg: 'registered author', id: insertId});
    

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "code broke", error });
    }

});










export default router;