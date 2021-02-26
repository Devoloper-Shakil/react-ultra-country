import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name,timezones,nativeName,capital,flag,region,population,area}=props.country
    return (
        <div className="country-contryner">
            <div className="country-flag">
                <img src={flag} alt=""/>
            </div>
        <div className="country-info">
           <div className="sub-info">
           <div>
            <h1 className="country-name">Name : {name}</h1>
            <h3>Capital: {capital}</h3>
            <h3>Region: {region}</h3>
            </div>
           <div className="sim-info">
            <h3>Population: {population}</h3>
            <h3>Area : {area}</h3>
           </div>
           <div className="sim-info">
            <h3>Timezones: {timezones}</h3>
            <h3>NumericCode : {nativeName}</h3>
           </div>
           </div>
        </div>
    </div>
    );
};

export default Country;