import {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from "react-redux";
import DashBoard from "../pages/dashboard/DashBoard";
import {setNewName} from "./MainPageReducer";
import Login from "../pages/login/Login";
import "../style/mainpage/MainPage.css"

export class MainPage extends Component {
    componentDidMount() {
        console.log('MAIN PAGE DID MOUNTED')
    }

    handleClick = (name) => {
        this.props.setNewName(name);
    }

    render() {
        const {name, token} = this.props;
        console.log('Rerender')
        if (!token) {
            return <Login/>
        }
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/">
                        <DashBoard/>
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.MainPageReducer.name,
        token: state.MainPageReducer.token
    }
};

const mapDispatchToProps = {
    setNewName
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
