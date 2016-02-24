import passport from 'passport';

let authenticate = function (req, res, next) {
    passport.authenticate('local', (err, user) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            res.send({success: false});
        }
        req.logIn(user, function (error) {
            if (error) {
                return next(error);
            }
            res.send({success: true, user: user});
        });
    })(req, res, next);
};

let requiresApiLogin = function (req, res, next) {
    if (!req.isAuthenticated()) {
        res.status(403);
        res.end();
    } else {
        next();
    }
};

let requiresRole = function (role) {
    return function (req, res, next) {
        if (!req.isAuthenticated() || req.user.roles.indexOf(role) === -1) {
            res.status(403);
            res.end();
        } else {
            next();
        }
    };
};

export default {
    authenticate: authenticate,
    requiresRole: requiresRole,
    requiresApiLogin: requiresApiLogin
};
