import db from './../db';
import mongoose from 'mongoose';
import Activity from './activity';

const RegistrationSchema = db.Schema({
    firstNameParent: { type: String, required: true },
    lastNameParent: { type: String, required: true },
    phoneNumberParent: { type: String, required: true },
    emailParent: { type: String, required: true },
    firstNameChild: { type: String, required: true },
    lastNameChild: { type: String, required: true },
    birthdayChild: { type: Date, required: true },
    schoolChild: { type: String, required: true },
    healthChild: { type: String, required: false },
    nameContact1: { type: String, required: false },
    telContact1: { type: String, required: false },
    nameContact2: { type: String, required: false },
    telContact2: { type: String, required: false },
    activityId: { type: mongoose.Schema.Types.ObjectId, ref: 'Activity', required: true },
    prevActivityId: { type: mongoose.Schema.Types.ObjectId, ref: 'Activity', required: false },
    registrationDate: { type: Date, required: false, default: Date.now },
    isPaymentDone: { type: Boolean, required: true, default: false },
    isEmailNotified: { type: Boolean, required: true, default: false },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false }
});

RegistrationSchema.pre('save', next => {
    let reg = this;
    if(!reg.isNew) {
        Registration.findById(this._id, (err, orig) => {
            reg.prevActivityId = orig.activityId;
            next();
        });
    } else {
        next();
    }
});

RegistrationSchema.post('save', reg => {
    if(!reg.activityId.equals(reg.prevActivityId)) {
        if(reg.prevActivityId != undefined) {
            Activity.findById(reg.prevActivityId)
                .exec()
                .then((err, oldActivity) => {
                    oldActivity.curParticipants -= 1;
                    oldActivity.save();
                    Activity.findById(req.activityId)
                        .exec()
                        .then((err, activity) => {
                            activity.curParticipants += 1;
                            activity.save();
                        });
                });
        } else {
            Activity.findById(reg.activityId)
                .exec()
                .then((err, activity) => {
                    activity.curParticipants += 1;
                    activity.save();
                });
        }
    }
});

let Registration = db.model('Registration', RegistrationSchema);

export default Registration;
