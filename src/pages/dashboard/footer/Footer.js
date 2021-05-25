import {Component} from "react";
import "../../../style/pages/dashboard/footer/Footer.css"
import {Col, Row} from "react-bootstrap";

class Footer extends Component {
    render() {
        return (
            <div className="">
                <Row>
                    <Col xl={1} sm={1}/>
                    <Col xl={4} sm={5} >
                        <h4 className="footerTitle">
                            BLOG SHARING INFORMATION
                        </h4>
                        <ul className="list-unstyled">
                            <li>
                                This is the web admin version of Blog Sharing App.
                                A tool for administrator to manage the activity of the mobile app.
                            </li>
                        </ul>
                    </Col>
                    <Col xl={2} sm={1}/>
                    <Col xl={4} sm={4}>
                        <h4 className="footerTitle">
                            CONTRIBUTORS
                        </h4>
                        <ul className="list-unstyled">
                            <li>Q.Vinh</li>
                            <li>H.Nghia</li>
                            <li>P.Dat</li>
                            <li>H.Long</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xl={1} sm={1}/>
                    <Col xl={9} sm={9} className="credit footerContent">
                        &copy;{new Date().getFullYear()} BLOG SHARING APP | Web Admin | Copyrighted
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Footer;