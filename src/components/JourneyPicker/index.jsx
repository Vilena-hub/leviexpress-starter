import React, { useEffect, useState } from 'react';
import mapImage from './img/map.svg';
import './style.css';

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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('formulář odeslán')
    console.log(fromCity,toCity,date);
  }

  const [fromCity, setFromCity]=useState(" ");
  const [toCity, setToCity]=useState(" ");
  const [date, setDate]=useState(" ");
  const [cities, setCities]=useState([]);

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
            <option value="">Vyberte</option>
            <option value="datum01">Datum 01</option>
            <option value="datum02">Datum 02</option>
            <option value="datum03">Datum 03</option>
            <option value="datum04">Datum 04</option>
            <option value="datum05">Datum 05</option>
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
