import request from 'supertest';
import express, { json } from 'express';
import authRoutes from '../routes/user-route.js';

const app = express();
app.use(json());
app.use('/api/user', authRoutes);

describe('POST /api/user/login', () => {
    test('should return 200 on successful login', async () => {
        const response = await request(app)
            .post('/api/user/login')
            .send({ email: 'ahad@gmail.com', password: '1234' });

        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe("User logged in successfully!");
        expect(response.body).toHaveProperty('token');
    });

    test('should return 404 on invalid username', async () => {
        const response = await request(app)
            .post('/api/user/login')
            .send({ email: 'invalid_email', password: '1234' });

        expect(response.statusCode).toBe(404);
        expect(response.body.message).toBe("User not found, please signup first!");
    });

    test('should return 401 on incorrect password', async () => {
        const response = await request(app)
            .post('/api/user/login')
            .send({ email: 'ahad@gmail.com', password: 'wrong_password' });

        expect(response.statusCode).toBe(401);
        expect(response.body.message).toBe("Invalid credentials, access denied!");
    });

    test('should return 400 if email or password is missing', async () => {
        const response = await request(app)
            .post('/api/user/login')
            .send({ email: 'ahad@gmail.com' }); // Missing password

        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBe("Email and password are required!");
    });
});
