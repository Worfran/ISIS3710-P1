import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";

const Robotlist = ({ robot }) => {

    const [robots, setRobots] = useState([]);

    const url = "HASOJPDA";

    /*useEffect(
        () => {
            fetch(url)
            .then((response) => response.json())
            .then((data) => setRobots(data))
        }
    */

    return (
        <Container>
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
                        <tr key={robot.id}>
                            <td>{robot.id}</td>
                            <td>{robot.name}</td>
                            <td>{robot.model}</td>
                            <td>{robot.company}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default Robotlist;