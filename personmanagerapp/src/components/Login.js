import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { Form, Button } from 'react-bootstrap';

async function loginUser(credentials){
  return fetch('http://localhost:4000/login', {
    method: 'POST',
    headers:{
      'Content-type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

export default function Login({setToken}){
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
        email,
        password
      });
    console.log(token)
    setToken(token);
  }

  return (
    <div className='login'> 
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" onChange={e => setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" onChange={e => setPassword(e.target.value)}/>
        </Form.Group>
      </Form>
      <Button type="submit" onClick={handleSubmit}>Submit</Button>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};
  