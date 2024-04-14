// Import necessary libraries and components
import { CaseModel } from '../../Components/ViewLegalNeedModels/CaseModel';
import { QuestionData } from '../../Components/ViewLegalNeedModels/QuestionModel';
import { RepresentationData } from '@/Components/ViewLegalNeedModels/RepresentationModel';
import { SignatureData } from '@/Components/ViewLegalNeedModels/SignatureModel';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

interface Props extends inertia.Auth {
    caseDetails: CaseModel;
    caseQuestions: QuestionData;
    caseRepresentation: RepresentationData;
    caseSignature: SignatureData;
    
}


const LegalNeed: React.FC<Props> = ({ caseDetails: caseData, caseQuestions: questionData,
    caseRepresentation: repData, caseSignature: signData, auth }: Props) => {

    const { data, setData, post, processing } = useForm({
        CaseID: caseData?.CaseID || '',
        DateOfNextAppearance: caseData?.DateOfNextAppearance || '', 
        NatureOfAppearance: caseData?.NatureOfAppearance || '',
        ServicesLanguage: caseData?.ServicesLanguage || '',
        AdditionalInformation: caseData?.AdditionalInformation || '',
        Question1: questionData?.Question1 || '',
        Question2: questionData?.Question2 || '',
        Question3: questionData?.Question3 || '',
        ReasonForChange: repData?.ReasonForChange || '',
        Signature: signData?.Signature || '',
        PrintName: signData?.PrintName || '',
        SignDate: signData?.SignDate || ''
    })

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault(); // Prevent the default form submission behavior

        // Define the route directly
        const updatedRoute = `/client/UpdateLegalNeed/${caseData.id}/${caseData?.CaseID}`;

        // Post the form data to the updated route
        post(updatedRoute, { data });
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={"Legal Need"}
        >

            <Head title="Legal Need" />


            <div className="container mx-auto mt-8 p-8 bg-white rounded-lg shadow-lg border border-gray-200">
                <h2 className="text-2xl font-bold mb-6 border-b pb-2">Legal Need Details</h2>

                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div className="p-4 bg-gray-50 rounded">
                            <h3 className="font-bold mb-2 text-gray-800">Case Information</h3>
                            
                            {/* Case Information Section */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block mb-1 font-medium text-gray-600">Date of Next Appearance</label>
                                    <input type="text" value={data.DateOfNextAppearance} onChange={(e) => setData('DateOfNextAppearance', e.target.value)} />
                                </div>
                                <div>
                                    <label className="block mb-1 font-medium text-gray-600">Nature of Appearance</label>
                                    <input type="text" value={data.NatureOfAppearance} onChange={(e) => setData('NatureOfAppearance', e.target.value)} />
                                </div>
                                <div>
                                    <label className="block mb-1 font-medium text-gray-600">Service Language</label>
                                    <input type="text" value={data.ServicesLanguage} onChange={(e) => setData('ServicesLanguage', e.target.value)} />
                                </div>
                                <div>
                                    <label className="block mb-1 font-medium text-gray-600">Additional Information</label>
                                    <input type="text" value={data.AdditionalInformation} onChange={(e) => setData('AdditionalInformation', e.target.value)} />
                                </div>
                            </div>
                        </div>

                        {/* Case Questions Section */}
                        <div className="p-4 bg-gray-50 rounded">
                            <h3 className="font-bold mb-2 text-gray-800">Case Questions</h3>
                            <div className="space-y-2">
                                <div>
                                    <label className="block mb-1 font-medium text-gray-600">Question 1</label>
                                    <input type="text" value={data.Question1} onChange={(e) => setData('Question1', e.target.value)} />
                                </div>
                                <div>
                                    <label className="block mb-1 font-medium text-gray-600">Question 2</label>
                                    <input type="text" value={data.Question2} onChange={(e) => setData('Question2', e.target.value)} />
                                </div>
                                <div>
                                    <label className="block mb-1 font-medium text-gray-600">Question 3</label>
                                    <input type="text" value={data.Question3} onChange={(e) => setData('Question3', e.target.value)} />
                                </div>
                            </div>
                        </div>

                        {/* Case Representation Section */}
                        <div className="p-4 bg-gray-50 rounded">
                            <h3 className="font-bold mb-2 text-gray-800">Case Representation</h3>
                            <div>
                                <label className="block mb-1 font-medium text-gray-600">Reason for Change</label>
                                <input type="text" value={data.ReasonForChange} onChange={(e) => setData('ReasonForChange', e.target.value)} />
                            </div>
                        </div>

                        {/* Case Signature Section */}
                        <div className="p-4 bg-gray-50 rounded">
                            <h3 className="font-bold mb-2 text-gray-800">Case Signature</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label className="block mb-1 font-medium text-gray-600">Signature</label>
                                    <input type="text" value={data.Signature} onChange={(e) => setData('Signature', e.target.value)} />
                                </div>
                                <div>
                                    <label className="block mb-1 font-medium text-gray-600">Print Name</label>
                                    <input type="text" value={data.PrintName} onChange={(e) => setData('PrintName', e.target.value)} />
                                </div>
                                <div>
                                    <label className="block mb-1 font-medium text-gray-600">Sign Date</label>
                                    <input type="text" value={data.SignDate} onChange={(e) => setData('SignDate', e.target.value)} />
                                </div>
                            </div>
                        </div>


                        {/* Update Button */}
                        <button 
                            type="submit" 
                            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            disabled={processing}>
                                {processing ? 'Processing...' : 'Update'} {/* Change button text while processing */}
                        </button>
                    </div>
                </form>
            </div>

        </AuthenticatedLayout>

    );
};

export default LegalNeed;