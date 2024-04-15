import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import Checkbox from '@/Components/Checkbox';
import Typography from '@mui/material/Typography';


export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        FirstName: '',
        LastName: '',
        Address1: '',
        Address2: '',
        City: '',
        Province: '',
        PostalCode: '',
        Phone: '',
        VoiceMail: false,
        email: '',
        password: '',
        password_confirmation: '',
        Role: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e: FormEvent) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />
            <Typography color='primary' className='font-bold' variant='h4'>Register</Typography>
            <form onSubmit={submit}>

            <div className="mt-4">
                    {/* <InputLabel htmlFor="Role" value="Role" /> */}

                    <TextInput
                        id="Role"
                        name="Role"
                        value={data.Role = 'Client'}
                        className="mt-1 block w-full"
                        autoComplete="Role"
                        isFocused={true}
                        onChange={(e: ChangeEvent) => setData('Role', e.target.value)}
                        type="hidden"
                    />

                    <InputError message={errors.FirstName} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="FirstName" value="FirstName" />

                    <TextInput
                        id="FirstName"
                        name="FirstNAme"
                        value={data.FirstName}
                        className="mt-1 block w-full"
                        autoComplete="FirstName"
                        isFocused={true}
                        onChange={(e: ChangeEvent) => setData('FirstName', e.target.value)}
                        required
                    />

                    <InputError message={errors.FirstName} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="LastName" value="LastName" />

                    <TextInput
                        id="LastName"
                        name="LastName"
                        value={data.LastName}
                        className="mt-1 block w-full"
                        autoComplete="LastName"
                        isFocused={true}
                        onChange={(e: ChangeEvent) => setData('LastName', e.target.value)}
                        required
                    />

                    <InputError message={errors.LastName} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="Address1" value="Address 1" />

                    <TextInput
                        id="Address1"
                        name="Address1"
                        value={data.Address1}
                        className="mt-1 block w-full"
                        autoComplete="Address1"
                        isFocused={true}
                        onChange={(e: ChangeEvent) => setData('Address1', e.target.value)}
                        required
                    />

                    <InputError message={errors.Address1} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="Address2" value="Address 2" />

                    <TextInput
                        id="Address2"
                        name="Address2"
                        value={data.Address2}
                        className="mt-1 block w-full"
                        autoComplete="Address2"
                        isFocused={true}
                        onChange={(e: ChangeEvent) => setData('Address2', e.target.value)}

                    />

                    <InputError message={errors.Address2} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="City" value="City" />

                    <TextInput
                        id="City"
                        name="City"
                        value={data.City}
                        className="mt-1 block w-full"
                        autoComplete="City"
                        isFocused={true}
                        onChange={(e: ChangeEvent) => setData('City', e.target.value)}
                        required
                    />

                    <InputError message={errors.City} className="mt-2" />
                </div>


                <div className="mt-4">
                    <InputLabel htmlFor="Province" value="Province" />

                    <TextInput
                        id="Province"
                        name="Province"
                        value={data.Province}
                        className="mt-1 block w-full"
                        autoComplete="Province"
                        isFocused={true}
                        onChange={(e: ChangeEvent) => setData('Province', e.target.value)}
                        required
                    />

                    <InputError message={errors.Province} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="PostalCode" value="Postal Code" />

                    <TextInput
                        id="PostalCode"
                        name="PostalCode"
                        value={data.PostalCode}
                        className="mt-1 block w-full"
                        autoComplete="PostalCode"
                        isFocused={true}
                        onChange={(e: ChangeEvent) => setData('PostalCode', e.target.value)}
                        required
                    />

                    <InputError message={errors.PostalCode} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="Phone" value="Phone" />

                    <TextInput
                        id="Phone"
                        name="Phone"
                        value={data.Phone}
                        className="mt-1 block w-full"
                        autoComplete="Phone"
                        isFocused={true}
                        onChange={(e: ChangeEvent) => setData('Phone', e.target.value)}
                        required
                    />

                    <InputError message={errors.Phone} className="mt-2" />
                </div>


                <div className="mt-4">
                    <InputLabel htmlFor="VoiceMail" value="Voice Mail" />

                    <Checkbox
                        id="VoiceMail"
                        name="VoiceMail"
                        checked={data.VoiceMail} // Use checked instead of value
                        className="mt-1"
                        autoComplete="VoiceMail"
                        isFocused={true}
                        onChange={(e: ChangeEvent) => setData('VoiceMail', e.target.checked)} // Use e.target.checked
                    />

                    <InputError message={errors.VoiceMail} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e: ChangeEvent) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e: ChangeEvent) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e: ChangeEvent) => setData('password_confirmation', e.target.value)}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>


                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
