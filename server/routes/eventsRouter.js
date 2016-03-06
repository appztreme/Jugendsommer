import * as EventCtrl from './../controller/eventCtrl';
import auth from './../util/authentication';
import { Router } from 'express';
let router = Router();

router.get('/', EventCtrl.findEventsFromCurrenYear);

router.get('/:eventId', EventCtrl.findEventById);

router.post('/', auth.requiresRole('admin'), EventCtrl.create);

router.put('/', auth.requiresRole('admin'), EventCtrl.update);

export default router;
