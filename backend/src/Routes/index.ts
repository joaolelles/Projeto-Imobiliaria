import { Router } from 'express';
import routerClient from './routerClient';
import routerProperty from './routerProperty';

const router = Router();
router.use('/', routerClient)
router.use('/prop', routerProperty)

export default router;