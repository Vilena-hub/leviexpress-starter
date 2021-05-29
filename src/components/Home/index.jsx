import React, {useState} from 'react';
import { JourneyPicker } from '../JourneyPicker';

export const Home = () => {

  const [journey, setJourney] = useState(null);

  return (
  <main>
    <JourneyPicker />
    
    {
      journey===null
      ? " "
      : <div>Ahoj!</div>
    }

  </main>
  )
};
