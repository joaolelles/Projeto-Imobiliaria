import { Router } from 'express';
import routerClient from './routerClient';

const router = Router();
router.use('/', routerClient)

export default router;