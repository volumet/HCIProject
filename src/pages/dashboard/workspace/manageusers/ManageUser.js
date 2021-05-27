import {Component} from "react";
import "../../../../style/pages/dashboard/workspace/manageusers/ManageUser.css";
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import {Button, ButtonGroup, Col, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, {selectFilter} from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

const data = [{
    id: "user1",
    username: "thisisuser1",
    password: "user1password",
    dob: "01/01/2000",
    email: "user1@gmail.com",
    fullName: "User One",
    isAdmin: false,
    isActive: true
},
    {
        id: "user2",
        username: "thisisuser2",
        password: "user2password",
        dob: "02/02/2000",
        email: "user2@gmail.com",
        fullName: "User Two",
        isAdmin: false,
        isActive: true
    },
    {
        id: "user3",
        username: "thisisuser3",
        password: "user3password",
        dob: "03/03/2000",
        email: "user3@gmail.com",
        fullName: "User Three",
        isAdmin: false,
        isActive: true
    },
    {
        id: "admin",
        username: "thisisadmin",
        password: "adminpassword",
        dob: "10/10/2000",
        email: "admin@gmail.com",
        fullName: "Mr Admin",
        isAdmin: true,
        isActive: true
    },
    {
        id: "admin",
        username: "thisisadmin",
        password: "adminpassword",
        dob: "10/10/2000",
        email: "admin@gmail.com",
        fullName: "Mr Admin",
        isAdmin: true,
        isActive: true
    },
    {
        id: "admin",
        username: "thisisadmin",
        password: "adminpassword",
        dob: "10/10/2000",
        email: "admin@gmail.com",
        fullName: "Mr Admin",
        isAdmin: true,
        isActive: true
    },
    {
        id: "admin",
        username: "thisisadmin",
        password: "adminpassword",
        dob: "10/10/2000",
        email: "admin@gmail.com",
        fullName: "Mr Admin",
        isAdmin: true,
        isActive: true
    },
    {
        id: "admin",
        username: "thisisadmin",
        password: "adminpassword",
        dob: "10/10/2000",
        email: "admin@gmail.com",
        fullName: "Mr Admin",
        isAdmin: true,
        isActive: true
    },
    {
        id: "admin",
        username: "thisisadmin",
        password: "adminpassword",
        dob: "10/10/2000",
        email: "admin@gmail.com",
        fullName: "Mr Admin",
        isAdmin: true,
        isActive: true
    },
    {
        id: "admin",
        username: "thisisadmin",
        password: "adminpassword",
        dob: "10/10/2000",
        email: "admin@gmail.com",
        fullName: "Mr Admin",
        isAdmin: true,
        isActive: true
    },
    {
        id: "admin",
        username: "thisisadmin",
        password: "adminpassword",
        dob: "10/10/2000",
        email: "admin@gmail.com",
        fullName: "Mr Admin",
        isAdmin: true,
        isActive: true
    },
    {
        id: "admin",
        username: "thisisadmin",
        password: "adminpassword",
        dob: "10/10/2000",
        email: "admin@gmail.com",
        fullName: "Mr Admin",
        isAdmin: true,
        isActive: true
    },
    {
        id: "admin",
        username: "thisisadmin",
        password: "adminpassword",
        dob: "10/10/2000",
        email: "admin@gmail.com",
        fullName: "Mr Admin",
        isAdmin: true,
        isActive: true
    },
]

class ManageUser extends Component {
    render() {
        const { SearchBar } = Search;

        let columns = [];
        const keyFieldProp = 'ITEM_KEY_REACT';
        const detailUsers = data;
        if (detailUsers.length > 0) {
            columns = [
                {
                    dataField: 'id',
                    text: 'Id',
                    sort: true,
                    filter: selectFilter({
                        options: [...new Set(detailUsers.map(x => x.id))].map(x => ({value: x, label: x}))
                    }),
                    headerStyle: () => ({width: '25%'})
                },
                {
                    dataField: 'fullName',
                    text: 'Full Name',
                    sort: true,
                    filter: selectFilter({
                        options: [...new Set(detailUsers.map(x => x.fullName))].map(x => ({value: x, label: x}))
                    }),
                    headerStyle: () => ({width: '25%'})
                },
                {
                    dataField: 'dob',
                    text: 'DoB',
                    sort: true,
                    filter: selectFilter({
                        options: [...new Set(detailUsers.map(x => x.dob))].map(x => ({value: x, label: x}))
                    }),
                    headerStyle: () => ({width: '25%'})
                },
                {
                    dataField: 'email',
                    text: 'Email',
                    sort: true,
                    filter: selectFilter({
                        options: [...new Set(detailUsers.map(x => x.email))].map(x => ({value: x, label: x}))
                    }),
                    headerStyle: () => ({width: '25%'})
                },
                {
                    dataField: 'isAdmin',
                    text: 'Is Admin',
                    sort: true,
                    filter: selectFilter({
                        options: [...new Set(detailUsers.map(x => x.isAdmin.toString()))].map(x => ({
                            value: x,
                            label: x
                        }))
                    }),
                    headerStyle: () => ({width: '25%'})
                },
                {
                    dataField: 'isActive',
                    text: 'Is Active',
                    sort: true,
                    filter: selectFilter({
                        options: [...new Set(detailUsers.map(x => x.isActive.toString()))].map(x => ({
                            value: x,
                            label: x
                        }))
                    }),
                    headerStyle: () => ({width: '25%'})
                },
                {
                    dataField: '',
                    text: '',
                    formatter: () =>
                        (
                            <div className="text-right">
                                <Button variant="primary" size="sm">
                                    <FontAwesomeIcon icon="pencil-alt"/>
                                    <span className="d-none d-md-inline">
                                        Update
                                        </span>
                                </Button>
                                <Button variant="danger" size="sm">
                                    <FontAwesomeIcon icon="trash"/>
                                    <span className="d-none d-md-inline">
                                        Ban
                                        </span>
                                </Button>
                            </div>
                        ),
                }
            ]
        }

        return (
            <div>
                <Row className="manageUserTitle">
                    <Col xl={1}/>
                    <Col xl={5}>
                        <p>
                            Manage Users:
                        </p>
                    </Col>
                </Row>
                <Row className="addTableMargin">
                    <ToolkitProvider
                        keyField="id"
                        data={ detailUsers }
                        columns={ columns }
                        search
                    >
                        {
                            props => (
                                <div>
                                    <h3>Search here:</h3>
                                    <SearchBar { ...props.searchProps } />
                                    <hr />
                                    <BootstrapTable
                                        { ...props.baseProps }
                                        keyField={keyFieldProp}
                                        data={detailUsers}
                                        columns={columns}
                                        striped
                                        filter={filterFactory()}
                                        pagination={paginationFactory()}
                                        bootstrap4
                                        defaultSorted={[
                                            {
                                                dataField: 'fullName',
                                                order: 'asc'
                                            }
                                        ]}
                                        wrapperClasses={'table-responsive'}
                                    />
                                </div>
                            )
                        }
                    </ToolkitProvider>
                </Row>
            </div>
        );
    }
}

export default ManageUser;