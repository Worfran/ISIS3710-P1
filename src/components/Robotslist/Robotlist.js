import { useEffect, useState } from "react";
import { Container, Table, Row, Col } from "react-bootstrap";
import RobotDetail from "../Robotdetail/RobotDetail"; 

const Robotlist = () => {
    const [robots, setRobots] = useState([]);
    const [selectedRobot, setSelectedRobot] = useState(null);

    const url = "http://localhost:3001/robots";
    
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setRobots(data));
    }, []);

    const handleRowClick = (robot) => {
        setSelectedRobot(robot);
    };

    return (
        <Container>
            <Row>
                <Col md={8}>
                    <Table striped bordered hover>
                        <thead className="thead-dark">
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Modelo</th>
                                <th>Empresa Fabricante</th>
                            </tr>
                        </thead>
                        <tbody>
                            {robots.map((robot) => (
                                <tr key={robot.id} onClick={() => handleRowClick(robot)}>
                                    <td><strong>{robot.id}</strong></td>
                                    <td>{robot.nombre}</td>
                                    <td>{robot.modelo}</td>
                                    <td>{robot.empresaFabricante}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
                <Col md={4}>
                    {selectedRobot && <RobotDetail robot={selectedRobot} />}
                </Col>
            </Row>
        </Container>
    );
}

export default Robotlist;