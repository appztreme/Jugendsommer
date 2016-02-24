import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import User from './models/user';

let config = function () {
    passport.use('local', new LocalStrategy(
        (username, password, done) => {
            User.findOne({ userName: username })
                .exec()
                .then(user => {
                    if (user && user.authenticate(password)) {
                        return done(null, user);
                    }
                    return done(null, false);
                })
                .catch(err => done(err, null));
        }
    ));

    passport.serializeUser((user, done) => {
        if (user) {
            done(null, user._id);
        }
    });

    passport.deserializeUser((id, done) => {
        User.findOne({ _id: id })
            .exec()
            .then(user => {
                if (user) {
                    return done(null, user);
                }
                return done(null, false);
            })
            .catch(err => {
                return done(err, false);
            });
    });
};

config();
