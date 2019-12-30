const expect = require('chai').expect;
const app = require('../src/app');
const server = app.listen(3000);
const request = require("supertest").agent(server);

const HEALTH_CHECK_API = '/health/check';

describe('Express Server Test', () => {
    before(function (done) {
        done();
    });

    after(function (done) {
        server.close();
        done();
    });

    describe('Health check test', () => {
        it('it should GET checkhealth message', (done) => {
            request
                .get(HEALTH_CHECK_API)
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res) => {
                    expect(res.statusCode).to.equal(200);
                    done();
                });
        });
    });
});
