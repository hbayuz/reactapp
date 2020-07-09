import React, { Component } from 'react';

class Child1 extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    minBeli = 1;
    render() {
        return (
            <div>
                <h3>Child 1</h3>
                <p>Stock Produk : {this.props.stock}</p>
                <button onClick={()=>this.props.fungsi(this.minBeli)}>Beli Bos</button>
            </div>
        );
    }
}

export default Child1;