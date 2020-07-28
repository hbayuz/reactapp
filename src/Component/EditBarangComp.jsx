import React, { Component } from 'react';
import axios from 'axios'
import qs from 'querystring'
import { Container, Col, Row, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap'
import {Link} from 'react-router-dom'

const api = "http://localhost:3001"

class EditBarangComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id_barang: this.props.location.state.id_barang,
            nama: this.props.location.state.nama,
            harga: this.props.location.state.harga,
            keterangan: this.props.location.state.keterangan,
            response: '',
            display: 'none'
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    ubahBarang = (idbarang) => {
        const data = qs.stringify({
            id_barang: idbarang,
            nama: this.state.nama,
            harga: this.state.harga,
            keterangan: this.state.keterangan
        })

        axios.put(api + '/ubahbarang', data)
            .then(json => {
                if (json === 200) {
                    this.setState({
                        response: json.data.values,
                        display: 'block'
                    })
                } else {
                    this.setState({
                        response: json.data.values,
                        display: 'block'
                    })
                }
            })
    }

    render() {
        return (
            <Container>
                <h4>Form Edit Data</h4>
                <Alert color="success" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
                <Form className="form">
                    <Col>
                        <Label>Nama</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="nama" value={this.state.nama} onChange={this.handleChange} placeholder="Masukan Nama" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Label>Harga</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="harga" value={this.state.harga} onChange={this.handleChange} placeholder="Masukan Harga" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Label>Keterangan</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="keterangan" value={this.state.keterangan} onChange={this.handleChange} placeholder="Masukan Keterangan" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Button type="button" onClick={() => this.ubahBarang(this.state.id_barang)}>Submit</Button>
                                    <Button outline color="primary">
                                        <Link to={
                                            {
                                                pathname: `/barang`,
                                            }
                                        }> Kembali
                        </Link>
                                    </Button>
                                </Col>
                            </Row>
                        </FormGroup>

                    </Col>
                </Form>
            </Container>
        );
    }
}

export default EditBarangComp;
