import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Image } from 'react-bootstrap';

function Login() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={4} className="d-flex justify-content-center">
          <Image src={`${process.env.PUBLIC_URL}/static/logo.png`} alt="Logo" width={200} />
        </Col>
      </Row>


      <Row className="justify-content-center mt-4">
        <Col md={4}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Tài khoản</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-3">
              <Form.Label>Mật khẩu</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-4">
              Đăng nhập
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;

