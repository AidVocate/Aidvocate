import NavBar from '@/Components/NavBar';

export default function Guest({ children }: Children) {
    return (
        <>
            <NavBar routes={[
                {name: "Login", route: "login"},
                {name: "Register", route: "register"}
            ]}/>
            <div className="w-full mx-auto sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </>
    );
}
