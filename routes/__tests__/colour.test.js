const app = require('../../app.js')
const request = require('supertest')


describe('register', () => {
    it('/colours returns something', async () => {
        const res = await request(app).get('/colours')
        expect(res.statusCode).toEqual(200)
        expect(res.body).not.toBe('')
    })
    it('/colours/1 returns something', async () => {
        const res = await request(app).get('/colours/1')
        expect(res.statusCode).toEqual(200)
        expect(res.body).not.toBe('')
    })
})