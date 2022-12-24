const app = require('../../app.js')
const request = require('supertest')


describe('register', () => {
    it('/makes returns something', async () => {
        const res = await request(app).get('/makes')
        expect(res.statusCode).toEqual(200)
        expect(res.body).not.toBe('')
    })
    it('/makes/1 returns something', async () => {
        const res = await request(app).get('/makes/1')
        expect(res.statusCode).toEqual(200)
        expect(res.body).not.toBe('')
    })
})