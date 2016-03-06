import User from './../models/user';

export function findUserById(req, res, next) {
    User.findById(req.params.id)
        .select('firstName lastName userTel userName roles')
        .exec()
        .then(u => res.status(200).json(u))
        .catch(err => next(err));
};

export function create(req, res, next) {
    let user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userTel: req.body.userTel,
        userName: req.body.userName
    });
    user.hashPassword(req.body.pwd);
    user.save()
        .then(u => res.status(201).json(u))
        .catch(err => next(err));
};
