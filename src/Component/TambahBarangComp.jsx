import React, { Fragment } from 'react';
import axios from 'axios';
import qs from "querystring";
import { Container, Col, Form, FormGroup, Label, Input, Button, } from 'reactstrap';
import { useContext } from 'react';
import { AuthContext } from '../App';
import { useState } from 'react';
import { Link } from 'react-router-dom'

const api = 'http://localhost:3001'

function TambahBarangComp() {

    const { dispatch } = useContext(AuthContext)

    const initialState = {
        nama_barang: "",
        harga_barang: "",
        keterangan: "",
        isSubmitting: false,
        errorMessage: null,
    }

    const [data, setData] = useState(initialState)

    const handleInputChange = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const handleFormSubmit = event => {
        event.preventDefault()
        setData({
            ...data,
            isSubmitting: true,
            errorMessage: null
        })

        const requestBody = {
            nama_barang: data.nama,
            harga_barang: data.harga,
            keterangan: data.keterangan,
        }

        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }

        axios.post(api + '/tambahbarang', qs.stringify(requestBody), config)
            .then(res => {
                if (res.data.success === true) {
                    dispatch({
                        type: "TAMBAH",
                        payload: res.data
                    })
                }
                else {
                    setData({
                        ...data,
                        isSubmitting: false,
                        errorMessage: res.data.Message
                    })
                }

                throw res
            })
    }

    return (
        <Fragment>
            <Container>
                <hr />
                <Col>
                    <h1>Form Tambah Barang</h1>
                    <hr />
                    <Form onSubmit={handleFormSubmit}>
                        <FormGroup>
                            <Label for="exampleNama">Nama Barang</Label>
                            <Input type="text"
                                value={data.nama}
                                onChange={handleInputChange}
                                name="nama" id="exampleNama"
                                placeholder="" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleHarga">Harga</Label>
                            <Input type="text"
                                value={data.harga}
                                onChange={handleInputChange}
                                name="harga" id="exampleHarga"
                                placeholder="" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleKeterangan">Keterangan</Label>
                            <Input type="text"
                                value={data.keterangan}
                                onChange={handleInputChange}
                                name="keterangan" id="exampleKeterangan"
                                placeholder="" />
                        </FormGroup>

                        {data.errorMessage && (
                            <div className="alert alert-danger" role="alert">
                                {data.errorMessage}
                            </div>
                        )}

                        <Button disabled={data.isSubmitting}>
                            {data.isSubmitting ? (
                                "..Loading"
                            ) :
                                (
                                    "Submit"
                                )
                            }
                        </Button>
                        <Button outline color="primary">
                            <Link to={
                                {
                                    pathname: `/barang`,
                                }
                            }> Kembali
                        </Link>
                        </Button>
                    </Form>
                </Col>
            </Container>
        </Fragment>
    );
}

export default TambahBarangComp;