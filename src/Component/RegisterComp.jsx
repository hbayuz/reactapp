import React, { Fragment } from 'react';
import axios from 'axios';
import qs from "querystring";
import { Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button, } from 'reactstrap';
import { useContext } from 'react';
import { AuthContext } from '../App';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const api = 'http://localhost:3001'

function RegisterComp() {

    const { dispatch } = useContext(AuthContext)

    const initialState = {
        username: "",
        email: "",
        password: "",
        role: "",
        isSubmitting: false,
        errorMessage: null,
    }

    const [data, setData] = useState(initialState)

    const handleInputChange = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const handleFormSubmit = event => {
        event.preventDefault()
        setData({
            ...data,
            isSubmitting: true,
            errorMessage: null
        })

        const requestBody = {
            username: data.username,
            email: data.email,
            password: data.password,
            role: data.role
        }

        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }

        axios.post(api + '/auth/api/v1/register', qs.stringify(requestBody), config)
            .then(res => {
                if (res.data.success === true) {
                    dispatch({
                        type: "REGISTER",
                        payload: res.data
                    })
                }
                else {
                    setData({
                        ...data,
                        isSubmitting: false,
                        errorMessage: res.data.Message
                    })
                }

                throw res
            })
    }

    return (
        <Fragment>
            <Container>
                <hr />
                <Col>
                    <h1>Form Registrasi</h1>
                    <hr />
                    <Form onSubmit={handleFormSubmit}>
                        <FormGroup>
                            <Label for="exampleUsername">Username</Label>
                            <Input type="text"
                                value={data.username}
                                onChange={handleInputChange}
                                name="username" id="exampleUsername"
                                placeholder="" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email"
                                value={data.email}
                                onChange={handleInputChange}
                                name="email" id="exampleEmail"
                                placeholder="" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="text"
                                value={data.password}
                                onChange={handleInputChange}
                                name="password" id="examplePassword"
                                placeholder="" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleRole">Role</Label>
                            <Input type="text"
                                value={data.role}
                                onChange={handleInputChange}
                                name="role" id="exampleRole"
                                placeholder="" />
                        </FormGroup>

                        {data.errorMessage && (
                            <div className="alert alert-danger" role="alert">
                                {data.errorMessage}
                            </div>
                        )}

                        <Button disabled={data.isSubmitting}>
                            {data.isSubmitting ? (
                                "..Loading"
                            ) :
                                ( 
                                    "Submit"
                                )
                            }
                        </Button>
                        <Button outline color="primary">
                        <Link to={
                            {
                                pathname: `/`,
                            }
                        }> Login
                        </Link>
                    </Button>
                    </Form>
                </Col>
            </Container>
        </Fragment>
    );
}

export default RegisterComp;