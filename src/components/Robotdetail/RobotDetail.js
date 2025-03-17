import React from 'react';
import { Card, Image } from 'react-bootstrap';
import './style/RobotDetail.css';
import { BiRightArrowAlt } from 'react-icons/bi';
import { useIntl } from 'react-intl';

const RobotDetail = ({ robot }) => {
    const { formatMessage } = useIntl();

    return (
        <Card className='card-robot-detail'>
            <Card.Body>
                <Card.Title className='text-center'><strong>{robot.nombre}</strong></Card.Title>
                <div className='text-center'>
                    <Image 
                        src={robot.imagen + "?raw=true"} 
                        alt={robot.nombre} 
                        width={200} 
                        height={150} 
                        className='robot-image' 
                        fluid 
                        style={{ border: '2px solid #000' }} 
                    />
                </div>
                <Card.Text>
                    <BiRightArrowAlt/> <strong>{formatMessage({ id: 'robotDetailModel' })}:</strong> {robot.modelo}<br />
                    <BiRightArrowAlt/> <strong>{formatMessage({ id: 'robotDetailManufacturer' })}:</strong> {robot.empresaFabricante}<br />
                    <BiRightArrowAlt/> <strong>{formatMessage({ id: 'robotDetailHumor' })}:</strong> {robot.humor}<br />
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default RobotDetail;