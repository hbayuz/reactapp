import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import CardComp from './CardComp';
import { useContext } from 'react'
import { CartContext } from '../../CartContext';

const AboutComp = (props) => {
    return (
        <div>
            <Container>
                <hr/>
                <Row>
                    <Col><CardComp id="1" judul="Belajar React" tanggal="22/06/2020"/></Col>
                    <Col><CardComp id="2" judul="Belajar Golang" tanggal="24/06/2020"/></Col>
                    <Col><CardComp id="3" judul="Belajar PHP" tanggal="26/06/2020"/></Col>
                </Row>
            </Container>
        </div>
    );
}

export default AboutComp;
