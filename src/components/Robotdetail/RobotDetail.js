import React from 'react';
import { Card, Image } from 'react-bootstrap';
import './style/RobotDetail.css';

const RobotDetail = ({ robot }) => {
    return (
        <Card className='card-robot-detail'>
            <Card.Body>
                <Card.Title className='text-center'><strong>{robot.nombre}</strong></Card.Title>
                <Image src={robot.imagen + "?raw=true"} alt={robot.nombre} fluid />
                <Card.Text>
                    <strong>Modelo:</strong> {robot.modelo}<br />
                    <strong>Capacidad de procesamiento:</strong> {robot.empresaFabricante}<br />
                    <strong>Humor:</strong> {robot.humor}<br />
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default RobotDetail;
