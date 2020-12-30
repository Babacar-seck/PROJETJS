import React from 'react'
import styles from './footer.module.css'
import { Row, Col, Container } from 'react-bootstrap'
import { FaStreetView, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
    return (
    
        <footer className="bg-gray-100 mt-20" >
            <Container>
                <Row  >
                    <Col className='mt-5'>
                        <h3 className='mb-3'>SneakersSociety</h3>
                        <div className='pl-2'>

                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </Col>
                    <Col className='mt-5'>
                        
                        <h3 className='mb-3'>Nous Contacter</h3>
                        <span className="flex"><FaStreetView className="mr-3" /><p>198 av. des Champs élysées, Paris</p></span>
                        <span className="flex"><FaEnvelope className="mr-3" /><p>contact@sneakersSociety.com</p></span>
                        <span className="flex"><FaPhoneAlt className="mr-3" /><p>250 525 252 855</p></span>
                    
                    </Col>
                    <Col className='mt-5'>
                        <h3 className='mb-3'>INFORMATIONS</h3>
                        <div className='pl-2'>
                        <p>CGV</p>
                        <p>Plan du site</p>
                        <p>Politique de confidentialité</p>
                        </div>
                        </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer