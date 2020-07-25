import React, { useState, useContext } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavbarText,
    Button
} from 'reactstrap';

import { NavLink } from 'react-router-dom'
import { CartContext } from '../../CartContext';

const NavbarComp = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const {value, setValue} = useContext(CartContext)

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink to="/about" className="nav-link">About</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink to="/mahasiswa" className="nav-link">Mahasiswa</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink to="/kelas" className="nav-link">Class</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink to="/hooks" className="nav-link">Hooks</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink to="/useeffect" className="nav-link">UseEffect</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink to="/produk" className="nav-link">Product</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink to="/reducer" className="nav-link">Reducer</NavLink>
                        </NavItem>  
                    </Nav>
                    
                    <NavbarText>
                        <Button color="danger">
                            <i className="fa fa-shopping-cart"></i>
                            <span className = "badge badge-light">{value}</span>
                        </Button>
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavbarComp;
