import {Component} from "react";
import {Button} from "react-bootstrap";
import "../../../../style/pages/dashboard/workspace/summary/SummaryGroup.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class SummaryGroups extends Component {
    render() {
        return (
            <div>
                <a href="/">
                    <Button variant="outline-dark" className="btnGroupsShow">
                        <FontAwesomeIcon icon="users" size="3x"/> <br/>
                        Current Groups: &nbsp;
                        <span style={{
                            color: "#E9633B",
                            fontFamily: "Cambria serif"
                        }}>68</span>
                    </Button>
                </a>
            </div>
        )
    }
}

export default SummaryGroups;