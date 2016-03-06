import db from './../db';
import mongoose from 'mongoose';

const ActivitySchema = new db.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
    maxParticipants: {type: Number, required: true },
    curParticipants: { type: Number, required: true, default: 0 },
    queueSize: { type: Number, required: true }
});

let Activity = db.model('Activity', ActivitySchema);

export default Activity;
