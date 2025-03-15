import React, { useState } from "react";
import { Row, Col, Button, Form, Card, Container } from "react-bootstrap";
import RobotList from "../Robotslist/Robotlist"; 

function LoginForm() {
  const [formValues, setFormValues] = useState({ login: "", password: "" });
  const [validationStates, setValidationStates] = useState({ loginState: false, passwordState: false });
  const [message, setMessage] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginChange = (e) => {
    const login = e.target.value;
    setFormValues({ ...formValues, login });
    setValidationStates({ ...validationStates, loginState: login.length > 0 });
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setFormValues({ ...formValues, password });
    setValidationStates({ ...validationStates, passwordState: password.length > 0 });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      const data = await response.json();
      if (response.status === 200) {
        setMessage(data.message);
        setIsAuthenticated(true); 
      } else if (response.status === 401) {
        setMessage(data.message);
      } else {
        setMessage("Un error ocurrió. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      setMessage("Un error ocurrió. Por favor, inténtalo de nuevo.");
    }
  };

  if (isAuthenticated) {
    return <RobotList />;
  }

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Card style={{ width: "350px", padding: "20px" }}>
        <Card.Body>
          <h1 className="text-center">Inicio de sesión</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicLogin">
              <Form.Label>Nombre de usuario</Form.Label>
              <Form.Control type="text" placeholder="Enter login" onChange={handleLoginChange} value={formValues.login} />
              {!validationStates.loginState && (
                <Form.Text className="text-danger">Login is required.</Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} value={formValues.password} />
              {!validationStates.passwordState && (
                <Form.Text className="text-danger">Password is required.</Form.Text>
              )}
            </Form.Group>
            <Row>
              <Col>
                <Button variant="primary" type="submit" disabled={!validationStates.loginState || !validationStates.passwordState}>
                  Ingresar
                </Button>
              </Col>
              <Col>
                <Button variant="secondary" type="button" onClick={() => setFormValues({ login: "", password: "" })}>
                  Cancelar
                </Button>
              </Col>
            </Row>
          </Form>
          {message && <p className="mt-3">{message}</p>}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default LoginForm;