import React, {useEffect, useState} from 'react';
import {Head, Link, useForm} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Button, Col, Form, Modal, Nav, Row} from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import {Icon} from "@iconify/react";
import {Bounce, toast} from "react-toastify";


function Dashboard(props) {
    const [datas, setDatas] = useState([]);
    const [show, setShow] = useState(false);

    const { data, setData, post, processing, errors } = useForm({
        adManagerId: '',
        appId: '',
        accessToken: ''
    });
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        setDatas(props.data.data);
    }, [datas]);



    useEffect(() => {
        if (props.flash.fact.status==200) {
            setDatas(props.data.data);
        }
    }, [props.flash]);



    return (

        <AuthenticatedLayout auth={props.auth} errors={props.errors}
                             header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Ad Manager</h2>}>
            <Head title="AD Manager"/>

            {console.log(datas)}


            <div className="row">
                <div className="mb-3 overflow-hidden position-relative">
                    <div className="px-3"><h4 className="fs-6 mb-0">AD Manager</h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                <li className="breadcrumb-item" aria-current="page">Manage AD managers</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>




            <div className={'mb-2 d-flex align-items-center'}>
                    <Button variant={'primary'} className={'border-primary m-2 rounded-1 d-flex align-items-center'}  onClick={handleShow}>
                        <Icon icon={'ic:outline-add-box'} className={'fw-6'}/>&nbsp;&nbsp;
                        New AD manager
                    </Button>

                    <Button variant={'danger'} className={' m-2'}>Expire Soon</Button>
                    <Button variant={'success'} className={' m-2'}>Well Life</Button>
                    <Button variant={'secondary'} className={' m-2'}>Used</Button>
                    <Button variant={"info"} className={' m-2'}>Unused</Button>
            </div>




            <div className={'card overflow-hidden chat-application p-0 mt-2'}>
                <Tab.Container id="left-tabs-example" defaultActiveKey="0">
                    <Row className={'bg-white'}>
                        <Col lg={3} xs={5} className={'p-0'}>
                            <Nav variant="pills" className="flex-column  m-0 p-0">
                                {datas.map((item, index) => {
                                    return(
                                        <Nav.Item className={'m-0 p-0 adManager'} key={index}>
                                            <Nav.Link eventKey={index} className='p-0 border-1'>
                                                <div className="px-4 py-3 bg-hover-light-black d-flex align-items-start chat-user" id="chat_user_1" data-user-id="1">
                                                    <div className="position-relative w-100 ms-2">
                                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                                            {
                                                                item.user_id==1?<span className="badge text-bg-primary">Usable</span>
                                                                    :
                                                                    <span className="badge text-bg-primary">Occupied</span>
                                                            }

                                                        </div>
                                                        <h6 className="font-monospace text-dark">
                                                            {item.ad_manager}
                                                        </h6>
                                                    </div>
                                                </div>
                                            </Nav.Link>
                                        </Nav.Item>
                                    )
                                })}
                            </Nav>
                        </Col>
                        <Col xm={7} className={' m-0 p-0'}>
                            <Tab.Content>
                                {datas.map((item, index) => {
                                    return(
                                        <Tab.Pane eventKey={index} key={index}>
                                            <div className={'border-bottom text-center py-2 fw-semibold text-white bg-gray-500'}>
                                                ADM ID: {item.ad_manager}
                                            </div>
                                            <div className={'p-3'}>
                                                <p className={' d-flex align-items-center'}>User Name:
                                                    <Link href={'https://meta.business.com/app'} className={'text-orange-400  d-flex align-items-center'}>Hridoy Bhuiyan
                                                    <Icon icon={'fa-solid:external-link-alt'} className={'fw-6'}/>
                                                    </Link>
                                                </p>
                                                <p className={'d-flex align-items-center'}>App ID:
                                                    <span>
                                                        <a target={'_blank'} className={'text-orange-400 d-flex align-items-center'} href={`https://developers.facebook.com/apps/${item.app_id}`}> {item.app_id}
                                                            <Icon icon={'fa-solid:external-link-alt'} className={'fw-6'}/>
                                                        </a>
                                                    </span>
                                                </p>
                                                <p>Total Spend: <span className={'text-dark'}>${item.current_spend}</span></p>

                                                <Form >
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label>Token Managment</Form.Label>
                                                        <Form.Control type="text" defaultValue={item.access_token}/>
                                                    </Form.Group>
                                                    <Button variant={'danger'} className={'rounded-1 w-100'}>Update Token</Button>
                                                    <Form.Text className="text-muted">
                                                        Update Token Before Expire it.
                                                    </Form.Text>
                                                </Form>

                                                <p className={'mt-2'}>
                                                    Access Token Expire on: <span className={'text-dark'}>{item.token_expired_on}</span>
                                                </p>
                                            </div>

                                        </Tab.Pane>
                                    )
                                })}
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>

            <div className="pagination">
                {props.data.links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.url ?? '#'}
                        className={`px-2 py-1 mx-1 rounded ${link.active ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                ))}
            </div>






            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>ADD New AD Manager</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={e => {
                        e.preventDefault();
                        post(route('ad.managerAdd'));
                    }}>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="firstName1">AD Manager ID :</label>
                            <input
                                type="number"
                                name="adManagerId"
                                className="form-control"
                                placeholder="AD Manager ID here"
                                value={data.adManagerId}
                                onChange={e => setData('adManagerId', e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="lastName1">APP ID :</label>

                            <input
                                type="number"
                                name="appId"
                                className="form-control"
                                placeholder="APP Manager ID here"
                                value={data.appId}
                                onChange={e => setData('appId', e.target.value)}
                            />

                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="lastName1">Access token :</label>
                            <input
                                type="text"
                                name="accessToken"
                                className="form-control"
                                placeholder="Access Token here"
                                value={data.accessToken}
                                onChange={e => setData('accessToken', e.target.value)}
                            />
                        </div>

                        <Form.Text className="text-info">
                            Make Sure All given information is correct.
                        </Form.Text>

                        <hr/>

                        <div className={'d-flex align-items-center justify-content'}>

                            <Button type={'submit'} variant="primary" className={'w-50 mr-1'} onClick={handleClose} disabled={processing}>
                                ADD New Item
                            </Button>
                            <Button type={'button'} className={'w-25 ml-1'} variant="danger" onClick={handleClose}>
                                Close
                            </Button>

                        </div>
                    </Form>
                </Modal.Body>

            </Modal>


        </AuthenticatedLayout>
    );
}

export default Dashboard;
