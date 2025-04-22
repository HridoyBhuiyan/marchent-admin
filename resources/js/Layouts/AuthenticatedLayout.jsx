import {Fragment, useState} from 'react';
import {Link, router} from '@inertiajs/react';
import {Button, Image, Modal, Tooltip} from "react-bootstrap";
import {Icon} from "@iconify/react";

export default function Authenticated({ auth, header, children }) {

    const [show, setShow]=useState(false);
    const [showSidebar, setShowSidebar]=useState("");
    const [controlBG, setControlBG]=useState("#F6F9FB")
    const handleSidebar=()=>{
        if (showSidebar==""){
            setShowSidebar('show-sidebar')
            setControlBG('rgba(59,59,59,0.73)')
        }
        else {
            setShowSidebar('')
            setControlBG('#F6F9FB')
        }
    }
    const handleBG=()=>{
        if (showSidebar=="show-sidebar"){
            setShowSidebar('')
            setControlBG('#F6F9FB')
        }
    }
    return (
                    <Fragment>
                        <div data-sidebartype="" cz-shortcut-listen="true">
                            <div id="main-wrapper" className={showSidebar}>
                                <aside className="left-sidebar with-vertical">
                                    <div className="brand-logo d-flex align-items-center justify-content-between">
                                        <Link href="" className="text-nowrap logo-img">
                                            <Image
                                                src="https://bootstrapdemos.wrappixel.com/spike/dist/assets/images/logos/logo-light.svg"
                                                className="dark-logo" alt="Logo-Dark"/>
                                        </Link>
                                        <Button onClick={handleSidebar}
                                              className="sidebartoggler ms-auto text-decoration-none fs-5 d-block d-xl-none bg-white border-0 text-black">
                                            <Icon icon={"ic:baseline-close"} className={'fs-8'}/>
                                        </Button>
                                    </div>

                                    <div className="scroll-sidebar">
                                        <nav className="sidebar-nav">
                                            <ul id="sidebarnav" className="mb-0">
                                                <li className="sidebar-item">
                                                    <Link href={route('dashboard')} method={'get'} className="sidebar-link sidebar-link primary-hover-bg" id="get-url">
                                                    <span className="aside-icon p-2 bg-primary-subtle rounded-1">
                                                        <Icon icon="solar:screencast-2-line-duotone" className="fs-6"/>
                                                    </span>
                                                        <span className="hide-menu ps-1">Dashboard</span>
                                                    </Link>
                                                </li>



                                                <li className="sidebar-item">
                                                    <Link className="sidebar-link sidebar-link primary-hover-bg"
                                                          href={route('fund.page')} id="get-url">
                                                    <span className="aside-icon p-2 bg-primary-subtle rounded-1">
                                                        <Icon icon="material-symbols:request-page" className="fs-6"/>
                                                    </span>
                                                        <span className="hide-menu ps-1">Fund Requests</span>
                                                    </Link>
                                                </li>


                                                <li className="sidebar-item">
                                                    <Link className="sidebar-link sidebar-link primary-hover-bg"
                                                          href={route('ad.manager')} id="get-url">
                                                    <span className="aside-icon p-2 bg-primary-subtle rounded-1">
                                                        <Icon icon="fluent-mdl2:functional-manager-dashboard" className="fs-6"/>
                                                    </span>
                                                        <span className="hide-menu ps-1">AD Managers</span>
                                                    </Link>
                                                </li>


                                                <li className="sidebar-item">
                                                    <Link className="sidebar-link sidebar-link primary-hover-bg"
                                                          href={route('merchant.page')} id="get-url">
                                                    <span className="aside-icon p-2 bg-primary-subtle rounded-1">
                                                        <Icon icon="wpf:administrator" className="fs-6"/>
                                                    </span>
                                                        <span className="hide-menu ps-1">Merchants</span>
                                                    </Link>
                                                </li>

                                                <li className="sidebar-item">
                                                    <Link className="sidebar-link sidebar-link primary-hover-bg"
                                                          href="#" id="get-url">
                                                    <span className="aside-icon p-2 bg-primary-subtle rounded-1">
                                                        <Icon icon="iconoir:profile-circle" className="fs-6"/>
                                                    </span>
                                                        <span className="hide-menu ps-1">My Profile</span>
                                                    </Link>
                                                </li>




                                            </ul>
                                        </nav>
                                    </div>

                                    <Link className="bg-white border-0 p-0 m-0 fixed-profile mx-3 mt-3 btn"
                                          href={route('logout')} method="post" as={'div'}>
                                        <div className="card bg-primary-subtle mb-0 shadow-none">
                                            <div className="card-body p-4">
                                                <div
                                                    className="d-flex align-items-center justify-content-between gap-3">
                                                    <div className="d-flex align-items-center gap-3">
                                                        <Image
                                                            src="https://bootstrapdemos.wrappixel.com/spike/dist/assets/images/profile/user-1.jpg"
                                                            width="45" height="45" className="img-fluid rounded-circle"
                                                            alt="spike-img"/>
                                                        <div>
                                                            <h5 className="mb-1">{auth.user.name.split(' ')[0]}</h5>
                                                            <p className="mb-0">Logout</p>
                                                        </div>
                                                    </div>
                                                    <Link href="" className="position-relative">
                                                        <Icon icon="solar:logout-line-duotone" className="fs-8"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </aside>
                                <div className="page-wrapper">
                                    <div className="body-wrapper" style={{background:controlBG}} onClick={handleBG}>
                                        <div className="container-fluid">
                                            <header className="topbar sticky-top">
                                                <div className="with-vertical">
                                                    <nav className="navbar navbar-expand-lg p-0">
                                                        <ul className="navbar-nav">
                                                            <li className="nav-item nav-icon-hover-bg rounded-circle"
                                                                onClick={handleSidebar}>
                                                                <div className="nav-link sidebartoggler"
                                                                     id="headerCollapse">
                                                                    <Icon icon="solar:list-bold-duotone"
                                                                          className="fs-7"/>
                                                                </div>
                                                            </li>
                                                        </ul>

                                                        <ul className="navbar-nav quick-links d-none d-lg-flex align-items-center">
                                                            <li className="nav-item dropdown-hover d-none d-lg-block me-2">
                                                                <Link className="nav-link position-relative" href=""
                                                                      id="drop3" aria-expanded="false">
                                                                    <Icon icon="solar:chat-dots-line-duotone"
                                                                          className="fs-5"/>
                                                                    <div className="pulse">
                                                                        <span
                                                                            className="heartbit border-warning"></span>
                                                                        <span className="point text-bg-warning"></span>
                                                                    </div>
                                                                    &nbsp;&nbsp;Chat
                                                                </Link>
                                                            </li>
                                                        </ul>

                                                        <div className="d-block d-lg-none py-3">
                                                            <Image
                                                                src="https://bootstrapdemos.wrappixel.com/spike/dist/assets/images/logos/logo-light.svg"
                                                                className="dark-logo" alt="Logo-Dark"/>
                                                        </div>
                                                        <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-center">


                                                            <li className="nav-item dropdown">
                                                                <Button
                                                                    className="nav-link position-relative ms-6 bg-white shadow-none"
                                                                    onClick={() => setShow(true)}>
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-start flex-shrink-0">
                                                                        <div className="user-profile me-sm-3 me-2">
                                                                            <Image
                                                                                src="https://bootstrapdemos.wrappixel.com/spike/dist/assets/images/profile/user-1.jpg"
                                                                                width="40" className="rounded-circle"
                                                                                alt="spike-img"/>
                                                                        </div>
                                                                        <span className="d-sm-none d-block">
                                                                                <Icon
                                                                                    icon="solar:alt-arrow-down-line-duotone"/>
                                                                            </span>
                                                                        <div className="d-none d-sm-block">
                                                                            <h6 className="fs-4 mb-1 profile-name">
                                                                                {auth.user.name}
                                                                            </h6>
                                                                            <div
                                                                                className="fs-3 lh-base mb-0 profile-subtext text-start">
                                                                                Marchent
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Button>


                                                            </li>
                                                        </ul>
                                                    </nav>

                                                </div>
                                                <div className="app-header with-horizontal">
                                                    <nav className="navbar navbar-expand-xl container-fluid p-0">
                                                        <ul className="navbar-nav">
                                                            <li className="nav-item d-none d-xl-block">
                                                                <Link href="/" className="text-nowrap nav-link">
                                                                    <Image
                                                                        src="https://bootstrapdemos.wrappixel.com/spike/dist/assets/images/logos/logo-light.svg"
                                                                        className="dark-logo" width="180"
                                                                        alt="spike-img"/>
                                                                </Link>
                                                            </li>
                                                        </ul>

                                                    </nav>
                                                </div>
                                            </header>

                                            <div className="row">
                                                {children}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <Modal show={show} onHide={() => setShow(false)}>

                                <Modal.Header closeButton className={'pb-0'}>
                                    <Modal.Title>User Profile</Modal.Title>
                                </Modal.Header>
                                <Modal.Body className={'pt-0'}>
                                    <div>
                                        <div className="profile-dropdown position-relative" data-simplebar>
                                            <div className="d-flex align-items-center mx-7 py-9 border-bottom">
                                                <Image
                                                    src="https://bootstrapdemos.wrappixel.com/spike/dist/assets/images/profile/user-1.jpg"
                                                    alt="user" width="90" className="rounded-circle"/>
                                                <div className="ms-4">
                                                    <h4 className="mb-0 fs-5 fw-normal">{auth.user.name}</h4>
                                                    <span className="text-muted">super admin</span>
                                                    <p className="text-muted mb-0 mt-1 d-flex align-items-center">
                                                        <Icon icon="solar:mailbox-line-duotone" className="fs-4 me-1"/>
                                                        {auth.user.email}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </Modal.Body>
                                <Modal.Footer className={'d-inline text-center'}>
                                    <Button variant="danger" onClick={() => setShow(false)} className={'w-5/12'}>
                                        Logout
                                    </Button>
                                    <Button variant="secondary" onClick={() => setShow(false)} className={'w-5/12'}>
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </Fragment>
    );
}
