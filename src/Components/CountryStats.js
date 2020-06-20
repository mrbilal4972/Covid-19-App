import React, {useState, useEffect, useReducer} from 'react'
import CountryList from './CountryList';
import CountryInfection from './CountryInfection';
import CountryDeaths from './CountryDeaths';
import CountryRecoveries from './CountryRecoveries';
import {AppReducer} from './AppReducer';
import CasesChart from './CasesChart'
import CountryDeathChart from './CountryDeathChart'
import axios from 'axios';

const CountryContext = React.createContext();

const initialState = {
    Country: "Pakistan",
    Slug:	"pakistan"
}

function CountryStats() {


    const [state, dispatch] = useReducer(AppReducer, initialState)
    const [countries, setCountries] = useState([])
    
    

    useEffect(() => {
        axios.get('https://api.covid19api.com/countries')
        .then(res => {
            setCountries(res.data)
        })
        .catch(err => console.log(err))
    },[])

    useEffect(() => {
        axios.get('https://api.covid19api.com/summary')
        .then(res => {
            let selectedCountry = res.data.Countries.filter(country => country.Country === state.Country)
            
                if(selectedCountry[0])
                    return dispatch({type: 'Country_Stats', stats: selectedCountry[0]})
                else
                    return dispatch({type: 'No_Stats'})
        })
        .catch(err => console.log(err))
    },[state.Country])


  return (
    <>
    <CountryContext.Provider value={{state: state, dispatch: dispatch}}>
      <div className='container-fluid p-5 countryStat'>
            <div className='row'>
                <div className='col-lg-3'>
                    <CountryList countries = {countries} />
                </div>
                <div className='col-lg-9 mt-4'>
                <h2>Stats Of {state.Country}</h2><hr />
                    <div className='row'>                        
                        <CountryInfection />
                        <CountryRecoveries />
                        <CountryDeaths />
                    </div>
                    <div className='row'>
                    <div className='col-lg-5 mt-4'>
                    <CasesChart />
                    </div>
                    <div className='col-lg-5 mt-4'>
                    <CountryDeathChart />
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </CountryContext.Provider>
    </>
  )
}

export default CountryStats;
export {CountryContext}
