import React, {useState, useMemo, useEffect} from 'react';
import {Table, FormControl, InputGroup, Pagination, Button, Row, Col} from 'react-bootstrap';
import {Head, Link} from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

function Merchants(props) {
    const [data, setData] = useState();
    const [link, setLink] = useState();

    useEffect(() => {
        setData(props.data.data);
        setLink(props.data.links);
    },[data])

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">DashboardPage</h2>}
        >
            <Head title="DashboardPage" />

            <div className="container mt-4">
                <div className="mb-3">
                    <h4>Merchants</h4>
                    <div className="mb-3">
                    <InputGroup>
                        <FormControl placeholder="Search by name or email"/>
                        <InputGroup.Text className={'bg-info text-white'}>Search</InputGroup.Text>
                    </InputGroup>
                        <div className={'bg-white p-3 rounded-1'}>
                            <Row className={'fw-bold text-dark'}>
                                <Col lg={4}>
                                    Name
                                </Col>
                                <Col lg={4}>
                                    Email
                                </Col>
                                <Col lg={4}>
                                    Profile URL
                                </Col>
                            </Row>
                            <hr/>
                        </div>
                    </div>

                    <Table striped bordered hover responsive>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Spend</th>
                            <th>Profile</th>
                        </tr>
                        </thead>

                        <tbody>
                        {data && data?.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>${item.info===null?"No ADM":item.info.limit}</td>
                                    <td><Button>Profile URL</Button></td>
                                </tr>
                            )})}


                        </tbody>


                    </Table>

                    <div className="pagination">
                        {link && link.map((link, index) => (
                            <Link
                                key={index}
                                href={link.url ?? '#'}
                                className={`px-2 py-1 mx-1 rounded ${link.active ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            />
                        ))}
                    </div>


                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Merchants;
