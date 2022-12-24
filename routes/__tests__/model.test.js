const app = require('../../app.js')
const request = require('supertest')


describe('register', () => {
    it('/models returns something', async () => {
        const res = await request(app).get('/models')
        expect(res.statusCode).toEqual(200)
        expect(res.body).not.toBe('')
    })
    it('/models/1 returns something', async () => {
        const res = await request(app).get('/models/1')
        expect(res.statusCode).toEqual(200)
        expect(res.body).not.toBe('')
    })
})