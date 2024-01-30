const request = require('supertest');
const assert = require('assert');
const appUrl = 'http://localhost:3000'; 

describe('API Routes Test', () => {
  let authToken; // Store the authentication token for subsequent requests

  it('should create a new user', (done) => {
    request(appUrl)
      .post('/api/v1/users')
      .send({ name: 'user', email: 'user@gmail.com', password: 'user123' })
      .expect(200)
      .end(done);
  });
  
  it('should authenticate user and get token', (done) => {
    request(appUrl)
      .post('/api/v1/auth')
      .send({ email: 'user@gmail.com', password: 'user123' })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        assert(res.body.token, 'Token not provided in response');
        authToken = res.body.token; 
        done();
      });
  });

  it('should create a new user', (done) => {
    request(appUrl)
      .post('/api/v1/users')
      .send({ name: 'user1', email: 'user1@gmail.com', password: 'user123' })
      .expect(200)
      .end(done);
  });
  it('should authenticate newly created user and get token', (done) => {
    request(appUrl)
      .post('/api/v1/auth')
      .send({ email: 'user1@gmail.com', password: 'user123' })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        assert(res.body.token, 'Token not provided in response');
        authToken = res.body.token; 
        done();
      });
  });

  it('should get user by token', (done) => {
    request(appUrl)
      .get('/api/v1/users')
      .set('Authorization', authToken)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        assert.strictEqual(res.body.name, 'user1');
        assert.strictEqual(res.body.email, 'user1@gmail.com');
        done();
      });
  });

  it('should update user by token', (done) => {
    request(appUrl)
      .patch('/api/v1/users')
      .set('Authorization', authToken)
      .send({ name: 'newName', email: 'new_email@gmail.com', password: 'newpassword123' })
      .expect(200)
      .end(done);
  });

  it('should delete user by token', (done) => {
    request(appUrl)
      .delete('/api/v1/users')
      .set('Authorization', authToken)
      .expect(200)
      .end(done);
  });

  it('should delete all users', (done) => {
    request(appUrl)
      .delete('/api/v1/all-users')
      .send({ key_admin: 'keyadmin123' })
      .expect(200)
      .end(done);
  });

  it('should authenticate user and get token', (done) => {
    request(appUrl)
      .post('/api/v1/auth')
      .send({ email: 'user@gmail.com', password: 'user123' })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        assert(res.body.token, 'Token not provided in response');
        authToken = res.body.token; 
        done();
      });
  });

  it('should create a new user', (done) => {
    request(appUrl)
      .post('/api/v1/users')
      .send({ name: 'user5', email: 'user5@gmail.com', password: 'user123' })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        assert(res.body.token, 'Token not provided in response');
        userId = res.body.id; // Save the ID of the created user
        done();
      });
  });
  it('should create a new user', (done) => {
    request(appUrl)
      .post('/api/v1/users')
      .send({ name: 'user', email: 'user@gmail.com', password: 'user123' })
      .expect(200)
      .end(done); 
  });

  it('should delete the created user', (done) => {
    request(appUrl)
      .delete('/api/v1/users/')
      .set('Authorization', authToken)
      .expect(200)
      .end(done);
  });

  it('should fail to authenticate a recently deleted user', (done) => {
    request(appUrl)
      .post('/api/v1/auth')
      .send({ email: 'user@gmail.com', password: 'user123' })
      .expect(401)
      .end(done);
  });

  it('should create multiple users', (done) => {
    request(appUrl)
      .post('/api/v1/users')
      .send({ name: 'user1', email: 'user1@gmail.com', password: 'user123' })
      .expect(200)
      .end(() => {
        request(appUrl)
          .post('/api/v1/users')
          .send({ name: 'user2', email: 'user2@gmail.com', password: 'user123' })
          .expect(200)
          .end(done);
      });
  });

  it('should authenticate and get details for one of the users', (done) => {
    request(appUrl)
      .get('/api/v1/users')
      .set('Authorization', authToken)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        // Assuming the response contains an array of users, check details of the first user
        const user = res.body[0];
        assert.strictEqual(user.name, 'user1');
        assert.strictEqual(user.email, 'user1@gmail.com');
        done();
      });
  });

  it('should update details for one of the users', (done) => {
    request(appUrl)
      .patch('api/v1/users/')
      .set('Authorization', authToken)
      .send({ name: 'updatedName', email: 'updated_email@gmail.com', password: 'updatedpassword123' })
      .expect(200)
      .end(done);
  });

  it('should fail to authenticate with invalid token', (done) => {
    request(appUrl)
      .get('/api/v1/users')
      .set('Authorization', 'invalidtoken')
      .expect(401)
      .end(done);
  });

  it('should fail to create a user with invalid body', (done) => {
    request(appUrl)
      .post('/api/v1/users')
      .send({ invalidKey: 'invalidValue' })
      .expect(400)
      .end(done);
  });
  it('should create multiple users', (done) => {
    request(appUrl)
      .post('/api/v1/users')
      .send({ name: 'user3', email: 'user3@gmail.com', password: 'user123' })
      .expect(200)
      .end(() => {
        request(appUrl)
          .post('/api/v1/users')
          .send({ name: 'user4', email: 'user4@gmail.com', password: 'user123' })
          .expect(200)
          .end(done);
      });
  });

  it('should update the data of one user to be like the other', (done) => {
    request(appUrl)
      .patch('/api/v1/users/')
      .set('Authorization', authToken)
      .send({ name: 'user4', email: 'user4@gmail.com' }) // Update user1 to have the same data as user2
      .expect(400) // Expecting a 400 error because users cannot have duplicate names
      .end(done);
  });
});
