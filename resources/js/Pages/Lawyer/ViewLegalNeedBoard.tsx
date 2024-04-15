import React, { useState } from 'react';
import { CaseModel } from '../../Components/CaseModel';
import { Inertia } from '@inertiajs/inertia';
import { useDebounce } from 'use-debounce'; // Import useDebounce hook
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

interface PaginatedResponse<T> {
  data: T[];
  current_page: number;
  last_page: number;
  first_page_url: string;
  last_page_url: string;
  next_page_url: string | null;
  prev_page_url: string | null;
  path: string;
  per_page: number;
  total: number;
}

interface Props extends inertia.Auth {
  cases: PaginatedResponse<CaseModel>;
  mustVerifyEmail: boolean;
  status?: 'verification-link-sent';
}

const ApprovedList = ({ auth, cases }: Props) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [debouncedSearchTerm] = useDebounce(searchTerm, 300); // Debounce search term

  const handleButtonClick = (caseID: number) => {
    navigateToDifferentPage(caseID);
  };

  const navigateToDifferentPage = (caseID: number) => {
    window.location.href = `/lawyer/ViewLegalNeed/${caseID}`;
  };

  // Filter cases based on debounced search term
  const filteredCases = cases.data.filter((caseItem) => {
    const searchFields = [caseItem.DateOfNextAppearance, caseItem.NatureOfAppearance];
    return searchFields.some(field => field.toLowerCase().includes(debouncedSearchTerm.toLowerCase()));
  });

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={"Legal Need Board"}
    >
      <Head title="Legal Need Board" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
          {/* Search input */}
          <TextField
            variant="standard"
            helperText="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            fullWidth
            margin="normal"
          />

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>View</TableCell>
                  <TableCell>Date Of Next Appearance</TableCell>
                  <TableCell>Nature of Appearance</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredCases.map((caseItem) => (
                  <TableRow key={caseItem.CaseID}>
                    <TableCell>
                      <Button variant="contained" onClick={() => handleButtonClick(caseItem.CaseID)}>View</Button>
                    </TableCell>
                    <TableCell>{caseItem.DateOfNextAppearance}</TableCell>
                    <TableCell>{caseItem.NatureOfAppearance}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div>
            {cases.prev_page_url && (
              <Button onClick={() => Inertia.visit(cases.prev_page_url ?? '')}>Previous</Button>
            )}
            <span>Page {cases.current_page} of {cases.last_page}</span>
            {cases.next_page_url && (
              <Button onClick={() => Inertia.visit(cases.next_page_url ?? '')}>Next</Button>
            )}
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default ApprovedList;
