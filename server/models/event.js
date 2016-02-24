import db from './../db';

const EventSchema = new db.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    visibleFrom: { type: Date, required: false, default: Date.now },
    visibleTo: { type: Date, required: false, default: Date.now },
    info: { type: String, required: true }
});

let Event = db.model('Event', EventSchema);

export default Event;
