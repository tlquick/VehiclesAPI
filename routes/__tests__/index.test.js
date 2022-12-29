const app = require('../../app.js')
const request = require('supertest')


describe('register', () => {
    it('returns status 200', async () => {
        const res = await request(app).get('/')
        expect(res.statusCode).toEqual(200)
    })
    
})