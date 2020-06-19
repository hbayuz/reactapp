import React from 'react'
import Blog from './Blog'

const Home = () => {
    return <div>
        <Blog
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
        />

    </div>
}

export default Home;