import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import { CaseModel } from '../../Components/CaseModel';

interface Props {
    case: CaseModel;
}

const ShowCase: React.FC<Props> = ({ case: caseData }) => {
    return (
        <div>
            <h2>Case Details</h2>
            <p><strong>Date of Next Appearance:</strong> {caseData.DateOfNextAppearance}</p>
            <p><strong>Nature of Appearance:</strong> {caseData.NatureOfAppearance}</p>
            <p><strong>Services Language:</strong> {caseData.ServicesLanguage}</p>
            <p><strong>Additional Information:</strong> {caseData.AdditionalInformation}</p>
            {/* Add more case details as needed */}
            <Link href={route('cases.index')} className="text-blue-500">Back to Case List</Link>
        </div>
    );
};

export default ShowCase;