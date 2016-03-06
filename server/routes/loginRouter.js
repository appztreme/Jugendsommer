import auth from './../util/authentication';
import { Router } from 'express';
let router = Router();

router.post('/', auth.authenticate);

export default router;
