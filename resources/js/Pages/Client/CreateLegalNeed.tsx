import React, { FormEvent, useState } from 'react';
import { useForm } from '@inertiajs/inertia-react';

const CreateLegalNeed = () => {
    const { data, setData, post } = useForm({
        DateOfNextAppearance: '',
        NatureOfAppearance: '',
        ServicesLanguage: '',
        AdditionalInformation: '',
        CaseQuestion: {
            question1: '',
            question2: '',
            question3: ''
        },
        legalRepresentation: {
            Reasonforchange: ''
        }
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
                        onChange={(e) => setData('DateOfNextAppearance', e.target.value)} 
                        required 
                        className="border border-gray-300 rounded px-4 py-2 w-full"
                    />
                </div>
                <div>
                    <label className="block mb-1">Nature of Appearance *</label>
                    <input 
                        type="text" 
                        name="NatureOfAppearance" 
                        value={data.NatureOfAppearance} 
                        onChange={(e) => setData('NatureOfAppearance', e.target.value)} 
                        required 
                        className="border border-gray-300 rounded px-4 py-2 w-full"
                    />
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
                        value={data.CaseQuestion.question1} 
                        onChange={(e) => setData('CaseQuestion', { ...data.CaseQuestion, question1: e.target.value })} 
                        className="border border-gray-300 rounded px-4 py-2 w-full"
                    />
                </div>
                <div>
                    <label className="block mb-1">Question 2</label>
                    <input 
                        type="text" 
                        name="Question2" 
                        value={data.CaseQuestion.question2} 
                        onChange={(e) => setData('CaseQuestion', { ...data.CaseQuestion, question2: e.target.value })} 
                        className="border border-gray-300 rounded px-4 py-2 w-full"
                    />
                </div>
                <div>
                    <label className="block mb-1">Question 3</label>
                    <input 
                        type="text" 
                        name="Question3" 
                        value={data.CaseQuestion.question3} 
                        onChange={(e) => setData('CaseQuestion', { ...data.CaseQuestion, question3: e.target.value })} 
                        className="border border-gray-300 rounded px-4 py-2 w-full"
                    />
                </div>

                {/* Legal Representation */}
                <div>
                    <label className="block mb-1">Reason for Change</label>
                    <input 
                        type="text" 
                        name="ReasonForChange" 
                        value={data.legalRepresentation.Reasonforchange} 
                        onChange={(e) => setData('legalRepresentation', { ...data.legalRepresentation, Reasonforchange: e.target.value })} 
                        className="border border-gray-300 rounded px-4 py-2 w-full"
                    />
                </div>
             
                {/* Submit button */}
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">Submit</button>
            </form>
        </div>
    );
};

export default CreateLegalNeed;
