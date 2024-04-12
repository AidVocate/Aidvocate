import NavBar from '@/Components/NavBar';
import Footer from '@/Components/Footer';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

interface Props extends Children {
    user: inertia.User,
    header: string,
}

export default function Authenticated({ user, header, children }: Props) {
    return (
        <>
            <NavBar
                routes={[
                    {name: "Dashboard", route: "dashboard"},
                    {name: "Profile", route: "profile.edit"},
                    {name: "Logout", route: "logout", post: true},
                ]}
            />
            <Divider>
                <Typography color='primary' className='font-bold' variant='h4'>{header}</Typography>
            </Divider>
            <main>{children}</main>
            <Footer/>
        </>
    );
}
