import expect from 'expect';
import request from 'supertest';
import app from './../app';

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
        // it('should return collection of 2 entities', done => {
        //     const eventRequest = request.agent();
        //     eventRequest.get(urlBuilder.add('events'))
        //         .end((err, res) => {
        //             expect(res.body).to.exist;
        //             expect(res.body).to.be.instanceof(Array);
        //             expect(res.body.length).to.equal(2);
        //             done();
        //         });
        //
        //     done();
        // });
    });
    // describe.skip('GET /events/:id', () => {
    //     it('should be an object with correct key and value pairs', done => {
    //         eventRequest.get(`http://localhost:2000/api/events/${uuidHelper.get(1)}`)
    //             .end((err, res) => {
    //                 expect(err).not.to.exist;
    //                 expect(res).to.exist;
    //                 expect(res.status).to.equal(200);
    //                 expect(res.body).to.have.property('name');
    //                 expect(res.body.name).to.equal('event1');
    //                 expect(res.body).to.have.property('description');
    //                 expect(res.body.description).to.equal('description event1');
    //                 expect(res.body).to.have.property('startDate');
    //                 expect(new Date(res.body.startDate)).to.equalDate(new Date(2015,11,1));
    //                 expect(res.body).to.have.property('endDate');
    //                 expect(new Date(res.body.endDate)).to.equalDate(new Date(2015,12,1));
    //                 expect(res.body).to.have.property('visibleFrom');
    //                 expect(new Date(res.body.visibleFrom)).to.equalDate(new Date(2015,10,1));
    //                 expect(res.body).to.have.property('visibleTo');
    //                 expect(new Date(res.body.visibleTo)).to.equalDate(new Date(2016,10,1));
    //                 expect(res.body).to.have.property('info');
    //                 expect(res.body.info).to.equal('info for event1');
    //             });
    //         done();
    //     });
    // });
});
