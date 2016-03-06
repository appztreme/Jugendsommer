import expect from 'expect';
import request from 'supertest';
import requestSession from 'supertest-session';
import app from './../app';
import * as uuid from './helper/uuid';

const curYear = new Date().getFullYear();

function checkEventToBeEqual(res, ev) {
    expect(res.body.hasOwnProperty('name')).toBe(true);
    expect(res.body.name).toEqual(ev.name);
    expect(res.body.hasOwnProperty('description')).toBe(true);
    expect(res.body.description).toEqual(ev.description);
    expect(res.body.hasOwnProperty('startDate')).toBe(true);
    expect(new Date(res.body.startDate)).toEqual(ev.startDate);
    expect(res.body.hasOwnProperty('endDate')).toBe(true);
    expect(new Date(res.body.endDate)).toEqual(ev.endDate);
    expect(res.body.hasOwnProperty('visibleFrom')).toBe(true);
    expect(new Date(res.body.visibleFrom)).toEqual(ev.visibleFrom);
    expect(res.body.hasOwnProperty('visibleTo')).toBe(true);
    expect(new Date(res.body.visibleTo)).toEqual(ev.visibleTo);
    expect(res.body.hasOwnProperty('info')).toBe(true);
    expect(res.body.info).toEqual(ev.info);
}

describe('Event', () => {
    describe('GET /events', () => {
        it('should return 200 response', done => {
            request(app).get('/api/events')
                .end((err, res) => {
                    expect(err).toNotExist();
                    expect(res).toExist();
                    expect(res.status).toEqual(200);
                    done();
                });
        });
        it('should return collection of 2 entities', done => {
            request(app).get('/api/events')
                .end((err, res) => {
                    expect(res.body).toExist;
                    expect(res.body).toBeA('array');
                    expect(res.body.length).toEqual(2);
                    done();
                });
        });
    });
    describe('GET /events/:id', () => {
        it('should be an object with correct key and value pairs', done => {
            let expectedEvent = {
                name: 'event1',
                description: 'description event1',
                startDate: new Date(curYear,11,1),
                endDate: new Date(curYear,12,1),
                visibleFrom: new Date(curYear,4,1),
                visibleTo: new Date(curYear,10,1),
                info: 'info for event1'
            };
            request(app).get(`/api/events/${uuid.get(1)}`)
                .end((err, res) => {
                    expect(err).toNotExist();
                    expect(res).toExist();
                    expect(res.status).toEqual(200);
                    checkEventToBeEqual(res, expectedEvent);
                    done();
                });
        });
    });
    describe('POST /events/', () => {
        const newEvent = {
            name:'eventPost',
            description:'description eventPost',
            startDate: new Date(curYear,4,3),
            endDate: new Date(curYear,7,15),
            visibleFrom: new Date(curYear,1,1),
            visibleTo: new Date(curYear,11,1),
            info: 'info for eventPost'
        };
        describe('authorized request', () => {
            let testSession = requestSession(app);
            before('login', done => {
                testSession.post('/api/login')
                    .send({username: 'admin', password: 'admin'})
                    .end((err, res) => {
                        expect(res.status).toEqual(200);
                        done();
                    });
            });
            it('should insert new entry in db', done => {

                testSession.post('/api/events')
                    .send(newEvent)
                    .end((err, res) => {
                        expect(err).toNotExist();
                        expect(res).toExist();
                        expect(res.status).toEqual(201);
                        checkEventToBeEqual(res, newEvent);
                        done();
                    });
            });
        });
        describe('unauthorized request', () => {
            let testSession = requestSession(app);
            before('login', done => {
                testSession.post('/api/login')
                    .send({username: 'user', password: 'user'})
                    .end((err, res) => {
                        expect(res.status).toEqual(200);
                        done();
                    });
            });
            it('should be refused', done => {

                testSession.post('/api/events')
                    .send(newEvent)
                    .end((err, res) => {
                        expect(err).toNotExist();
                        expect(res).toExist();
                        expect(res.status).toEqual(403);
                        done();
                    });
            });
        });
        describe('unauthenticated request', () => {
            it('should be refused', done => {
                request(app).post('/api/events')
                    .send(newEvent)
                    .end((err, res) => {
                        expect(err).toNotExist();
                        expect(res).toExist();
                        expect(res.status).toEqual(403);
                        done();
                    });
            });
        });
    });
    describe('PUT /events/', () => {
        const changedEvent = {
            _id: '111111111111111111111119',
            name:'changed event',
            description:'description changed event',
            startDate: new Date(curYear,5,12),
            endDate: new Date(curYear,9,21),
            visibleFrom: new Date(curYear,2,11),
            visibleTo: new Date(curYear,12,3),
            info: 'info for changed event'
        };
        describe('authorized request', () => {
            let testSession = requestSession(app);
            before('login', done => {
                testSession.post('/api/login')
                    .send({username: 'admin', password: 'admin'})
                    .end((err, res) => {
                        expect(res.status).toEqual(200);
                        done();
                    });
                });
            it('should update existing entry', done => {
                testSession.put('/api/events')
                    .send(changedEvent)
                    .end((err, res) => {
                        expect(err).toNotExist();
                        expect(res).toExist();
                        expect(res.status).toEqual(201);
                        checkEventToBeEqual(res, changedEvent);
                        done();
                    });
            });
        });
        describe('unauthorized request', () => {
            let testSession = requestSession(app);
            before('login', done => {
                testSession.post('/api/login')
                    .send({username: 'user', password: 'user'})
                    .end((err, res) => {
                        expect(res.status).toEqual(200);
                        done();
                    });
                });
            it('should be refused', done => {
                testSession.put('/api/events')
                    .send(changedEvent)
                    .end((err, res) => {
                        expect(err).toNotExist();
                        expect(res).toExist();
                        expect(res.status).toEqual(403);
                        done();
                    });
            });
        });
        describe('unauthenticated request', () => {
            it('should be refused', done => {
                request(app).put('/api/events')
                    .send(changedEvent)
                    .end((err, res) => {
                        expect(err).toNotExist();
                        expect(res).toExist();
                        expect(res.status).toEqual(403);
                        done();
                    });
            });
        });
    });
});
