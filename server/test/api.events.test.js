import expect from 'expect';
import request from 'supertest';
import app from './../app';
import * as uuid from './helper/uuid';

const curYear = new Date().getFullYear();

describe('Event', () => {
    describe('GET /events', () => {
        it('should return 200 response', done => {
            request(app).get('/api/events')
                .end((err, res) => {
                    expect(err).toNotExist;
                    expect(res).toExist;
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
            request(app).get(`/api/events/${uuid.get(1)}`)
                .end((err, res) => {
                    expect(err).toNotExist;
                    expect(res).toExist;
                    expect(res.status).toEqual(200);
                    expect(res.body.hasOwnProperty('name')).toBe(true);
                    expect(res.body.name).toEqual('event1');
                    expect(res.body.hasOwnProperty('description')).toBe(true);
                    expect(res.body.description).toEqual('description event1');
                    expect(res.body.hasOwnProperty('startDate')).toBe(true);
                    expect(new Date(res.body.startDate)).toEqual(new Date(curYear,11,1));
                    expect(res.body.hasOwnProperty('endDate')).toBe(true);
                    expect(new Date(res.body.endDate)).toEqual(new Date(curYear,12,1));
                    expect(res.body.hasOwnProperty('visibleFrom')).toBe(true);
                    expect(new Date(res.body.visibleFrom)).toEqual(new Date(curYear,4,1));
                    expect(res.body.hasOwnProperty('visibleTo')).toBe(true);
                    expect(new Date(res.body.visibleTo)).toEqual(new Date(curYear,10,1));
                    expect(res.body.hasOwnProperty('info')).toBe(true);
                    expect(res.body.info).toEqual('info for event1');
                    done();
                });
        });
    });
    describe('POST /events/', () => {
        var cookies;
        before('login', done => {
            request(app).post('/api/login')
                .field('username', 'user')
                .field('password', 'user')
                .end((err, res) => {
                    expect(res.status).toEqual(200);
                    //cookies = res.headers['set-cookie'].pop().split(';')[0];
                    cookies = res.headers['set-cookie'];
                    console.log(cookies);
                    done();
                });
        });
        it('should insert new entry in db', done => {
            const newEvent = {
                name:'eventPost',
                description:'description eventPost',
                startDate: new Date(curYear,4,3),
                endDate: new Date(curYear,7,15),
                visibleFrom: new Date(curYear,1,1),
                visibleTo: new Date(curYear,11,1),
                info: 'info for eventPost'
            };
            console.log(cookies);
            request(app).post('/api/events')
                .send(newEvent)
                .set('Cookie', cookies)
                .end((err, res) => {
                    expect(err).toNotExist;
                    expect(res).toExist;
                    expect(res.status).toEqual(200);
                    expect(res.body.hasOwnProperty('name')).toBe(true);
                    expect(res.body.name).toEqual('eventPost');
                    done();
                });
        });
    });
});
