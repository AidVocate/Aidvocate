import React, { FormEvent, useState } from 'react';
import { useForm } from '@inertiajs/inertia-react';
import InputError from '@/Components/InputError';


const ViewLegalNeed = () => {
    const { data, setData, post, errors } = useForm({
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
        SignDate: ''

    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        post(route('createLegalNeed'));
    };

    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4">Legal Need Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Case Information */}
                <div>
                    <label className="block mb-1">Date of Next Appearance *</label>
                    <input
                        type="date"
                        name="DateOfNextAppearance"
                        value={data.DateOfNextAppearance}
                        onChange={(e: ChangeEvent) => setData('DateOfNextAppearance', e.target.value)}
                        
                        className="border border-gray-300 rounded px-4 py-2 w-full"
                    />
                    <InputError message={errors.DateOfNextAppearance} className="mt-2" />
                </div>
                <div>
                    <label className="block mb-1">Nature of Appearance *</label>
                    <input
                        type="text"
                        name="NatureOfAppearance"
                        value={data.NatureOfAppearance}
                        onChange={(e) => setData('NatureOfAppearance', e.target.value)}
                        
                        className="border border-gray-300 rounded px-4 py-2 w-full"
                    />
                    <InputError message={errors.NatureOfAppearance} className="mt-2" />

                </div>
                <div>
                    <label className="block mb-1">Service Language</label>
                    <input
                        type="text"
                        name="ServicesLanguage"
                        value={data.ServicesLanguage}
                        onChange={(e) => setData('ServicesLanguage', e.target.value)}
                        className="border border-gray-300 rounded px-4 py-2 w-full"
                    />
                </div>
                <div>
                    <label className="block mb-1">Additional Information</label>
                    <textarea
                        name="AdditionalInformation"
                        value={data.AdditionalInformation}
                        onChange={(e) => setData('AdditionalInformation', e.target.value)}
                        className="border border-gray-300 rounded px-4 py-2 w-full"
                    />
                </div>

                {/* Case Questions */}
                <div>
                    <label className="block mb-1">Question 1</label>
                    <input
                        type="text"
                        name="Question1"
                        value={data.Question1}
                        onChange={(e) => setData('Question1', e.target.value)}
                        className="border border-gray-300 rounded px-4 py-2 w-full"
                    />
                </div>
                <div>
                    <label className="block mb-1">Question 2</label>
                    <input
                        type="text"
                        name="Question2"
                        value={data.Question2}
                        onChange={(e) => setData('Question2', e.target.value)}
                        className="border border-gray-300 rounded px-4 py-2 w-full"
                    />
                </div>
                <div>
                    <label className="block mb-1">Question 3</label>
                    <input
                        type="text"
                        name="Question3"
                        value={data.Question3}
                        onChange={(e) => setData('Question3', e.target.value)}
                        className="border border-gray-300 rounded px-4 py-2 w-full"
                    />
                </div>

                {/* Legal Representation */}
                <div>
                    <label className="block mb-1">Reason for Change</label>
                    <input
                        type="text"
                        name="ReasonForChange"
                        value={data.ReasonForChange}
                        onChange={(e) => setData('ReasonForChange', e.target.value)}
                        className="border border-gray-300 rounded px-4 py-2 w-full"
                    />
                </div>

                <div>
                    <label className="block mb-1">Signature</label>
                    <input
                        type="text"
                        name="Signature"
                        value={data.Signature}
                        onChange={(e) => setData('Signature', e.target.value)}
                        className="border border-gray-300 rounded px-4 py-2 w-full"
                    />
                </div>
                <div>
                    <label className="block mb-1">Print Name</label>
                    <input
                        type="text"
                        name="PrintName"
                        value={data.PrintName}
                        onChange={(e) => setData('PrintName', e.target.value)}
                        className="border border-gray-300 rounded px-4 py-2 w-full"
                    />
                </div>
                <div>
                    <label className="block mb-1">Sign Date</label>
                    <input
                        type="date"
                        name="SignDate"
                        value={data.SignDate}
                        onChange={(e) => setData('SignDate', e.target.value)}
                        className="border border-gray-300 rounded px-4 py-2 w-full"
                    />
                </div>

                {/* Submit button */}
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">Publish</button>
            </form>
        </div>
    );
};

export default ViewLegalNeed;
