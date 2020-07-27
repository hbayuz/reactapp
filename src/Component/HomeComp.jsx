import React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';
import { useContext } from 'react';
import { AuthContext } from '../App';
import { Link } from 'react-router-dom';

function HomeComp() {
    const { state } = useContext(AuthContext)

    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3" align = "center">Hello, {state.user}</h1>
                    <p className="lead" align = "center">Selamat Datang di KonoSekai, Web untuk memenuhi Kebutuhan Merchandise Anime Anda</p>
                    <Button outline color="primary">
                        <Link to={
                            {
                                pathname: `/barang`,
                            }
                        }> Lanjut
                        </Link>
                    </Button>
                </Container>
            </Jumbotron>
            
        </div>
    );
}

export default HomeComp;
