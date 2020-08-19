import { Router } from 'express';
import lulzRouter from './lulz';
import authorsRouter from './authors';
import blogsRouter from './blogs';
import blogTagsRouter from './blogtags';
import tagsRouter from './tags';
import donateRouter from './donate';
import contactRouter from './contact';

const router = Router();

router.use('/lulz', lulzRouter);
router.use('/authors', authorsRouter);
router.use('/blogs', blogsRouter);
router.use('/blogtags', blogTagsRouter);
router.use('/tags', tagsRouter);
router.use('/donate', donateRouter);
router.use('/contact', contactRouter);

export default router;