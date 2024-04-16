import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import { CaseModel } from '../../Components/ViewLegalNeedModels/CaseModel';
import { QuestionData } from '../../Components/ViewLegalNeedModels/QuestionModel';
import { RepresentationData } from '@/Components/ViewLegalNeedModels/RepresentationModel';
import { SignatureData } from '@/Components/ViewLegalNeedModels/SignatureModel';
import { PersonInfo } from '@/Components/ViewLegalNeedModels/user';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';


interface Props extends inertia.Auth {
    caseDetails: CaseModel;
    caseQuestions: QuestionData;
    caseRepresentation: RepresentationData;
    caseSignature: SignatureData;
    mustVerifyEmail: boolean;
    CasePerson: PersonInfo;
    status?: 'verification-link-sent';
}

const LegalNeed: React.FC<Props> = ({ caseDetails: caseData, caseQuestions: questionData,
    caseRepresentation: repData, caseSignature: signData, CasePerson: CasePerson, auth }: Props) => {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={"Legal Need Board"}
        >

            <Head title="Legal Need Board" />

            <div className="container mx-auto mt-8 p-8 bg-white rounded-lg shadow-lg border border-gray-200">
                <h2 className="text-2xl font-bold mb-6 border-b pb-2">Lawyer Details</h2>
                
                <h2 className="text-2xl font-bold mb-6 border-b pb-2">Case Details</h2>

                <div className="p-4 bg-gray-50 rounded">
                    <h3 className="font-bold mb-2 text-gray-800">Personal Information</h3>
                    <div className="space-y-2">
                        <div>
                            <label className="block mb-1 font-medium text-gray-600">Name</label>
                            <div className="p-2 bg-white border rounded">{CasePerson?.FirstName ?? 'N/A'} {CasePerson?.LastName ?? 'N/A'}</div>
                        </div>
                        <div>
                            <label className="block mb-1 font-medium text-gray-600">Email</label>
                            <div className="p-2 bg-white border rounded">{CasePerson?.email ?? 'N/A'}</div>
                        </div>
                        <div>
                            <label className="block mb-1 font-medium text-gray-600">Phone Number</label>
                            <div className="p-2 bg-white border rounded">{CasePerson?.Phone ?? 'N/A'}</div>
                        </div>
                        <div>
                            <label className="block mb-1 font-medium text-gray-600">Are they able to leave them a voice mail</label>
                            <div className="p-2 bg-white border rounded">{CasePerson?.VoiceMail ? 'Yes' : 'No'}</div>
                        </div>
                    </div>
                </div>


                <div className="space-y-4">
                    {/* Case Information Section */}
                    <div className="p-4 bg-gray-50 rounded">
                        <h3 className="font-bold mb-2 text-gray-800">Case Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block mb-1 font-medium text-gray-600">Date of Next Appearance</label>
                                <div className="p-2 bg-white border rounded">{caseData?.DateOfNextAppearance ?? 'N/A'}</div>
                            </div>
                            <div>
                                <label className="block mb-1 font-medium text-gray-600">Nature of Appearance</label>
                                <div className="p-2 bg-white border rounded">{caseData?.NatureOfAppearance ?? 'N/A'}</div>
                            </div>
                            <div>
                                <label className="block mb-1 font-medium text-gray-600">Service Language</label>
                                <div className="p-2 bg-white border rounded">{caseData?.ServicesLanguage ?? 'N/A'}</div>
                            </div>
                            <div>
                                <label className="block mb-1 font-medium text-gray-600">Additional Information</label>
                                <div className="p-2 bg-white border rounded">{caseData?.AdditionalInformation ?? 'N/A'}</div>
                            </div>
                        </div>
                    </div>

                    {/* Case Questions Section */}
                    <div className="p-4 bg-gray-50 rounded">
                        <h3 className="font-bold mb-2 text-gray-800">Case Questions</h3>
                        <div className="space-y-2">
                            <div>
                                <label className="block mb-1 font-medium text-gray-600">Question 1</label>
                                <div className="p-2 bg-white border rounded">{questionData?.Question1 ?? 'N/A'}</div>
                            </div>
                            <div>
                                <label className="block mb-1 font-medium text-gray-600">Question 2</label>
                                <div className="p-2 bg-white border rounded">{questionData?.Question2 ?? 'N/A'}</div>
                            </div>
                            <div>
                                <label className="block mb-1 font-medium text-gray-600">Question 3</label>
                                <div className="p-2 bg-white border rounded">{questionData?.Question3 ?? 'N/A'}</div>
                            </div>
                        </div>
                    </div>

                    {/* Case Representation Section */}
                    <div className="p-4 bg-gray-50 rounded">
                        <h3 className="font-bold mb-2 text-gray-800">Case Representation</h3>
                        <div>
                            <label className="block mb-1 font-medium text-gray-600">Reason for Change</label>
                            <div className="p-2 bg-white border rounded">{repData?.ReasonForChange ?? 'N/A'}</div>
                        </div>
                    </div>

                    {/* Case Signature Section */}
                    <div className="p-4 bg-gray-50 rounded">
                        <h3 className="font-bold mb-2 text-gray-800">Case Signature</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block mb-1 font-medium text-gray-600">Signature</label>
                                <div className="p-2 bg-white border rounded">{signData?.Signature ?? 'N/A'}</div>
                            </div>
                            <div>
                                <label className="block mb-1 font-medium text-gray-600">Print Name</label>
                                <div className="p-2 bg-white border rounded">{signData?.PrintName ?? 'N/A'}</div>
                            </div>
                            <div>
                                <label className="block mb-1 font-medium text-gray-600">Sign Date</label>
                                <div className="p-2 bg-white border rounded">{signData?.SignDate ?? 'N/A'}</div>
                            </div>
                        </div>
                    </div>

                    {/* Submit button */}
                    <Link href={route('cases.approve', { CaseID: caseData.CaseID })} method="post" as="button" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
                        Approve
                    </Link>
                </div>
            </div>

        </AuthenticatedLayout>

    );
};

export default LegalNeed;