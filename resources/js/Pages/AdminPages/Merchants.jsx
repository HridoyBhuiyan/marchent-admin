import React, {useState, useEffect} from 'react';
import {Table, FormControl, InputGroup, Button, Row, Col, Form, Modal,} from 'react-bootstrap';
import {Head, Link, router, useForm} from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Icon} from "@iconify/react";


function Merchants(props) {
    const [data, setData] = useState();
    const [link, setLink] = useState();
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        console.log(apiUrl);
        setData(props.data.data);
        setLink(props.data.links);
    },[data])

    const searchOnChange=(e)=>{
        let searchQuery = e.target.value;
        if(searchQuery==null){
            console.log("this is from null")
        }
        else {
            console.log("this is from something")
        }
        router.get(route('merchant.page'), { search: searchQuery }, {
            preserveState: true,
            replace: true,
        });
        setData(props.data.data);
        setLink(props.data.links);
    }


    const addNewUser=(e)=>{
        e.preventDefault()
        const userName = document.getElementById("usernameID").value;
        const email = document.getElementById("emailID").value;
        if (userName.trim() !== '' && email.trim() !== ''){
            setLoading(true)
            axios.post('/make-merchant',{
                email: email,
                userName:userName,
            })
                .then((res)=>{

                    if (res.data.data.status==200 && res.data.success==true){
                        setData(props.data.data);
                        setLink(props.data.links);
                        setLoading(false)
                        let id = res.data.data.id;
                        router.visit(`/user/${id}`);
                    }else {
                        setLoading(false)
                        console.log(res.data.data.id);
                    }
                })
        }



    }

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
                    <Row className="mb-3">
                        <Col lg={3}>
                            <Button className={'w-100 rounded-2 d-flex align-items-center justify-center'}  onClick={handleShow}>
                                <Icon icon={'icon-park-outline:add'} className={'fw-6'}/>
                                <span>&nbsp;&nbsp;&nbsp;&nbsp;Add New Merchant</span>
                                </Button>
                        </Col>


                        <Col lg={9}>
                            <InputGroup className={'m-0'}>
                                <FormControl placeholder="Search by name or email" onChange={searchOnChange} className={'rounded-2'}/>
                                <InputGroup.Text className={'bg-info text-white'}>Search</InputGroup.Text>
                            </InputGroup>
                        </Col>




                    </Row>

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
                                    <td><Link href={`/user/${item.id}`} className={'d-flex align-items-center text-primary'}>
                                        <Icon icon={'quill:link-out'}/>&nbsp;
                                        Profile URL
                                    </Link></td>
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


                <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Make New Merchant</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form onSubmit={addNewUser}>
                            <Form.Label htmlFor="inputPassword5">User Name</Form.Label>
                            <Form.Control type="text" placeholder={'User name here'} className={'mb-3'} id={'usernameID'}/>
                            <Form.Label htmlFor="inputPassword5">Email</Form.Label>
                            <Form.Control type="email" placeholder={'Email address here'}  className={'mb-3'} id={'emailID'}/>
                            <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                            <div className={'border-1 p-2 bg-gray-100 rounded-1'}>marchant123</div>

                            <hr/>


                            {
                                loading==true?
                                    <div className={'d-flex justify-content-start'}>
                                        <Button type={"submit"} variant={'secondary'} className={'rounded-1 w-50 mr-2'}>
                                            <div className={'d-flex align-items-center justify-content-center'}>
                                                <Icon icon={'eos-icons:three-dots-loading'} className={'fw-6'}/>
                                                <span>Adding</span>
                                            </div>
                                        </Button>
                                        <Button variant="danger" className={'rounded-1 w-50 ml-2'}>Close</Button>
                                    </div>
                                    :
                                    <div className={'d-flex justify-content-start'}>
                                        <Button type={"submit"} variant={'secondary'} className={'rounded-1 w-50 mr-2'}>
                                            <div>Add Merchant</div>
                                        </Button>
                                        <Button variant="danger" onClick={handleClose} className={'rounded-1 w-50 ml-2'}>Close</Button>
                                    </div>
                            }




                        </Form>


                    </Modal.Body>

                </Modal>




            </div>
        </AuthenticatedLayout>
    );
}

export default Merchants;
