import React from 'react';
import { Container, Jumbotron, Button } from 'reactstrap';
import { useContext } from 'react';
import { keranjangContext } from '../../../App';

function Tagihan() {

    const countContext = useContext(keranjangContext)

    return (
        <Container>
            <Jumbotron>
                <h1 className="display-3">Tagihan</h1>
                <p className="lead">({countContext.keranjangState.jumlah}x) Action Figure</p>
                <hr className="my-2" />
                <p>Harga Total Rp. {countContext.keranjangState.hargatotal}</p>
                <p className="lead">
                    <Button color="primary">Lanjutkan Pembayaran</Button>
                </p>
            </Jumbotron>
        </Container>
    );
}

export default Tagihan;
