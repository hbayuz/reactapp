import React, {useState} from 'react';
import TampilComp from './TampilComp';
const HooksComp = () => {
    const [jumlah, tambahJumlah] = useState(0)

    //login
    const [dataLogin, setDataLogin] = useState({username:'firda', token:'123abcd', isLogin: true})

    //cek kondisi login
    let tampil;

    if(dataLogin.isLogin){
        tampil = <TampilComp
            username = {dataLogin.username}
            fungsi = {tambahJumlah.bind(this)}
            jumlah = {jumlah} />
    } else {
        tampil = <TampilComp username = "Maaf anda belum Login :3" disabled = {true}/>
    }


    return (
        <div>
            {tampil}
        </div>
    );
}

export default HooksComp;
