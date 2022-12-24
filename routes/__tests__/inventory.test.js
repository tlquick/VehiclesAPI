const app = require('../../app.js')
const request = require('supertest')


describe('register', () => {
    it('/inventory returns something', async () => {
        const res = await request(app).get('/inventory')
        expect(res.statusCode).toEqual(200)
        expect(res.body).not.toBe('')
    })
    it('/inventory/1 returns something', async () => {
        const res = await request(app).get('/inventory/1')
        expect(res.statusCode).toEqual(200)
        expect(res.body).not.toBe('')
    })
})