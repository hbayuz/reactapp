import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    Button
} from 'reactstrap';
import { useContext } from 'react';
import { AuthContext } from '../App';

function MenuComp() {
    const [isOpen, setisOpen] = useState(false);
    const toggle = () => setisOpen(!isOpen);

    const {state, dispatch} = useContext(AuthContext)

    return (
        <div>
            <Navbar className="navbar-dark bg-dark" expand="md">
                <NavbarBrand href="/">KonoSekai</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/homepage">Home</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>
                        <Button color = "default"
                        onClick = {()=>
                        dispatch({
                            type:"LOGOUT"
                        })}>
                            {state.isAuthenticated && (
                                <NavLink>LOGOUT</NavLink>
                            )}
                        </Button>
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default MenuComp;
