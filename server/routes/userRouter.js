import * as UserCtrl from './../controller/userCtrl';
import { Router } from 'express';
let router = Router();

router.get('/:id', UserCtrl.findUserById);

router.post('/', UserCtrl.create);

export default router;
