import {Component} from "react";
import {Button, Form, FormControl, Image, Nav, Navbar} from 'react-bootstrap';
import '../../../style/pages/dashboard/header/Header.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="md" variant="dark" sticky="top" className="headerLightColor">
                <Navbar.Brand href="/">
                    {/*Logo?*/}
                    <Image src="IMG_1750.jpeg" rounded width="50" height="50" />
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
                <Nav className="ml-auto orientationOnMobile">
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2 hideOnMobile"/>
                        <Button variant="outline-warning" className="hideOnMobile">
                            <FontAwesomeIcon icon="search"/>
                        </Button>
                    </Form>
                    &nbsp;
                    &nbsp;
                    <Navbar.Text>
                        Hello Admin,
                    </Navbar.Text>
                    &nbsp;
                    <Nav.Link>
                        Logout
                    </Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default Header;