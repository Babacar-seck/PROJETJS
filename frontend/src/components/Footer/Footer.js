import React from 'react'
import styles from './footer.module.css'
import { Row, Col, Container } from 'react-bootstrap'
import { GiPositionMarker } from 'react-icons/gi'

const Footer = () => {
    return (
    
        <footer className="bg-gray-100 mt-20" >
            <Container>
                <Row  >
                    <Col className='mt-5'>
                        <h3 className='mb-3'>sneakersSociety</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Col>
                    <Col className='mt-5'>
                        
                        <h3 className='mb-3'>Nous Contacter</h3>
                        <span><GiPositionMarker /><p>198 av. des Champs élysées , Paris</p></span>
                        <p>contact@sneakersSociety.com</p>
                        <p>250 525 252 855</p>
                    </Col>
                    <Col className='mt-5'>
                        <h3 className='mb-3'>INFORMATIONS</h3>
                        <p>CGV</p>
                        <p>Plan du site</p>
                        <p>Politique de confidentialité</p></Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer