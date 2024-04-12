import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import Checkbox from '@/Components/Checkbox';

interface Props extends ClassName {
    mustVerifyEmail: boolean;
    status?: 'verification-link-sent'
}

export default function UpdateProfileInformation({ mustVerifyEmail, status, className = '' }: Props) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        FirstName: user.FirstName,
        LastName: user.LastName,
        Address1: user.Address1,
        Address2: user.Address2,
        City: user.City,
        Province: user.Province,
        PostalCode: user.PostalCode,
        VoiceMail: user.VoiceMail,
        email: user.email,
        Phone: user.Phone,
    });

    const submit = (e: FormEvent) => {
        e.preventDefault();

        patch(route('profile.update'));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Profile Information</h2>
                <p className="mt-1 text-sm text-gray-600">
                    Update your account's profile information and email address.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
            {/* <div>
                    <InputLabel htmlFor="Role" value="Role" />

                    <TextInput
                        id="Role"
                        className="mt-1 block w-full"
                        value={data.Role}
                        onChange={(e) => setData('Role', e.target.value)}
                        required
                        isFocused
                        autoComplete="Role"
                    />

                    <InputError className="mt-2" message={errors.Role} />
                </div> */}

                <div>
                    <InputLabel htmlFor="FirstName" value="First Name" />

                    <TextInput
                        id="FirstName"
                        className="mt-1 block w-full"
                        value={data.FirstName}
                        onChange={(e: ChangeEvent) => setData('FirstName', e.target.value)}
                        required
                        autoComplete="FirstName"
                    />

                    <InputError className="mt-2" message={errors.FirstName} />
                </div>

                <div>
                    <InputLabel htmlFor="LastName" value="Last Name" />

                    <TextInput
                        id="LastName"
                        className="mt-1 block w-full"
                        value={data.LastName}
                        onChange={(e: ChangeEvent) => setData('LastName', e.target.value)}
                        required
                        autoComplete="LastName"
                    />

                    <InputError className="mt-2" message={errors.LastName} />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e: ChangeEvent) => setData('email', e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>

                <div>
                    <InputLabel htmlFor="Address1" value="Address 1" />

                    <TextInput
                        id="Address1"
                        className="mt-1 block w-full"
                        value={data.Address1}
                        onChange={(e: ChangeEvent) => setData('Address1', e.target.value)}
                        required
                        autoComplete="Address1"
                    />

                    <InputError className="mt-2" message={errors.Address1} />
                </div>

                
                <div>
                    <InputLabel htmlFor="Address2" value="Address 2" />

                    <TextInput
                        id="Address2"
                        className="mt-1 block w-full"
                        value={data.Address2}
                        onChange={(e: ChangeEvent) => setData('Address2', e.target.value)}
                        autoComplete="Address2"
                    />

                    <InputError className="mt-2" message={errors.Address2} />
                </div>

                <div>
                    <InputLabel htmlFor="City" value="City" />

                    <TextInput
                        id="City"
                        className="mt-1 block w-full"
                        value={data.City}
                        onChange={(e: ChangeEvent) => setData('City', e.target.value)}
                        required
                        autoComplete="City"
                    />

                    <InputError className="mt-2" message={errors.City} />
                </div>


                <div>
                    <InputLabel htmlFor="Province" value="Province" />

                    <TextInput
                        id="Province"
                        className="mt-1 block w-full"
                        value={data.Province}
                        onChange={(e: ChangeEvent) => setData('Province', e.target.value)}
                        required
                        autoComplete="Province"
                    />

                    <InputError className="mt-2" message={errors.Province} />
                </div>

                
                <div>
                    <InputLabel htmlFor="PostalCode" value="Postal Code" />

                    <TextInput
                        id="PostalCode"
                        className="mt-1 block w-full"
                        value={data.PostalCode}
                        onChange={(e: ChangeEvent) => setData('PostalCode', e.target.value)}
                        required
                        autoComplete="PostalCode"
                    />

                    <InputError className="mt-2" message={errors.PostalCode} />
                </div>

                <div>
                    <InputLabel htmlFor="Phone" value="Phone" />

                    <TextInput
                        id="Phone"
                        className="mt-1 block w-full"
                        value={data.Phone}
                        onChange={(e: ChangeEvent) => setData('Phone', e.target.value)}
                        required
                        autoComplete="Phone"
                    />

                    <InputError className="mt-2" message={errors.Phone} />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="VoiceMail" value="Voice Mail" />

                    <Checkbox
                        id="VoiceMail"
                        name="VoiceMail"
                        checked={data.VoiceMail} // Use checked instead of value
                        className="mt-1"
                        autoComplete="VoiceMail"
                        onChange={(e: ChangeEvent) => setData('VoiceMail', e.target.checked)} // Use e.target.checked
                    />

                    <InputError message={errors.VoiceMail} className="mt-2" />
                </div>

               

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="text-sm mt-2 text-gray-800">
                            Your email address is unverified.
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mt-2 font-medium text-sm text-green-600">
                                A new verification link has been sent to your email address.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
