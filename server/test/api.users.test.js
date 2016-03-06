import expect from 'expect';
import request from 'supertest';
import app from './../app';
import * as uuid from './helper/uuid';

function checkUserToBeEqual(res, user) {
    expect(res.body.hasOwnProperty('firstName')).toBe(true);
    expect(res.body.firstName).toEqual(user.firstName);
    expect(res.body.hasOwnProperty('lastName')).toBe(true);
    expect(res.body.lastName).toEqual(user.lastName);
    expect(res.body.hasOwnProperty('userTel')).toBe(true);
    expect(res.body.userTel).toEqual(user.userTel);
    expect(res.body.hasOwnProperty('userName')).toBe(true);
    expect(res.body.userName).toEqual(user.userName);
    expect(res.body.hasOwnProperty('roles')).toBe(true);
};

describe('User', () => {
    describe('GET /users/:id', () => {
        it('should return an object with correct key and value pairs', done => {
            let expectedUser = {
                firstName: 'adminFirst',
                lastName: 'adminLast',
                userTel: '+98 7654 321',
                userName: 'admin',
                roles: ['admin']
            };
            request(app).get(`/api/users/${uuid.get(10002)}`)
                .end((err, res) => {
                    expect(err).toNotExist();
                    expect(res).toExist();
                    expect(res.status).toEqual(200);
                    checkUserToBeEqual(res, expectedUser);
                    expect(res.body.hasOwnProperty('salt')).toNotExist();
                    expect(res.body.hasOwnProperty('hashedPassword')).toNotExist();
                    done();
                });
        });
    });
    describe('POST /users', () => {
        it('should create new user in db', done => {
            let newUser = {
                firstName: 'postFirst',
                lastName: 'postLast',
                userTel: '123 / 987',
                userName: 'post',
                pwd: 'post'
            };
            request(app).post('/api/users')
                .send(newUser)
                .end((err, res) => {
                    expect(err).toNotExist();
                    expect(res).toExist();
                    expect(res.status).toEqual(201);
                    checkUserToBeEqual(res, newUser);
                    done();
                });
        });
    });
});
