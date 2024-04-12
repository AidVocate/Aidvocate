import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import AdminDashboard from './Admin/Index';
import ClientDashboard from './Client/Index';
import LawyerDashboard from './Lawyer/Index';
import PBODashboard from './PBO/Index';
import Container from '@mui/material/Container';

export default function Dashboard({ auth }: inertia.Auth) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={"Dashboard"}
        >
            <Head title="Dashboard" />
            <Container>
                <RoleDashboard role={auth.user.Role}/>
                <div className="mx-auto max-w-screen-lg my-20 bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900">You're logged in!</div>
                </div>
            </Container>
        </AuthenticatedLayout>
    );
}

function RoleDashboard({role = ""}) {
    switch (role) {
        case "Admin":
            return (<AdminDashboard/>)
        case "Client":    
            return (<ClientDashboard/>)
        case "Lawyer":   
            return (<LawyerDashboard/>)
        case "PBO":
            return (<PBODashboard/>)
        default:
            return (<></>)
    }
}