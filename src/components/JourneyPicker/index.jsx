import React, { useEffect, useState } from 'react';
import mapImage from './img/map.svg';
import './style.css';


const DatesOptions = ({dates}) => {

  return (
   <>
            <option value="">Vyberte</option>
            {dates.map(date=><option key={date.dateBasic} value={date.dateBasic}>{date.dateExtended}</option>)}
   </>
  )
};

const CityOptions = ({cities}) => {
  return (
    <>
            <option value="">Vyberte</option>
            {cities.map(mesto=><option key={mesto.code} value={mesto.code}>{mesto.name}</option>)}
    </>
  )
 };


export const JourneyPicker = ({ onJourneyChange }) => {

  useEffect (
   () => {
     fetch('https://leviexpress-backend.herokuapp.com/api/cities')
     .then(response=>response.json())
     .then(json=>setCities(json.data))
   },
   []
  )

  useEffect (
    () => {
      fetch('https://leviexpress-backend.herokuapp.com/api/dates')
      .then(response=>response.json())
      .then(json=>setDates(json.data))
    },
    []
   )


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('formulář odeslán')
    console.log(fromCity,toCity,date);
  }

  const [fromCity, setFromCity]=useState(" ");
  const [toCity, setToCity]=useState(" ");
  const [date, setDate]=useState(" ");
  const [cities, setCities]=useState([]);
  const [dates, setDates]=useState([{
    "dateBasic": "28.05.2021",
    "dateExtended": "pá 28. květen 2021"
  },
  {
    "dateBasic": "29.05.2021",
    "dateExtended": "so 29. květen 2021"
  },]);

  const handleFromCity = (event) => {
    setFromCity(event.target.value);
  }

  const handleToCity = (event) => {
    setToCity(event.target.value);
  }

  const handleDate = (event) => {
    setDate(event.target.value);
  }
   return (
  <div className="journey-picker container">
    <h2 className="journey-picker__head">Kam chcete jet?</h2>
    <div className="journey-picker__body">
      <form onSubmit={handleSubmit} className="journey-picker__form">
        <label>
          <div className="journey-picker__label">Odkud:</div>
          <select value={fromCity} onChange={handleFromCity}>
            <CityOptions cities={cities}/>

          </select>
        </label>
        <label>
          <div className="journey-picker__label">Kam:</div>
          <select value={toCity} onChange={handleToCity}>
            <CityOptions cities={cities}/>

          </select>
        </label>
        <label>
          <div className="journey-picker__label">Datum:</div>
          <select value={date} onChange={handleDate}>
           <DatesOptions dates={dates}/>
          </select>
        </label>
        <div className="journey-picker__controls">
          <button 
            className="btn" 
            type="submit"
          > 
            Vyhledat spoj
          </button>
        </div>
      </form>
      <img className="journey-picker__map" src={mapImage} />
    </div>
  </div>
   )};
