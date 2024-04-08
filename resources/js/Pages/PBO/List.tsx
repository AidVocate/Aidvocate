// PBO/List.tsx

import React from 'react';
import { CaseModel } from '../../Components/CaseModel'; // Import CaseModel type

interface Props {
  cases: CaseModel[]; // Define the type of the cases prop
}

const List: React.FC<Props> = ({ cases }) => {
  return (
    <div>
      <h1>Case List</h1>
      <ul>
        {cases.map((caseItem) => (
          <li key={caseItem.CaseID}>
            <div>Case ID: {caseItem.CaseID}</div>
            <div>Date of Next Appearance: {caseItem.DateOfNextAppearance}</div>
            <div>Nature of Appearance: {caseItem.NatureOfAppearance}</div>
            {/* Add other properties as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
