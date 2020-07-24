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

    Deletemahasiswa = (idmahasiswa) => {
        const {mahasiswa} = this.state
        const data = qs.stringify({
            id_mahasiswa: idmahasiswa
        })

        axios.delete(api + '/hapus',
            {
                data: data,
                headers: {'Content-type': 'application/x-www-form-urlencoded'}
            }
        ).then(json=>{
            if(json.data.status === 200){
                this.setState({
                    response: json.data.values,
                    mahasiswa: mahasiswa.filter(mahasiswa => mahasiswa.id_mahasiswa !== idmahasiswa),
                    display: 'block'
                })
                this.props.history.push('/mahasiswa')
            }else {
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })
                // this.props.history.push('/mahasiswa')
            }
        })
    }

    render() {
        return (
            <Container>
                <h2>Data Mahasiswa</h2>
                <Alert color = "success" style = {{display : this.state.display}}>
                    {this.state.response}
                </Alert>
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
                                        <Button color="success"> Edit </Button>
                                    </Link>

                                    <span> </span>
                                        <Button onClick={()=>this.Deletemahasiswa(mahasiswa.id_mahasiswa)} color="danger"> Hapus </Button>
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
