import React, {Fragment} from 'react';
import {Head} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

function UserPage(props) {
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors} header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">DashboardPage</h2>}>
            <Head title="DashboardPage" />
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

                {props.id}

                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="text-center ">
                                    <div className={'d-flex align-items-center justify-content-center w-100'}>
                                    <img src="https://bootstrapdemos.wrappixel.com/spike/dist/assets/images/profile/user-1.jpg" width="110"
                                         className="rounded-3 mb-3" alt="spike-img"/>
                                    </div>
                                    <h5 className="mb-1">Merchant Name</h5>
                                    <span
                                        className="badge bg-primary-subtle text-primary fw-light rounded-pill">Merchant</span>
                                </div>

                                <div className="hstack justify-content-between mt-5">
                                    <div className="d-flex align-items-center">
                      <span className="bg-success-subtle p-6 rounded-3 round-50 hstack justify-content-center">
                        <i className="ti ti-check text-success fs-7"></i>
                      </span>

                                        <div className="ms-3">
                                            <p className="fw-normal text-dark fs-5 mb-0">1.23k</p>
                                            <p className="mb-0 fs-3">Tasks Done</p>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center">
                      <span className="bg-success-subtle p-6 rounded-3 round-50 hstack justify-content-center">
                        <i className="ti ti-cpu text-success fs-7"></i>
                      </span>

                                        <div className="ms-3">
                                            <p className="fw-normal text-dark fs-5 mb-0">568</p>
                                            <p className="mb-0 fs-3">Projects Done</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5">
                                    <div className="pb-1 mb-2 border-bottom">
                                        <h6>Details</h6>
                                    </div>

                                    <ul>
                                        <li className="py-2">
                                            <p className="fw-normal text-dark mb-0">
                                                Name:
                                                <span className="fw-light ms-1">Violet Mendoza</span>
                                            </p>
                                        </li>

                                        <li className="py-2">
                                            <p className="fw-normal text-dark mb-0">
                                                Class:
                                                <span className="fw-light ms-1">12</span>
                                            </p>
                                        </li>

                                        <li className="py-2">
                                            <p className="fw-normal text-dark mb-0">
                                                Section:
                                                <span className="fw-light ms-1">B</span>
                                            </p>
                                        </li>

                                        <li className="py-2">
                                            <p className="fw-normal text-dark mb-0">
                                                Date Of Birth:
                                                <span className="fw-light ms-1">12/12/2002</span>
                                            </p>
                                        </li>

                                        <li className="py-2">
                                            <p className="fw-normal text-dark mb-0">
                                                Parents:
                                                <span className="fw-light ms-1">Joshi David</span>
                                            </p>
                                        </li>

                                        <li className="py-2">
                                            <p className="fw-normal text-dark mb-0">
                                                Phone:
                                                <span className="fw-light ms-1">+ 123 9988568</span>
                                            </p>
                                        </li>

                                        <li className="py-2">
                                            <p className="fw-normal text-dark mb-0">
                                                Email:
                                                <span className="fw-light ms-1">davidzonar@gmail.com</span>
                                            </p>
                                        </li>
                                    </ul>

                                    <div className="row mt-4">
                                        <div className="col-sm-6">
                                            <button type="button"
                                                    className="btn btn-primary w-100 justify-content-center me-2 d-flex align-items-center mb-3 mb-sm-0">
                                                <i className="ti ti-edit fs-5 me-2"></i>
                                                Edit
                                            </button>
                                        </div>
                                        <div className="col-sm-6">
                                            <button type="button"
                                                    className="btn btn-danger w-100 justify-content-center d-flex align-items-center">
                                                <i className="ti ti-trash fs-5 me-2"></i>
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8">

                        <div className="card">
                            <div className="card-body">
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel"
                                         aria-labelledby="home-tab">
                                        <div className="mb-4 border-bottom pb-3">
                                            <h4 className="card-title mb-0">Progress Report</h4>
                                        </div>
                                        <div className="table-responsive overflow-x-auto">
                                            <table className="table align-middle text-nowrap">
                                                <thead>
                                                <tr>
                                                    <th scope="col">Code</th>
                                                    <th scope="col">Subject Name</th>
                                                    <th scope="col">Marks</th>
                                                    <th scope="col">Grade</th>
                                                    <th scope="col">Remarks</th>
                                                </tr>
                                                </thead>
                                                <tbody className="border-top">
                                                <tr>
                                                    <td>
                                                        <p className="fw-normal mb-0 fs-3 text-dark">
                                                            M103
                                                        </p>
                                                    </td>
                                                    <td>
                                                        <p className="text-dark mb-0 fw-normal">
                                                            Mathematics
                                                        </p>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex flex-column">
                                                            <small className="mb-1">90%</small>
                                                            <div className="progress w-100 me-3 bg-success-subtle">
                                                                <div className="progress-bar w-90 text-bg-success"
                                                                     aria-valuenow="90%" aria-valuemin="0"
                                                                     aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p className="fw-bold text-success mb-0">A</p>
                                                    </td>
                                                    <td>
                                                        <p className="fw-bold text-success mb-0">Pass</p>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <p className="fw-normal mb-0 fs-3 text-dark">
                                                            S221
                                                        </p>
                                                    </td>
                                                    <td>
                                                        <p className="text-dark mb-0 fw-normal">
                                                            Science
                                                        </p>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex flex-column">
                                                            <small className="mb-1">70%</small>
                                                            <div className="progress w-100 me-3 bg-warning-subtle">
                                                                <div className="progress-bar w-70 text-bg-warning"
                                                                     aria-valuenow="70%" aria-valuemin="0"
                                                                     aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p className="fw-bold text-warning mb-0">B</p>
                                                    </td>
                                                    <td>
                                                        <p className="fw-bold text-success mb-0">Pass</p>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <p className="fw-normal mb-0 fs-3 text-dark">
                                                            E452
                                                        </p>
                                                    </td>
                                                    <td>
                                                        <p className="text-dark mb-0 fw-normal">
                                                            English
                                                        </p>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex flex-column">
                                                            <small className="mb-1">50%</small>
                                                            <div className="progress w-100 me-3 bg-danger-subtle">
                                                                <div className="progress-bar w-50 text-bg-danger"
                                                                     aria-valuenow="50%" aria-valuemin="0"
                                                                     aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p className="fw-bold text-danger mb-0">C</p>
                                                    </td>
                                                    <td>
                                                        <p className="fw-bold text-success mb-0">Pass</p>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <p className="fw-normal mb-0 fs-3 text-dark">
                                                            B541
                                                        </p>
                                                    </td>
                                                    <td>
                                                        <p className="text-dark mb-0 fw-normal">
                                                            Biology
                                                        </p>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex flex-column">
                                                            <small className="mb-1">25%</small>
                                                            <div className="progress w-100 me-3 bg-primary-subtle">
                                                                <div className="progress-bar w-25 text-bg-primary"
                                                                     aria-valuenow="25%" aria-valuemin="0"
                                                                     aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p className="fw-bold text-primary mb-0">E</p>
                                                    </td>
                                                    <td>
                                                        <p className="fw-bold text-danger mb-0">Fail</p>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="profile" role="tabpanel"
                                         aria-labelledby="profile-tab">
                                        <div className="mb-4 border-bottom pb-3">
                                            <h4 className="card-title mb-0">Fees Report</h4>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-start">
                                            <span className="badge text-bg-primary">Standard</span>
                                            <div className="d-flex justify-content-center">
                                                <sup className="h5 mt-3 mb-0 me-1 text-primary">$</sup>
                                                <h1 className="display-5 mb-0 text-primary">650</h1>
                                                <sub className="fs-6 pricing-duration mt-auto mb-3">/6 month</sub>
                                            </div>
                                        </div>
                                        <ul className="g-2 my-4">
                                            <li className="mb-2 align-middle">
                                                <i className="ti ti-circle-check fs-5 me-2 text-success"></i>
                                                1 Sem Fees
                                            </li>

                                            <li className="mb-2 align-middle">
                                                <i className="ti ti-circle-check fs-5 me-2 text-success"></i>
                                                Included Documents
                                            </li>

                                            <li className="mb-2 align-middle">
                                                <i className="ti ti-circle-check fs-5 me-2 text-success"></i>
                                                Library Fee
                                            </li>

                                            <li className="mb-2 align-middle">
                                                <i className="ti ti-circle-check fs-5 me-2 text-success"></i>
                                                Student Service Fees
                                            </li>
                                        </ul>
                                        <div className="d-flex justify-content-between align-items-center mb-1">
                                            <span>Days</span>
                                            <span>75% Completed</span>
                                        </div>
                                        <div className="progress bg-light-primary mb-1">
                                            <div className="progress-bar bg-primary w-75" role="progressbar"
                                                 aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <span>4 days remaining</span>
                                        <div className="d-grid w-100 mt-4 pt-2">
                                            <button className="btn btn-primary" data-bs-target="#upgradePlanModal"
                                                    data-bs-toggle="modal">
                                                Pay Full Fees
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </Fragment>


        </AuthenticatedLayout>
    );
}

export default UserPage;
