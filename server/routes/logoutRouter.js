import { Router } from 'express';
let router = Router();

router.post('/', (req, res, next) =>
  res.send({success: true, user: { firstName: "Florian", lastName: "Edelmaier"}})
);

export default router;
