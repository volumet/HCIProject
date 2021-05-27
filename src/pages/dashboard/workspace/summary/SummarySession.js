import {Component} from "react";
import SummaryUsers from "./SummaryUsers";
import {Col, Row} from "react-bootstrap";
import "../../../../style/pages/dashboard/workspace/summary/SummarySession.css"
import SummaryGroups from "./SummaryGroups";

class SummarySession extends Component {
    render() {
        return (
            <div>
                <Row className="generalInfo">
                    <Col xl={1}/>
                    <Col xl={5}>
                        <p>
                            General Information:
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xl={1}/>
                    <Col xl={5}>
                        <SummaryUsers/>
                    </Col>
                </Row>
                <Row>
                    <Col xl={1}/>
                    <Col xl={5}>
                        <SummaryGroups/>
                    </Col>
                </Row>
            </div>

        )
    }
}

export default SummarySession;