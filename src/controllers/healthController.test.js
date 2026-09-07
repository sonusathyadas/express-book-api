const request = require('supertest');
const app = require('../app');

describe('Health REST API endpoints', () => {
    describe('GET /api/health', () => {
        it('should return overall health status', async () => {
            const res = await request(app).get('/api/health');

            expect(res.status).toBe(200);
            expect(res.body.status).toBe('UP');
            expect(typeof res.body.uptime).toBe('number');
            expect(typeof res.body.timestamp).toBe('string');
        });
    });

    describe('GET /api/health/live', () => {
        it('should return liveness status', async () => {
            const res = await request(app).get('/api/health/live');

            expect(res.status).toBe(200);
            expect(res.body).toEqual({ status: 'UP' });
        });
    });

    describe('GET /api/health/ready', () => {
        it('should return readiness status', async () => {
            const res = await request(app).get('/api/health/ready');

            expect(res.status).toBe(200);
            expect(res.body).toEqual({ status: 'UP' });
        });
    });
});
