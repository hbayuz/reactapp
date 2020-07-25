import React, { useReducer } from 'react';
import { Container, Row, Col, Card, CardImg, Button } from 'reactstrap';

const initialState = {
    jumlah: 1,
    hargasatuan: 10000,
    hargatotal: 10000
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'tambah': return {
            ...state,
            jumlah: state.jumlah + 1,
            hargatotal: state.hargasatuan + (state.hargasatuan * state.jumlah)
        }
        case 'kurang': return {
            ...state,
            jumlah: state.jumlah - 1,
            hargatotal: (state.hargasatuan * state.jumlah) - state.hargasatuan
        }
        default:
            return state
    }
}

function HooksReducer() {
    const [count, dispatch] = useReducer(reducer, initialState)

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
                    <h3>Rp. {count.hargasatuan}</h3>
                    <p>Jumlah</p>
                    <Row>
                        <Col><Button onClick={() => dispatch({ type: 'tambah' })} color="success">+</Button></Col>
                        <Col>{count.jumlah}</Col>
                        <Col><Button onClick={() => dispatch({ type: 'kurang' })} color="danger">-</Button></Col>
                    </Row>
                    <br />
                    <Button color="success" size="lg">Total Rp. {count.hargatotal}</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default HooksReducer;
