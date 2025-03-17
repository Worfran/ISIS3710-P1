import React, { useState } from "react";
import { Row, Col, Button, Form, Card, Container } from "react-bootstrap";
import { useIntl } from 'react-intl';
import RobotList from "../Robotslist/Robotlist"; 
import "./style/login.css";

function LoginForm() {
  const { formatMessage } = useIntl();
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
        setMessage(formatMessage({ id: 'authenticationError' }));
        setIsAuthenticated(true); 
      } else if (response.status === 401) {
        setMessage(data.message);
      } else {
        setMessage(formatMessage({ id: 'generalError' }));
      }
    } catch (error) {
      setMessage(formatMessage({ id: 'generalError' }));
    }
  };

  if (isAuthenticated) {
    return <RobotList />;
  }

  return (
    <Container className="d-flex justify-content-center align-items-center" >
      <Card className="borderless-card" style={{ width: "500px"}}>
        <Card.Body>
          <h1 className="text-center">{formatMessage({ id: 'loginTitle' })}</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicLogin">
              <Form.Label>{formatMessage({ id: 'usernameLabel' })}</Form.Label>
              <Form.Control className="control-form" type="text" placeholder={formatMessage({ id: 'usernamePlaceholder' })} onChange={handleLoginChange} value={formValues.login} />
              {!validationStates.loginState && (
                <Form.Text className="text-danger">{formatMessage({ id: 'usernameError' })}</Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>{formatMessage({ id: 'passwordLabel' })}</Form.Label>
              <Form.Control className="control-form" type="password" placeholder={formatMessage({ id: 'passwordPlaceholder' })} onChange={handlePasswordChange} value={formValues.password} />
              {!validationStates.passwordState && (
                <Form.Text className="text-danger">{formatMessage({ id: 'passwordError' })}</Form.Text>
              )}
            </Form.Group>
            <Row>
              <Col>
                <Button className="ingresar-button" variant="primary" type="submit" disabled={!validationStates.loginState || !validationStates.passwordState}>
                  {formatMessage({ id: 'loginButton' })}
                </Button>
              </Col>
              <Col>
                <Button className="cancelar-button" variant="secondary" type="button" onClick={() => setFormValues({ login: "", password: "" })}>
                  {formatMessage({ id: 'cancelButton' })}
                </Button>
              </Col>
            </Row>
          </Form>
          {message && <p className="mt-3 text-danger">{message}</p>}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default LoginForm;