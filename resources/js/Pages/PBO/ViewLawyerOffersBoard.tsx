// import React from 'react';
import { CaseModel } from '../../Components/CaseModel';
import { AssignedLawyer } from '@/Components/ViewLegalNeedModels/AssignedLawyerModel';
import { PersonInfo } from '@/Components/ViewLegalNeedModels/user';
import { Inertia } from '@inertiajs/inertia';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { TableHeaders } from '@/Components/ViewLegalNeedModels/OffersTableModel';

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
  offers: PaginatedResponse<TableHeaders>;
  lawyers: PersonInfo;
  mustVerifyEmail: boolean;
  status?: 'verification-link-sent';
}

const LawyerOfferList = ({ auth, offers }: Props) => {
    const handleButtonClick = (id: number, caseID: number) => {
        navigateToDifferentPage(id, caseID);
    }

    const navigateToDifferentPage = (id: number, caseID: number) => {
        Inertia.visit(`/pbo/ViewLawyerOffer/${id}/${caseID}`);
    };
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={"Lawyer Offers Board"}
    >
    <Head title="Lawyer Offers Board" />
    <div className="py-12">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
              <TableCell>View Legal Need</TableCell>
                <TableCell>Lawyer Name</TableCell>
                <TableCell>Lawyer Email</TableCell>
                <TableCell>Case Nature</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {offers.data.map((offersItem) => (
                <TableRow key={offersItem.CaseID}>
                  <TableCell>
                    <Button variant="contained" onClick={() => handleButtonClick(offersItem.id, offersItem.CaseID)}>View</Button>
                  </TableCell>
                  <TableCell>{offersItem.FirstName} {offersItem.LastName}</TableCell>
                  <TableCell>{offersItem.Email}</TableCell>
                  <TableCell>{offersItem.NatureOfAppearance}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div>
          {offers.prev_page_url && (
            <Button onClick={() => Inertia.visit(offers.prev_page_url ?? '')}>Previous</Button>
          )}
          <span>Page {offers.current_page} of {offers.last_page}</span>
          {offers.next_page_url && (
            <Button onClick={() => Inertia.visit(offers.next_page_url ?? '')}>Next</Button>
          )}
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
  );
};

export default LawyerOfferList;
