import Event from './../models/event';

const curYear = new Date().getFullYear();
const startCurYear = new Date(curYear, 1, 1);

export function findEventsFromCurrenYear(req, res, next) {
    Event.find()
        .where('startDate').gte(startCurYear)
        .sort({startDate: 1})
        .exec()
        .then(evs => res.json(evs))
        .catch(err => next(err));
};

export function findEventById(req, res, next) {
    Event.findById(req.params.eventId)
        .exec()
        .then(ev => res.json(ev))
        .catch(err => next(err));
};

export function create(req, res, next) {
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
};

export function update(req, res, next) {
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
                .then(eve => res.status(201).json(eve))
                .catch(err => next(err));
        })
        .catch(err => next(err));
};
