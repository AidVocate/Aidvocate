import { FormEvent } from 'react';
import { Head, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';




interface Props extends inertia.Auth {
    mustVerifyEmail: boolean;
    status?: 'verification-link-sent';
}
export default function CreateLegalNeed({ auth }: Props) {

    const { data, setData, post, processing, errors } = useForm({
        DateOfNextAppearance: '',
        NatureOfAppearance: '',
        ServicesLanguage: '',
        AdditionalInformation: '',
        Question1: '',
        Question2: '',
        Question3: '',
        ReasonForChange: '',
        Signature: '',
        PrintName: '',
        SignDate: new Date().toISOString().slice(0, 10) // Set initial value to today's date

    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        post(route('createLegalNeed'));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={"Create Legal Need"}
        >
            <Head title="CreateLegalNeed" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">

                    <div className="container mx-auto mt-8">
                        <form onSubmit={handleSubmit} className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                            {/* Case Information */}
                            <div className="mt-4">
                                <h2 className="block mb-1">Case Information</h2>
                                <InputError message={errors.NatureOfAppearance} className="mt-2" />
                                <label className="block mb-1">What is the nature of your court appearance?</label>
                                <TextInput
                                    type="text"
                                    id="NatureOfAppearance"
                                    name="NatureOfAppearance"
                                    value={data.NatureOfAppearance}
                                    onChange={(e: ChangeEvent) => setData('NatureOfAppearance', e.target.value)}

                                    className="border border-gray-300 rounded px-4 py-2 w-full"
                                />

                            </div>
                            <div className="mt-4">
                                <InputError message={errors.DateOfNextAppearance} className="mt-2" />
                                <label className="block mb-1">What is the date of your next court appearance?</label>
                                <TextInput
                                    id="DateOfNextAppearance"
                                    name="DateOfNextAppearance"
                                    type="date"
                                    value={data.DateOfNextAppearance}
                                    onChange={(e: ChangeEvent) => setData('DateOfNextAppearance', e.target.value)}

                                    className="border border-gray-300 rounded px-4 py-2 w-full"
                                />

                            </div>

                            <div className="mt-4">
                                <InputError message={errors.ServicesLanguage} className="mt-2" />
                                <label className="block mb-1">Do you need services in another language?</label>
                                <TextInput
                                    type="text"
                                    id="ServicesLanguage"
                                    name="ServicesLanguage"
                                    value={data.ServicesLanguage}
                                    onChange={(e: ChangeEvent) => setData('ServicesLanguage', e.target.value)}
                                    className="border border-gray-300 rounded px-4 py-2 w-full"
                                />
                            </div>
                            <div className="mt-4">
                                <InputError message={errors.AdditionalInformation} className="mt-2" />

                                <span>In one sentence, briefly tell us what your case is about.</span>
                                <TextareaAutosize
                                    name="AdditionalInformation"
                                    value={data.AdditionalInformation}
                                    onChange={(e: ChangeEvent) => setData('AdditionalInformation', e.target.value)}
                                    className="border border-gray-300 rounded px-4 py-2 w-full"
                                />
                            </div>

                            {/* Case Questions */}
                            <div className="mt-4">
                                <h2 className="block mb-1">Additional Information</h2>
                                <span>What are your 3 main questions?</span>
                                <InputError message={errors.Question1} className="mt-2" />
                                <label className="block mb-1">Question 1</label>
                                <TextInput
                                    id="Question1"
                                    name="Question1"
                                    value={data.Question1}
                                    onChange={(e: ChangeEvent) => setData('Question1', e.target.value)}
                                    className="border border-gray-300 rounded px-4 py-2 w-full"
                                />
                            </div>
                            <div className="mt-4">
                                <InputError message={errors.Question2} className="mt-2" />

                                <label className="block mb-1">Question 2</label>
                                <TextInput
                                    type="text"
                                    name="Question2"
                                    value={data.Question2}
                                    onChange={(e: ChangeEvent) => setData('Question2', e.target.value)}
                                    className="border border-gray-300 rounded px-4 py-2 w-full"
                                />
                            </div>
                            <div className="mt-4">
                                <InputError message={errors.Question3} className="mt-2" />

                                <label className="block mb-1">Question 3</label>
                                <TextInput
                                    type="text"
                                    name="Question3"
                                    value={data.Question3}
                                    onChange={(e: ChangeEvent) => setData('Question3', e.target.value)}
                                    className="border border-gray-300 rounded px-4 py-2 w-full"
                                />
                            </div>

                            {/* Legal Representation */}
                            <div className="mt-4">
                                <InputError message={errors.ReasonForChange} className="mt-2" />

                                <span>Do you currently have a
                                    lawyer or other
                                    representative currently
                                    helping you with this case?

                                </span>
                                <label className="block mb-1"><b>If yes,</b> why is that lawyer
                                    no longer assisting you?</label>
                                <TextInput
                                    type="text"
                                    name="ReasonForChange"
                                    value={data.ReasonForChange}
                                    onChange={(e: ChangeEvent) => setData('ReasonForChange', e.target.value)}
                                    className="border border-gray-300 rounded px-4 py-2 w-full"
                                />
                            </div>
                            <h2 className="block mb-1">Signature Block</h2>
                            <div className="mt-4">
                                <InputError message={errors.Signature} className="mt-2" />
                                <label className="block mb-1">Signature</label>
                                <TextInput
                                    type="text"
                                    name="Signature"
                                    value={data.Signature}
                                    onChange={(e: ChangeEvent) => setData('Signature', e.target.value)}
                                    className="border border-gray-300 rounded px-4 py-2 w-full"
                                />
                            </div>
                            <div className="mt-4">
                                <InputError message={errors.PrintName} className="mt-2" />

                                <label className="block mb-1">Print Name</label>
                                <TextInput
                                    type="text"
                                    name="PrintName"
                                    value={data.PrintName}
                                    onChange={(e: ChangeEvent) => setData('PrintName', e.target.value)}
                                    className="border border-gray-300 rounded px-4 py-2 w-full"
                                />
                            </div>
                            <div className="mt-4">
                                <label className="block mb-1">Sign Date</label>
                                <TextInput
                                    id="SignDate"
                                    type="date"
                                    name="SignDate"
                                    value={data.SignDate}
                                    onChange={(e: ChangeEvent) => setData('SignDate', e.target.value)}
                                    className="border border-gray-300 rounded px-4 py-2 w-full"
                                    disabled />
                            </div>

                            <div className='mt-6 flex items-center justify-end gap-x-6'>
                                <PrimaryButton className="ms-4" disabled={processing}>
                                    Create
                                </PrimaryButton>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>

    );
};

