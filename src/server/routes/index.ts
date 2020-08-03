import * as express from 'express';
// import blogsRouter from './api/blogs';
// import blogtagsRouter from './api/blogtags';
// import tagsRouter from './tags';
// import authorsRouter from './api/authors';
import apiRouter from './api';
import authRouter from './auth';
 

const router = express.Router();

// router.use('/blogs', blogsRouter);
// router.use('/blogtags', blogtagsRouter);
// router.use('/authors', authorsRouter);
// router.use('/tags', tagsRouter);

router.use('/api', apiRouter);
router.use('/auth', authRouter);

 

export default router;