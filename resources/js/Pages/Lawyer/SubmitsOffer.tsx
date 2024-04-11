import React from 'react';
import { CaseModel } from '../../Components/CaseModel';
import { InertiaLink } from '@inertiajs/inertia-react';


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

            {/* Link to grab the case */}
            
            <InertiaLink href={route('cases.grab', { CaseID: caseData.CaseID })} method="post" as="button" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
                Grab Case
            </InertiaLink>
        </div>
    );
};

export default ShowCase;
