const app = require('../../app.js')
const request = require('supertest')


describe('register', () => {
    it('/vehicles returns something', async () => {
        const res = await request(app).get('/vehicles')
        expect(res.statusCode).toEqual(200)
        expect(res.body).not.toBe('')
    })
    it('/vehicles/1 returns something', async () => {
        const res = await request(app).get('/vehicles/1')
        expect(res.statusCode).toEqual(200)
        expect(res.body).not.toBe('')
    })
})