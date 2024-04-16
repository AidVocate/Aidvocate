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
import { Head } from '@inertiajs/react';
import { TableHeaders } from '@/Components/ViewLegalNeedModels/TableModel';

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
  activeLN: PaginatedResponse<TableHeaders>;
  lawyers: PersonInfo;
  mustVerifyEmail: boolean;
  status?: 'verification-link-sent';
}

const LawyerOfferList = ({ auth, activeLN }: Props) => {
    const handleButtonClick = (id: number, caseID: number) => {
        navigateToDifferentPage(id, caseID);
    }

    const navigateToDifferentPage = (id: number, caseID: number) => {
        Inertia.visit(`/pbo/ViewActiveLegalNeeds/${id}/${caseID}`);
    };
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={"Active Legal Needs Board"}
    >
    <Head title="Active Legal Needs Board" />
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
                <TableCell>Active Since</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {activeLN.data.map((activeLN) => (
                <TableRow key={activeLN.CaseID}>
                  <TableCell>
                    <Button variant="contained" onClick={() => handleButtonClick(activeLN.id, activeLN.CaseID)}>View</Button>
                  </TableCell>
                  <TableCell>{activeLN.FirstName} {activeLN.LastName}</TableCell>
                  <TableCell>{activeLN.Email}</TableCell>
                  <TableCell>{activeLN.NatureOfAppearance}</TableCell>
                  <TableCell>{activeLN.formatted_date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div>
          {activeLN.prev_page_url && (
            <Button onClick={() => Inertia.visit(activeLN.prev_page_url ?? '')}>Previous</Button>
          )}
          <span>Page {activeLN.current_page} of {activeLN.last_page}</span>
          {activeLN.next_page_url && (
            <Button onClick={() => Inertia.visit(activeLN.next_page_url ?? '')}>Next</Button>
          )}
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
  );
};

export default LawyerOfferList;
