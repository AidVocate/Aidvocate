import React from 'react';
import { CaseModel } from '../../Components/CaseModel'; 
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


interface Props {
    cases: CaseModel[];
}

const ApprovedList: React.FC<Props> = ({ cases }) => {
    const handleButtonClick = (caseID: number) =>{
      navigateToDifferentPage(caseID);
    }
  
    const navigateToDifferentPage = (caseID: number) => {
      window.location.href = `/lawyer/ViewLegalNeed/${caseID}`;
    };

    return (
        <div>
          <h1>Case List</h1>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Case ID</TableCell>
                  <TableCell>Date Of Next Appearance</TableCell>
                  <TableCell>Nature of Appearance</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cases.map((caseItem)=>(
                <TableRow key={caseItem.CaseID}>
                  <TableCell>
                    <Button variant="contained" onClick={() => handleButtonClick(caseItem.CaseID)}>View</Button>
                  </TableCell>
                  <TableCell>Date of Next Appearance: {caseItem.DateOfNextAppearance}</TableCell>
                  <TableCell>Nature of Appearance: {caseItem.NatureOfAppearance}</TableCell>
                </TableRow>
              ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      );
};

export default ApprovedList;