import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import AdminDashboard from './Admin/Index';
import ClientDashboard from './Client/Index';
import LawyerDashboard from './Lawyer/Index';
import PBODashboard from './PBO/Index';
import Container from '@mui/material/Container';
import { useRouteContext } from '@/Contexts/RouteContext';

export default function Dashboard({ auth }: inertia.Auth) {
    const { getDashboard } = useRouteContext()
    const DashboardContent = () => {
        return getDashboard(auth.user)
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={"Dashboard"}
        >
            <Head title="Dashboard" />
            <Container>
                <div className='text-center'>
                    <DashboardContent/>
                </div> 
                <div className="mx-auto max-w-screen-lg my-20 bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900">You're logged in!</div>
                </div>
            </Container>
        </AuthenticatedLayout>
    );
}