import React, { useContext } from 'react';
import {CountryContext} from './CountryStats'

function CountryList(props) {
    const {countries} = props;
    const { dispatch } = useContext(CountryContext)
     
  const selectCountry = (e) => (dispatch({type: 'Selected_Country', Country: e.target.value}))

  return (
    <>
      <form className=''>
            <div className="form-group">
                <label htmlFor="exampleFormControlSelect2"><b>Select Country</b></label>
                <select size="12" name='countries' className="countryList form-control" id="exampleFormControlSelect2">
                {countries.map((country, index) => {
                    return <option onClick= {selectCountry} onChange= {selectCountry} key={index} value={country.Country} className='countryOption '>{country.Country}</option>
                })} 
                </select>
            </div>
        </form>
    </>
  )
}

export default CountryList
