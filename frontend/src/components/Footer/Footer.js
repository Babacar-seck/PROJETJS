import React from 'react'
import styles from './footer.module.css'
import { Row, Col, Container } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer >
            <Container>
                <Row className= 'mt-5'>
                    <Col>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Col>
                    <Col>
                        <p>Lorem ipsum dolor sit.</p>
                        <p>Lorem ipsum dolor sit.</p>
                        <p>250 525 252 855</p>
                    </Col>
                    <Col><p>Lorem ipsum dolor sit.</p>
                        <p>Lorem ipsum dolor sit.</p>
                        <p>250 525 252 855</p></Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer