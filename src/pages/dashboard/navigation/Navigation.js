import {Col, Nav, Navbar, Row} from "react-bootstrap";
import {Component} from "react";
import "../../../style/pages/dashboard/navigation/Navigation.css"

class Navigation extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="sm" variant="dark">
                <Navbar.Brand/>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="navigation">
                        <Row>
                            <Col xl={12}>
                                <Nav.Link href="/" active>
                                    <p className="text-semi-bold first-element second-element">
                                        Dash Board
                                    </p>
                                </Nav.Link>
                                <Nav.Link href="/manageUser">
                                    <p className="text-semi-bold second-element">
                                        Manage Users
                                    </p>
                                </Nav.Link>
                                <Nav.Link disabled="true">
                                    <p className="text-semi-bold second-element">
                                        Manage Quiz
                                    </p>
                                </Nav.Link>
                                <Nav.Link disabled="true">
                                    <p className="text-semi-bold second-element">
                                        Manage Subjects
                                    </p>
                                </Nav.Link>
                                <Nav.Link disabled="true">
                                    <p className="text-semi-bold second-element">
                                        Setting (Change Pass)
                                    </p>
                                </Nav.Link>
                            </Col>
                        </Row>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default Navigation;