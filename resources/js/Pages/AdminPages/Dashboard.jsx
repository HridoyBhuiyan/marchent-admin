import React from 'react';
import {Head} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

function Dashboard(props) {
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors} header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">DashboardPage</h2>}>
            <Head title="DashboardPage" />


        </AuthenticatedLayout>
    );
}

export default Dashboard;
