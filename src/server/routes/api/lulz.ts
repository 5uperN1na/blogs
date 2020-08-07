import { Router } from 'express';
import * as passport from 'passport';
import { ReqUser } from '../../utils/types';

const router = Router();

//GET /api/lulz
router.get('/', passport.authenticate('jwt'), (req, res) => {
     console.log(req.user);
     res.json({msg: "I like to mess with people for the lulz!"});

});

//POST /api/lulz
router.post('/', passport.authenticate('jwt'), async (req: ReqUser, res) => {
     const newBlog = req.body;
     const authorid = req.user.id;

     try {

     } catch (error) {
          console.log(error);
          res.status(500).json({msg: 'code broke', error})
          
     }
});

export default router;