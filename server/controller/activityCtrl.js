import Activity from './../models/activity';

export function findActivitiesByEventId(req, res, next) {
    Activity.find()
        .where('eventId').equals(req.query.eventId)
        .sort('startDate')
        .exec()
        .then(activities => res.json(activities))
        .catch(err => next(err));
};

export function findActivitySiblingsByEventId(req, res, next) {
    Activity.findById(req.query.activityId)
        .exec()
        .then(activity => {
            Activity.find()
                .where('eventId').equal(activity.eventId)
                .sort('startDate')
                .exec()
                .then(acts => res.json(acts))
                .catch(err => next(err));
        })
        .catch(err => next(err));
};

export function findActivityById(req, res, next) {
    Activity.findById(req.query.activityId)
        .exec()
        .then(activity => res.json(activity))
        .catch(err => next(err));
};

export function create(req, res, next) {
    let activity = new Activity({
        name: req.body.name,
        description: req.body.description,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        eventId: req.body.eventId,
        maxParticipants: req.body.maxParticipants,
        queueSize: req.body.queueSize
    });
    activity.save()
        .then(act => res.status(201).json(act);)
        .catch(err => next(err));
};

export function update(req, res, next) {
    Activity.findById(req.body._id)
        .exec()
        .then(activity => {
            if(!activity)
                return next(new Error(`Keine Activity im System mit id ${req.body._id}`));
            activity.name = req.body.name;
            activity.description = req.body.description;
            activity.startDate = req.body.startDate;
            activity.endDate = req.body.endDate;
            activity.maxParticipants = req.body.maxParticipants;
            activity.queueSize = req.body.queueSize;

            activity.save()
                .then(a => res.status(201).json(a);)
                .catch(err => next(err));
        })
        .catch(err => next(err));
};
