import { useEffect, useState } from 'react';
import axiosClient from "../axios"
import LegalNeedCard from "../components/LegalNeedCard"
import { LawAlberta, KingsCourt, LawCourts } from '../dev/LegalNeeds';

export default function Board() {
  const [boardData, setBoardData] = useState([]);

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
    <LegalNeedCard 
      title={"Help with Legal Need! Lawyer Needed right now for Civil Claims Duty!"}
      name={"John Smith"} 
      date={"March 03, 2024"} 
      location={"Edmonton, Alberta"} 
      image={LawCourts}
    />
  )
}