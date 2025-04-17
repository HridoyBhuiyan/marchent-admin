import React, {Fragment, useEffect, useState} from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import {Accordion, Button, Card, Col, Form, Image, Row} from "react-bootstrap";
import {Icon} from "@iconify/react";
import {Link, useForm} from "@inertiajs/react";
import {ToastContainer, toast, Bounce} from 'react-toastify';


function FundManagement(props) {
    const [getData, setGetData] = useState([]);


    const { data, setData, post, processing } = useForm({
        userID: "",
        amountExtend: "",
        adManager: "",
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("fund.update"));
    };

    useEffect(()=>{
        setGetData(props.fundData)
    },[getData])



    useEffect(() => {
        if (props.flash.fact.status==200){
            setGetData(props.fundData)
            toast.success(props.flash.fact.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
        }
    }, [props.flash]);





    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors} header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">My ADs</h2>}>

            <Fragment>
                <div className="mb-3 overflow-hidden position-relative">
                    <div className="px-3">
                        <h4 className="fs-6 mb-0">New Fund Request</h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item">
                                    <a href="/">Home</a>
                                </li>
                                <li className="breadcrumb-item" aria-current="page">Fund Management</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <Row className={'m-0 p-0 '}>

                    {getData.map((allData, key)=>{
                        return(
                            <Col key={key} lg={12} xl={12}>
                                <Accordion>
                                    <Accordion.Item eventKey={key}>
                                        <Accordion.Header className={'fundActive'}>
                                            <Row className={'w-100 '}>
                                                <Col lg={5} md={5} sm={5} className={'align-items-center d-flex'}>
                                                    <Image
                                                        src={allData.user.avatar}
                                                        className="rounded-circle"
                                                        width="40" height="40"/>
                                                    <div>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;{allData.user.name}
                                                    </div>
                                                </Col>
                                                <Col lg={5} md={5} sm={5} className={'align-items-center d-flex'}>
                                                    ৳{JSON.parse(allData.transaction_history).amount}
                                                </Col>
                                            </Row>
                                        </Accordion.Header>

                                        <Accordion.Body>



                                            <Form onSubmit={handleSubmit}>
                                                <Row>
                                                    <Col lg={4} className={'border-r-2'}>
                                                        <div
                                                            className="d-flex align-items-center justify-content-between mt-7 mb-3">
                                                            <div className="d-flex align-items-center gap-3">
                                                                <div
                                                                    className="text-bg-light rounded-1 p-6 d-flex align-items-center justify-content-center">
                                                                    <Icon icon={'fluent-mdl2:task-manager'} className="ti ti-package text-dark d-block fs-7" width="22" height="22"/>
                                                                </div>
                                                                <div>
                                                                    <p className="mb-0">AD Manager ID</p>
                                                                    <h5 className="fs-4 text-orange-400 fw-semibold">{allData.ad_manager}</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p className={''}>25/03/2025 18:23</p>

                                                        <Link href={''} className={"d-flex align-items-center text-teal-700"}>
                                                            <p className={'mb-0'}>Merchant Profile Link&nbsp;&nbsp; </p>
                                                            <Icon icon={'heroicons:link'} className={'fs-6'}/>
                                                        </Link>
                                                    </Col>

                                                    <Col lg={4} className={'border-r-2'}>
                                                        <div className="d-flex align-items-center justify-content-between mt-7 mb-3">
                                                            <div className="gap-3">
                                                                <div>
                                                                    Fund Claim:
                                                                    <span
                                                                        className="h5 fs-4 fw-semibold pb-3"> ৳{JSON.parse(allData.transaction_history).amount} = ${JSON.parse(allData.transaction_history).amount/130} </span>
                                                                    <br/>
                                                                    Payment method:
                                                                    <span className="h5 fs-4 fw-semibold"> {JSON.parse(allData.transaction_history).method} </span>
                                                                </div>

                                                                <div className={'pt-3'}>
                                                                    Payment Proof:
                                                                    <Image src="https://bootstrapdemos.wrappixel.com/spike/dist/assets/images/products/product-9.png"
                                                                        className="img-fluid flex-shrink-0" width="60"
                                                                        height="60"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>

                                                    <Col lg={4}>
                                                        {processing?
                                                        <div className={'bg-gray-500 align-items-center justify-center d-flex h-100 rounded-3'}>
                                                            <Icon icon={'eos-icons:loading'} className={'fs-8 text-white'}/>
                                                            <div className={'text-white text-xl'}>Submitting...</div>
                                                        </div>
                                                            :
                                                        <div className="d-flex align-items-center justify-content-between mt-7 mb-3">
                                                            <div className="gap-3">
                                                                <div>
                                                                    Add Fund:
                                                                    <div className="form-group pt-2">
                                                                        <input type="number" className="form-control rounded-2"
                                                                               defaultValue={JSON.parse(allData.transaction_history).amount}
                                                                               id={`extendedAmountID${allData.user_id}`}
                                                                        />
                                                                    </div>
                                                                </div>

                                                                <div className={'pt-3'}>
                                                                    <div className="form-group">
                                                                        <Button
                                                                            className={'btn rounded-2 w-100'} type={'submit'}
                                                                            onClick={()=> {
                                                                                setData('userID', allData.id)
                                                                                setData('adManager', allData.ad_manager)
                                                                                setData('amountExtend', document.getElementById(`extendedAmountID${allData.user_id}`).value)
                                                                            }}
                                                                        >Add With Last Limit</Button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        }
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </Accordion.Body>

                                    </Accordion.Item>
                                </Accordion>
                            </Col>
                        )
                    })}
                </Row>
            </Fragment>

            <ToastContainer/>

        </AuthenticatedLayout>
    );
}

export default FundManagement;
