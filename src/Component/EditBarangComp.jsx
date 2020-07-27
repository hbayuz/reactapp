import React, { Component } from 'react';
import axios from 'axios';
import qs from 'querystring';
import { Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button, } from 'reactstrap';

const api = "http://localhost:3001"

class EditBarangComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id_barang: this.props.location.state.id_barang,
            nama: this.props.location.state.nama_barang,
            harga: this.props.location.state.harga_barang,
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
            nama: this.state.nama_barang,
            harga: this.state.harga_barang,
            keterangan: this.state.keterangan
        });

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
                <h4>Form Ubah Data</h4>
                <Alert color="success" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
                <Form className="form">
                    <Col>
                        <Label>Nama Barang</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="nama" value={this.state.nama} onChange={this.handleChange} placeholder="Masukkan Nama" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Label>Harga Barang</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="harga" value={this.state.harga} onChange={this.handleChange} placeholder="Masukkan Harga Barang" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Label>Keterangan</Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="keterangan" value={this.state.keterangan} onChange={this.handleChange} placeholder="Masukkan Keterangan Baru" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <FormGroup>
                            <Row>
                                <Col>
                                    <Button color="success" type="button" onClick={() => this.ubahBarang(this.state.id_mahasiswa)}>Update</Button>
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