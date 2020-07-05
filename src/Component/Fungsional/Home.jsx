import React from 'react'
// import Blog from './Blog'
import Produk from '../Class/Produk';

const Home = () => {
    return <div>
        { 
        <div>
        <Produk nama="ROG Zephyrus G14" stock="10" harga="14.900.000"/>
        <Produk nama="ROG Zephyrus GXS" stock="5" harga="17.900.000"/>
        <Produk nama="ROG Zephyrus G71" stock="20" harga="11.900.000"/>
        <Produk nama="ROG Zephyrus G18" stock="30" harga="12.900.000"/>
        <Produk nama="ROG Zephyrus G69" stock="40" harga="19.900.000"/>
        <Produk nama="ROG Zephyrus G361" stock="35" harga="12.900.000"/>
        </div>
        /* <Blog
            tanggal="02 Juni 2020"
            judul="Teknologi Blockchain"
            summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
         <Blog
            tanggal="03 Juni 2020"
            judul="Teknologi Internet of Things"
            summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
         <Blog
            tanggal="04 Juni 2020"
            judul="Design Pattern Laravel"
            summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        /> */}

    </div>
}

export default Home;