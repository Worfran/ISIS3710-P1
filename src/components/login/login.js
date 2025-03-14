import { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

function Login() {

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const checkLogin = (e) => {
        //Completar con el backend
        if (Email === "" && Password === "1234") {
            alert("Login successful");
        }
        else {
            alert("Login failed");
        }
    }

    const checkOnCLick = (e) => {
        //Completar con el backend
        checkLogin();
    }

    return (
        <Container>
            <h2>Login</h2>
            <Form>
                <Form.Group controlId="email">
                    <Form.Label>Email address:</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="pwd">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" />
                </Form.Group>
                <Row>
                    <Col>
                        <Button variant="primary" type="submit" onClick={checkOnCLick}>Ingresar</Button>
                    </Col>
                    <Col>
                        <Button variant="primary" type="submit">Cancelar</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default Login;