const chai = require('chai');
const cahiHttp = require('chai-http');
const expect = chai.expect;
const app = require('./server.js');

chai.use(cahiHttp);

describe('Node.js Server API Tests', () => {

    // Test GET /users
    it('should return an array of users on GET /users', async () => {
      const res = await chai.request(app).get('/users');
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('array');
    });
  
    // Test GET /users/:id with a valid user ID
    it('should return a single user on GET /users/:id with a valid user ID', async () => {
      const user = { id: 1, name: 'John Doe' };
      const res = await chai.request(app).get(`/users/${user.id}`);
      expect(res).to.have.status(200);
      expect(res.body).to.deep.equal(user);
    });
  
    // Test GET /users/:id with an invalid user ID
    it('should return 404 Not Found on GET /users/:id with an invalid user ID', async () => {
      const res = await chai.request(app).get('/users/999');
      expect(res).to.have.status(404);
      expect(res.text).to.equal('User not found');
    });
  
    // Test POST /users with valid input
    it('should create a new user on POST /users with valid input', async () => {
      const user = { name: 'New User' };
      const res = await chai.request(app).post('/users').send(user);
      expect(res).to.have.status(200);
      expect(res.body).to.have.property('id');
      expect(res.body.name).to.equal(user.name);
    });
  
    // Test POST /users with missing name
    it('should return 400 Bad Request on POST /users with missing name', async () => {
      const res = await chai.request(app).post('/users').send({});
      expect(res).to.have.status(400);
      expect(res.text).to.equal('Name is required');
    });
  
    // Test PUT /users/:id with valid input
    it('should update a user on PUT /users/:id with valid input', async () => {
      const user = { id: 1, name: 'Updated Name' };
      const res = await chai.request(app).put(`/users/${user.id}`).send(user);
      expect(res).to.have.status(200);
      expect(res.body).to.deep.equal(user);
    });
  
    // Test PUT /users/:id with missing name
    it('should return 400 Bad Request on PUT /users/:id with missing name', async () => {
      const res = await chai.request(app).put('/users/1').send({});
      expect(res).to.have.status(400);
      expect(res.text).to.equal('Name is required');
    });
  
    // Test DELETE /users/:id with valid input
    it('should delete a user on DELETE /users/:id with valid input', async () => {
      const res = await chai.request(app).delete('/users/1');
      expect(res).to.have.status(200);
    });
  
    // Test DELETE /users/:id with an invalid user ID
    it('should return 404 Not Found on DELETE /users/:id with an invalid user ID', async () => {
      const res = await chai.request(app).delete('/users/999');
      expect(res).to.have.status(404);
      expect(res.text).to.equal('User not found');
    });
  });