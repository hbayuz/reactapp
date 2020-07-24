import React, { PureComponent } from 'react';
import axios from 'axios';
import qs from 'querystring';
import { Table, Button, Container, NavLink, Alert } from 'reactstrap';
import { Link } from 'react-router-dom';

const api = 'http://localhost:3001'

class ListComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            mahasiswa: [],
            response: '',
            display: 'none'
        }
    }

    componentDidMount() {
        axios.get(api + '/tampil').then(res => {
            this.setState({
                mahasiswa: res.data.values
            })
        })
    }

    render() {
        return (
            <Container>
                <h2>Data Mahasiswa</h2>
                <NavLink href="/mahasiswa/tambah"><Button color="success">Tambah Data</Button></NavLink>
                <hr />

                <Table className="table-bordered">
                    <thead>
                        <tr>
                            <th>NIM</th>
                            <th>Nama</th>
                            <th>Jurusan</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.mahasiswa.map(mahasiswa =>
                            <tr key={mahasiswa.id_mahasiswa}>
                                <td>{mahasiswa.nim}</td>
                                <td>{mahasiswa.nama}</td>
                                <td>{mahasiswa.jurusan}</td>
                                <td>
                                    <Link to={
                                        {
                                            pathname: '/mahasiswa/edit',
                                            state: {
                                                id_mahasiswa: mahasiswa.id_mahasiswa,
                                                nim: mahasiswa.nim,
                                                nama: mahasiswa.nama,
                                                jurusan: mahasiswa.jurusan
                                            }
                                        }
                                    }>
                                        <Button color = "success"> Edit </Button>
                                    </Link>
                                </td>
                            </tr>

                        )}
                    </tbody>

                </Table>
            </Container>
        );
    }
}

export default ListComp;
