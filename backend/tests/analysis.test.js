const request = require('supertest');
const app = require('../server'); // Assume app exported

describe('Analysis API', () => {
  it('should analyze file', async () => {
    const res = await request(app)
      .post('/api/analyze')
      .attach('file', 'path/to/sample.csv')
      .set('Authorization', 'Bearer valid_token');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('data');
  });
});