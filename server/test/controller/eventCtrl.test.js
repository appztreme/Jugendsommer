import expect from 'expect';
import proxyquire from 'proxyquire';
import * as EventCtrl from './../../controller/eventCtrl';

const proxy = proxyquire.noCallThru();
let eventStub = {
    find: expect.createSpy(),
    where: expect.createSpy(),
    gte: function() {},
    sort: function() {},
    save: function() {},
    exec: function() {}
};
let foo = proxy('./../../controller/eventCtrl', { './../models/event': eventStub});

describe('Event Controller', () => {
    it('should', () => {
        let req = {};
        let res = { json: function() {}};
        // EventCtrl.findEventsFromCurrenYear(req, res, next);
        expect(1).toBe(1);
    });
});
