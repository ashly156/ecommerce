import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const WhatToDo = () => {
    return (
        <Container>
            <div className='whatToDo'>
                <Row>
                    <Col xs={12} md={6}>
                        <img src="/image/whattodo.png" alt='whattodo' className='img-fluid' />
                    </Col>
                    <Col  xs={12} md={6}>
                        <h4 className='whatToDo-title'>What Do We Do To Make Our Employees Stay Happy And Satisfied ?</h4>
                        <ul className='whatToDo-list'>
                            <li> <img src="/image/tick.svg" /> <div className='whatToDo-list-item'> Listen to them. We give opportunities for them to express their views- personal and official.</div></li>
                            <li> <img src="/image/tick.svg" /><div className='whatToDo-list-item'>Appreciate the employees for the effort put in verbally and also through incentives, awards, accolades and public acknowledgements in meetings.</div></li>
                            <li> <img src="/image/tick.svg" /><div className='whatToDo-list-item'>Organise training programmes to enhance their professional skills, and also for personal re engineering to build strong self- esteem, develop interpersonal, social, team communication skills and attitude.</div></li>
                            <li> <img src="/image/tick.svg" /><div className='whatToDo-list-item'>The work environment is made proactive, positive, calm, joyful, effective, productive and enjoyable through meditation and other Self Building activities.</div></li>
                            <li><img src="/image/tick.svg" /><div className='whatToDo-list-item'>Timely Financial assistance is rendered as a part of employee welfare scheme as and when required.</div></li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default WhatToDo