import React, { FormEvent, useState } from 'react';
import { useForm } from '@inertiajs/inertia-react';

const SubmitOffer = () => {
    const { post, errors } = useForm();
    const CaseID = 1; // Hard-coded temporary case ID

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        post(route('cases.grab', { case: CaseID }))
    };
    

    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4">Submit Offer</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Hidden input field to include the case ID */}
                <input type="hidden" name="CaseID" value={CaseID} />
                
                {/* Add any specific fields for submitting the offer */}
                
                {/* Submit button */}
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">Submit Offer</button>
            </form>
        </div>
    );
};

export default SubmitOffer;
