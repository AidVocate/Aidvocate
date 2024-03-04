import { useEffect, useState } from 'react';
import axiosClient from '../axios'
import Container from '@mui/material/Container';
import LegalNeedDetails from '../components/LegalNeedDetails';
import LegalNeedCard from '../components/LegalNeedCard'
import LegalNeedCardInterface from '../interfaces/LegalNeedCardInterface';
import { LawAlberta, KingsCourt, LawCourts } from '../dev/LegalNeeds';

export default function Board() {
  const [boardData, setBoardData] = useState([]);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<LegalNeedCardInterface | null>(null);

  useEffect(() => {
    axiosClient.get('/legalneeds')
      .then(response => {
        setBoardData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      }
    );
  }, []);

  return (
    <Container maxWidth="xl">
      <LegalNeedCard 
        text={"Help with Legal Need! Lawyer Needed right now for Civil Claims Duty! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
        name={"John Smith"} 
        date={"March 03, 2024"} 
        location={"Edmonton, Alberta"} 
        type={"Civil Claims Duty"}
        image={LawCourts}
        setOpen={setOpen}
        setSelected={setSelected}
      />
      <LegalNeedDetails
        open={open}
        selected={selected}
      />
    </Container>
  )
}