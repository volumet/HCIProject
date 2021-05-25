import {Component} from 'react';
import Header from "./header/Header";
import {Col, Container, Row} from "react-bootstrap";
import "../../style/pages/dashboard/DashBoard.css"
import Navigation from "./navigation/Navigation";
import {BrowserRouter} from "react-router-dom";
import Switch from "react-bootstrap/Switch";
import {Route} from "react-router";
import SummarySession from "./workspace/summary/SummarySession";
import Footer from "./footer/Footer";

class DashBoard extends Component {
    render() {
        return (
            <div className="main">
                <div className="containWrap">
                    <Row className="header">
                            <Col xl={12} className="removeNavPadding">
                            <Header/>
                        </Col>
                    </Row>
                    <BrowserRouter>
                        <Switch className="removeNavPadding">
                            <Route path="/">
                                <Row>
                                    <Col xl={2} className="removeNavPadding sideBar">
                                        <Navigation/>
                                    </Col>
                                    <Col xl={10} className="summaryBackground">
                                        <Route exact path="/">
                                            <SummarySession/>
                                        </Route>
                                    </Col>
                                </Row>
                            </Route>
                        </Switch>
                    </BrowserRouter>
                </div>
                <Row className="footer paddingFooter footerText">
                    <Col xl={12}>
                        <Footer/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default DashBoard;
