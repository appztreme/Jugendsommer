import * as ActivitiesCtrl from './../controller/activityCtrl';
import auth from './../util/authentication';
import { Router } from 'express';
let router = Router();

router.get('/', ActivitiesCtrl.findActivities);

router.get('/:activityId', ActivitiesCtrl.findActivityById);

router.post('/', auth.requiresRole('admin'), ActivitiesCtrl.create);

router.put('/', auth.requiresRole('admin'), ActivitiesCtrl.update);

export default router;
