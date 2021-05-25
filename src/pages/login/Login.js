import {Component} from 'react';
import {Button, Form, Col, Row, Container, InputGroup} from "react-bootstrap";
import {login, setToken} from "../../mainpage/MainPageReducer";
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "../../style/pages/login/Login.css"

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    componentDidMount() {
        console.log('DID MOUNTED')
    }

    handleLogin = (event) => {
        event.preventDefault();
        this.props.login(this.state.username, this.state.password)
    }

    handleChange = (event) => {
        const {name, value} = event.target
        console.log(name + " " + value)
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col xl={4}/>
                        <Col xl={4}>
                            <p className="title">Admin Login</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={4}/>
                        <Col xl={8}>
                            <Form onSubmit={event => this.handleLogin(event)}>
                                <Form.Group as={Row} controlId="formUsername">
                                    <Form.Label column sm={1} className="label">Username</Form.Label>
                                    <Col xl={5}>
                                        <InputGroup>
                                            <InputGroup.Prepend className="prepend">
                                                <InputGroup.Text className="prepend"><FontAwesomeIcon icon="user"/></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control type="text"
                                                          className="txtUsername"
                                                          name="username"
                                                          onChange={event => this.handleChange(event)}/>
                                        </InputGroup>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formPassword">
                                    <Form.Label column sm={1} className="label">Password</Form.Label>
                                    <Col xl={5}>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text><FontAwesomeIcon icon="lock"/></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control type="password"
                                                          className="txtPassword"
                                                          name="password"
                                                          onChange={event => this.handleChange(event)}/>
                                        </InputGroup>
                                    </Col>
                                </Form.Group>
                                <Button variant="outline-secondary" className="loginButton" type="submit">
                                    Login
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.MainPageReducer.token
    }
}
const mapDispatchToProps = {
    setToken,
    login
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);