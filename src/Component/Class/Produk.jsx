import React, { Component } from 'react';

import './CSS/Produk.css';

class Produk extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stock: this.props.stock,
            sub:"Beli",
            status:"Tersedia",
            disabled : false
        }
    }

    ButtonBeli = () => {
        this.setState ({
            stock: this.state.stock -1
        })

        if(this.state.stock ===1){
            this.setState ({
                status:"Habis!",
                disabled : true
            })
        }
    }
    
    render() {
        return (
            <div className="box-stock">
                <h2>{this.props.nama}</h2>
                <img src="https://asset.kompas.com/crops/0-Gj0pHPY6SqfthuGBHl3ln4vps=/0x0:1130x753/750x500/data/photo/2020/07/01/5efbff3ef37f3.jpg" alt=""/>
                <p><b>Rp. {this.props.harga}</b></p>
                <p>Stok Barang : {this.state.stock}</p>
                <button className="btn-click" onClick={this.ButtonBeli}  disabled={this.state.disabled}>Beli!</button>
                <p>{this.state.status}</p>
                
            </div>
        );
    }
}

export default Produk;