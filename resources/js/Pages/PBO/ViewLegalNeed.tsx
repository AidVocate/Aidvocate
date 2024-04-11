import React from 'react';
import { Link, usePage } from '@inertiajs/inertia-react';
import { CaseModel } from '../../Components/ViewLegalNeedModels/CaseModel';
import { QuestionData } from '../../Components/ViewLegalNeedModels/QuestionModel';
import { RepresentationData } from '@/Components/ViewLegalNeedModels/RepresentationModel';
import { SignatureData } from '@/Components/ViewLegalNeedModels/SignatureModel';

interface Props {
    caseDetails: CaseModel;
    caseQuestions: QuestionData;
    caseRepresentation: RepresentationData;
    caseSignature: SignatureData;
}

const LegalNeed: React.FC<Props> = ({ caseDetails: caseData, caseQuestions: questionData, 
    caseRepresentation: repData, caseSignature: signData }) => {
    
    const { successMessage } = usePage().props;
    // const approveLegalNeed = (e: FormEvent) => {
    //     e.preventDefault();
        
    //     const post = Link
    //     post(route('approveLegalNeed'));
    // };

    return (
        <div className="container mx-auto mt-8">
            
            <h2 className="text-2xl font-bold mb-4">Case Details</h2>
            <form className="space-y-4">
                {/* Case Information */}
                <div>
                    <label className="block mb-1">Date of Next Appearance *</label>
                    <input
                        type="date"
                        name="DateOfNextAppearance"
                        value={caseData.DateOfNextAppearance}
                        readOnly
                        className="border border-gray-300 rounded px-4 py-2 w-full"
                    />
                    {/* <InputError message={errors.DateOfNextAppearance} className="mt-2" /> */}
                </div>
                <div>
                    <label className="block mb-1">Nature of Appearance *</label>
                    <input
                        type="text"
                        name="NatureOfAppearance"
                        value={caseData.NatureOfAppearance}
                        readOnly
                        className="border border-gray-300 rounded px-4 py-2 w-full"
                    />
                    {/* <InputError message={errors.NatureOfAppearance} className="mt-2" /> */}

                </div>
                <div>
                    <label className="block mb-1">Service Language</label>
                    <input
                        type="text"
                        name="ServicesLanguage"
                        value={caseData.ServicesLanguage}
                        readOnly
                        className="border border-gray-300 rounded px-4 py-2 w-full"
                    />
                </div>
                <div>
                    <label className="block mb-1">Additional Information</label>
                    <textarea
                        name="AdditionalInformation"
                        value={caseData.AdditionalInformation}
                        readOnly
                        className="border border-gray-300 rounded px-4 py-2 w-full"
                    />
                </div>

                <h3 className="font-bold mb-4">Case Questions</h3>
                <div>
                    <label className="block mb-1">Question 1</label>
                    <input
                        type="text"
                        name="Question1"
                        value={questionData?.Question1 ?? 'N/A'}
                        readOnly
                        className="border border-gray-300 rounded px-4 py-2 w-full"
                    />
                </div>
                <div>
                    <label className="block mb-1">Question 2</label>
                    <input
                        type="text"
                        name="Question2"
                        value={questionData?.Question2 ?? 'N/A'}
                        readOnly
                        className="border border-gray-300 rounded px-4 py-2 w-full"
                    />
                </div>
                <div>
                    <label className="block mb-1">Question 3</label>
                    <input
                        type="text"
                        name="Question3"
                        value={questionData?.Question3 ?? 'N/A'}
                        readOnly
                        className="border border-gray-300 rounded px-4 py-2 w-full"
                    />
                </div>

                <h3 className="font-bold mb-4">Case Representation</h3>
                <div>
                    <label className="block mb-1">Reason for Change</label>
                    <input
                        type="text"
                        name="ReasonForChange"
                        value={repData?.ReasonForChange ?? 'N/A'}
                        readOnly
                        className="border border-gray-300 rounded px-4 py-2 w-full"
                    />
                </div>

                <h3 className="font-bold mb-4">Case Signature</h3>
                <div>
                    <label className="block mb-1">Signature</label>
                    <input
                        type="text"
                        name="Signature"
                        value={signData?.Signature ?? 'N/A'}
                        readOnly
                        className="border border-gray-300 rounded px-4 py-2 w-full"
                    />
                </div>

                <div>
                    <label className="block mb-1">Print Name</label>
                    <input
                        type="text"
                        name="PrintName"
                        value={signData?.PrintName ?? 'N/A'}
                        readOnly
                        className="border border-gray-300 rounded px-4 py-2 w-full"
                    />
                </div>

                <div>
                    <label className="block mb-1">Sign Date</label>
                    <input
                        type="text"
                        name="SignDate"
                        value={signData?.SignDate ?? 'N/A'}
                        readOnly
                        className="border border-gray-300 rounded px-4 py-2 w-full"
                    />
                </div>

                {/* Submit button */}
                <Link href={route('cases.approve', { CaseID: caseData.CaseID })} method="post" as="button" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
                    Approve
                </Link>
            </form>
        </div>
    );
};

export default LegalNeed;
