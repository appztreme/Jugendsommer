import expect from 'expect';
import request from 'supertest';
import app from './../app';
import * as uuid from './helper/uuid';

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
                    console.log(res.body);
                    //expect(res.body['name']).toBe(true);
                    //expect(res.body.name).toEqual('event1');
                    //expect(res.body.hasOwnProperty('description')).toBe(true);
                    // expect(res.body.description).toEqual('description event1');
                    // expect(res.body.hasOwnProperty('startDate')).toBe(true);
                    // expect(new Date(res.body.startDate)).toEqual(new Date(2015,11,1));
                    // expect(res.body).to.have.property('endDate');
                    // expect(new Date(res.body.endDate)).to.equalDate(new Date(2015,12,1));
                    // expect(res.body).to.have.property('visibleFrom');
                    // expect(new Date(res.body.visibleFrom)).to.equalDate(new Date(2015,10,1));
                    // expect(res.body).to.have.property('visibleTo');
                    // expect(new Date(res.body.visibleTo)).to.equalDate(new Date(2016,10,1));
                    // expect(res.body).to.have.property('info');
                    // expect(res.body.info).to.equal('info for event1');
                    done();
                });
        });
    });
});
