import * as express from 'express';
import blogsRouter from './blogs';
import blogtagsRouter from './blogtags';
import tagsRouter from './tags';
import authorsRouter from './authors';
 

const router = express.Router();

router.use('/blogs', blogsRouter);
router.use('/blogtags', blogtagsRouter);
router.use('/authors', authorsRouter);
router.use('/tags', tagsRouter);

 

export default router;