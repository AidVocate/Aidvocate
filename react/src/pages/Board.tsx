import { useEffect, useState } from 'react';
import axiosClient from "../axios"
import LegalNeedDetails from '../components/LegalNeedDetails';
import LegalNeedCard from "../components/LegalNeedCard"
import { LawAlberta, KingsCourt, LawCourts } from '../dev/LegalNeeds';

export default function Board() {
  const [boardData, setBoardData] = useState([]);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (value: string) => {
    setOpen(false);
  };

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
    <>
      <LegalNeedCard 
        title={"Help with Legal Need! Lawyer Needed right now for Civil Claims Duty!"}
        name={"John Smith"} 
        date={"March 03, 2024"} 
        location={"Edmonton, Alberta"} 
        image={LawCourts}
        setOpen={setOpen}
      />
      <LegalNeedDetails
        open={open}
        setOpen={setOpen}
      />
    </>
  )
}