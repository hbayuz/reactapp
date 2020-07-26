import React, { Fragment } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { useContext } from 'react';
import { AuthContext } from '../App';
import { Link } from 'react-router-dom';

function HomeComp() {
    const { state, dispatch } = useContext(AuthContext)

    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">Hello, {state.user}</h1>
                <p className="lead">Selamat Datang di KonoSekai, Web ntuk memenuhi Kebutuhan Merchandise Anime Anda</p>
                <Button color="primary">
                    <Link to={
                        {
                            pathname: `/about`,
                        }
                    }>Lanjutkeun
                        </Link>
                </Button>
            </Jumbotron>
        </div>
    );
}

export default HomeComp;
