import NavBar from '@/Components/NavBar';
import Footer from '@/Components/Footer';

interface Props extends Children {
    user: inertia.User,
    header: JSX.Element,
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
            <div className="max-w-7xl mx-auto py-1 px-4 sm:px-6 lg:px-8">{header}</div>
            <main>{children}</main>
            <Footer/>
        </>
    );
}
