import {Component} from "react";
import {Button} from "react-bootstrap";
import "../../../../style/pages/dashboard/workspace/summary/SummaryUser.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class SummaryUsers extends Component {
    render() {
        return (
            <div>
                <a href="/">
                    <Button variant="outline-dark" className="btnUsersShow">
                        <FontAwesomeIcon icon="user-graduate" size="3x"/> <br/>
                        Current Users: &nbsp;
                        <span style={{
                            color: "#E9633B",
                            fontFamily: "Cambria serif"
                        }}>2500</span>
                    </Button>
                </a>
            </div>
        )
    }
}

export default SummaryUsers;