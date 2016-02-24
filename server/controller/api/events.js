import Event from './../../models/event';
import auth from './../../util/authentication';
import { Router } from 'express';
let router = Router();

router.get('/', (req, res, next) => {
    Event.find()
        .sort({startDate: 1})
        .exec()
        .then(evs => res.json(evs))
        .catch(err => next(err));
});

router.get('/:eventId', (req, res, next) => {
    Event.findById(req.params.eventId)
        .then(ev => res.json(ev))
        .catch(err => next(err));
});

router.post('/', auth.requiresRole('admin'), (req, res, next) => {
    let ev = new Event({
        name: req.body.name,
        description: req.body.description,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        visibleFrom: req.body.visibleFrom,
        visibleTo: req.body.visibleTo,
        info: req.body.info
    });
    ev.save()
        .then(res.status(201).json(ev))
        .catch(err => next(err));
});

router.put('/', auth.requiresRole('admin'), (req, res, next) => {
    Event.findById(req.body._id)
        .then(ev => {
            if (!ev) {
                return next(new Error(`Kein Event im System mit id ${req.body._id}`));
            }
            ev.name = req.body.name;
            ev.description = req.body.description;
            ev.startDate = req.body.startDate;
            ev.endDate = req.body.endDate;
            ev.visibleFrom = req.body.visibleFrom;
            ev.visibleTo = req.body.visibleTo;
            ev.info = req.body.info;

            ev.save()
                .then(eve => res.json(201, eve))
                .catch(err => next(err));
        })
        .catch(err => next(err));
});

export default router;
