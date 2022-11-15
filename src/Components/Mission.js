import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Mission = () => {
    return (
        <Container>
            <div className='mission'>
                <Row>
                    <Col xs={12} md={6}>
                        <div>
                            <figure className='position-relative h-100'>
                                <img src="/image/block.png" alt='block' className='img-fluid' />
                                <div className='mission-wrapper'>
                                    <h5>
                                        Our Vision
                                    </h5>
                                    <p>Our vision is to provide prime value to customers by delivering supreme quality undergarments in the global market with the intent to touch the lives of our employees, immediate society and the world community with the understanding -‘we exist because they exist’.</p>
                                </div>
                            </figure>
                        </div>
                        <div className='mission-image-wrap'>
                            <figure className='position-relative h-100'>
                                <img src="/image/splash.png" alt='splash' className='img-fluid' />
                            </figure>
                        </div>

                    </Col>
                    <Col xs={12} md={6}>
                        <figure className='mission-image position-relative h-100'>
                            <img src="/image/article.png" alt='article' className='img-fluid' />
                            <div className='mission-wrappers'>
                                <h5>
                                    Our Mission
                                </h5>
                                <p>Our mission is to put in effort wholeheartedly to:</p>
                                <ul>
                                    <li>Ensure the quality of the product excellence through monitoring at every stages of production till delivery and customer satisfaction.</li>
                                    <li>Focus on widening the business every year through a progressive approach of associating with prospective textile shops, appointing distributors and contracting with business agents.</li>
                                    <li>
                                        Share part of the profit to ensure the welfare of the employees, society & the environment.
                                    </li>
                                </ul>
                            </div>
                        </figure>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Mission