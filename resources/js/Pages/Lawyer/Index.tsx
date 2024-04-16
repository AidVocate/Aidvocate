import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Container from '@mui/material/Container';
import { useRouteContext } from '@/Contexts/RouteContext';

export default function Dashboard({ auth }: inertia.Auth) {
    if (!auth) {
        // Handle the case where auth is undefined
        return null; // or render a loading indicator, redirect, etc.
    }
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
                    <DashboardContent />
                </div>
                <div className="mx-auto max-w-screen-lg my-20 bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900"> <h1>Welcome to Lawyer's Dashboard</h1>
                        <p>Here you can manage your cases, clients, and more.</p></div>
                </div>
            </Container>
        </AuthenticatedLayout>
    );
}