import React from 'react';
import { Container, Row } from 'reactstrap';
import RowProduct from './RowProduct';

function ProductComp () {
    return (
        <div>
            <Container>
                <hr/>
                <h2>Produk</h2>
                <Row>
                    <RowProduct/>
                    <RowProduct/>
                    <RowProduct/>
                </Row>
            </Container>
        </div>
    );
}

export default ProductComp;
