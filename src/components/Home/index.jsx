import React, {useEffect, useState} from 'react';
import { JourneyPicker } from '../JourneyPicker';

export const Home = () => {
   const [journey, setJourney] = useState(null);

   const handleJourneyChange = (fromCity, toCity, date) => {
    fetch(`https://leviexpress-backend.herokuapp.com/api/journey?fromCity=${fromCity}&toCity=${toCity}&date=${date}`)
    .then(response=>response.json())
    .then(json=>setJourney(json.data))
   }

   useEffect(()=>{
    console.log(`Zde je spojeni s id ${journey}`)
   },
   [journey])
   
  return (
  <main>
    <JourneyPicker onJourneyChange={handleJourneyChange}/>
    {
      journey!==null&&
      <div>{journey.journeyId}</div>
    }

  </main>
  )
};
