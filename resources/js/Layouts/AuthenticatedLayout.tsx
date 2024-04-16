import { useEffect } from 'react';
import NavBar from '@/Components/NavBar';
import Footer from '@/Components/Footer';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { usePage } from '@inertiajs/react'
import { useAlertContext } from '@/Contexts/AlertContext';


interface Props extends Children {
    user: inertia.User,
    header: string,
}

export default function Authenticated({ user, header, children }: Props) {
    const { flash } = usePage().props
    // const { addAlert } = useAlertContext()
    // useEffect(() => {
    //     addAlert(flash.message)
    // }, [flash.message]);
    return (
        <>
            <NavBar
                user={user}
                sidebar={true}
                routes={[
                    { name: "Dashboard", route: "dashboard" },
                    { name: "Profile", route: "profile.edit" },
                    { name: "Logout", route: "logout", post: true },
                ]}
            />
            {flash.message && (
                <div className="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3 mb-3" role="alert">{flash.message}</div>
            )}
            <Divider>
                <Typography color='primary' className='font-bold' variant='h4'>{header}</Typography>
            </Divider>
            <main className='mx-auto'>{children}</main>
            <Footer />
        </>
    );
}
