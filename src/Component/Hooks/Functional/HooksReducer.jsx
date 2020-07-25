import React, { useReducer } from 'react';
import { Container, Row, Col, Card, CardImg, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { keranjangContext } from '../../../App';

function HooksReducer() {

    const countContext = useContext(keranjangContext)

    return (
        <Container>
            <br />
            <Row>
                <Col xs="6">
                    <Card>
                        <CardImg top width="100%" src="http://placeimg.com/640/480/tech" alt="Card image cap" />
                    </Card>
                </Col>

                <Col xs="6">
                    <h3>Action Figure</h3>
                    <p>Harga</p>
                    <h3>Rp. {countContext.keranjangState.hargatotal}</h3>
                    <p>Jumlah</p>
                    <Row>
                        <Col><Button onClick={() => countContext.keranjangDispatch({ type: 'tambah' })} color="success">+</Button></Col>
                        <Col>{countContext.keranjangState.jumlah}</Col>
                        <Col><Button onClick={() => countContext.keranjangDispatch({ type: 'kurang' })} color="danger">-</Button></Col>
                    </Row>
                    <br />
                    <Button color="success" size="lg">Total Rp. {countContext.keranjangState.hargatotal}</Button>
                    <hr />
                    <NavLink to='/tagihan'>Tagihan Belanja Anda~</NavLink>
                </Col>
            </Row>
        </Container>
    );
}

export default HooksReducer;
