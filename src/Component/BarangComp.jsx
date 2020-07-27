import React, { PureComponent } from 'react';
import axios from 'axios';
import qs from 'querystring';
import { Table, Button, Container, NavLink, Alert, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import ProdukComp from './ProdukComp';

const api = 'http://localhost:3001'

class BarangComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            barang: [],
            response: '',
            display: 'none'
        }
    }

    componentDidMount() {
        axios.get(api + '/tampilbarang').then(res => {
            this.setState({
                barang: res.data.values
            })
        })
    }

    Deletebarang = (idbarang) => {
        const { barang } = this.state
        const data = qs.stringify({
            id_barang: idbarang
        })

        axios.delete(api + '/hapusbarang',
            {
                data: data,
                headers: { 'Content-type': 'application/x-www-form-urlencoded' }
            }
        ).then(json => {
            if (json.data.status === 200) {
                this.setState({
                    response: json.data.values,
                    barang: barang.filter(barang => barang.id_barang !== idbarang),
                    display: 'block'
                })
                this.props.history.push('/barang')
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
                <h2>Data Barang</h2>
                <Alert color="success" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
                <Button color="success">
                    <Link to="/barang/tambah">
                        |||
                    </Link>Tambah Data</Button>
                <hr />

                <Table className="table-bordered">
                    <thead>
                        <tr>
                            <th>Nama</th>
                            <th>Harga</th>
                            <th>Keterangan</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.barang.map(barang =>
                            <tr key={barang.id_barang}>
                                <td>{barang.nama_barang}</td>
                                <td>{barang.harga_barang}</td>
                                <td>{barang.keterangan}</td>
                                <td>
                                    <Link to={
                                        {
                                            pathname: '/barang/edit',
                                            state: {
                                                id_barang: barang.id_barang,
                                                nama: barang.nama_barang,
                                                harga: barang.harga_barang,
                                                keterangan: barang.keterangan
                                            }
                                        }
                                    }>
                                        <Button color="success"> Edit </Button>
                                    </Link>

                                    <span> </span>

                                    <Button onClick={() => this.Deletebarang(barang.id_barang)} color="danger"> Hapus </Button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>

                <hr />
                <h2>Produk</h2>
                <Row>
                    <ProdukComp />
                    <ProdukComp />
                    <ProdukComp />
                </Row>

            </Container>
        );
    }
}

export default BarangComp;
