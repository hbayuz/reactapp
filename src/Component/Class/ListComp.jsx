import React, { PureComponent } from 'react';
import axios from 'axios';
import qs from 'querystring';
import {Table, Button, Container, NavLink, Alert} from 'reactstrap';

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
                <hr/>

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
                                <td> Edit | Hapus </td>
                            </tr>
                            
                            )}
                    </tbody>

                </Table>
            </Container>
        );
    }
}

export default ListComp;
