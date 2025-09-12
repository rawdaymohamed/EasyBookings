import request from 'supertest';
import app from '../app.js';

describe('GET /health', () => {
    it('returns 200 and ok:true', async () => {
        const res = await request(app).get('/api');
        expect(res.status).toBe(200);
        expect(res.body).toEqual({ message: 'Welcome to EasyBookings' });
    });
});