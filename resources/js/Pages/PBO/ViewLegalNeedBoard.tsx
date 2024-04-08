import { usePage } from '@inertiajs/inertia-react';

interface LegalNeed {
    id: string;
    FirstName: string;
    LastName: string;
    CaseID: string;
    DateOfNextAppearance: string;
}

const ViewLegalNeedBoard = () => {
    const { legalNeeds } = usePage().props as unknown as {legalNeeds: LegalNeed[] };

    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4">Submitted Legal Needs</h2>
            {legalNeeds.map((legalNeed, index) => (
                <div key={index} className="border border-gray-300 rounded p-4 mb-4">
                    <h3 className="text-lg font-bold mb-2">Legal Need {index + 1}</h3>
                    <p><strong>FirstName</strong> {legalNeed.FirstName}</p>
                    <p><strong>LastName:</strong> {legalNeed.LastName}</p>
                    <p><strong>CaseID:</strong> {legalNeed.CaseID}</p>
                    <p><strong>DateOfNextAppearance:</strong> {legalNeed.DateOfNextAppearance}</p>
                </div>
            ))}
        </div>
    );
};

export default ViewLegalNeedBoard;