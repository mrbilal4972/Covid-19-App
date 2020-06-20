import React,{useContext, useEffect, useState} from 'react';
import {CountryContext} from './CountryStats';
import {Line} from 'react-chartjs-2';
import { chartOption } from './CasesChartData';
import axios from 'axios'; 



function CountryDeathChart() {

    const [chartData, setChartData] = useState({})
    const {state} = useContext(CountryContext)
    const date = [];
    const death = [];
    // const recoverdCases = [];
    // console.log(state);

    // const chart = () => {
        
    

    useEffect(() => {
        axios.get(`https://api.covid19api.com/total/dayone/country/${state.Slug}`)
        .then(res => { 
            let days = res.data;
            let _15Days = days.sort((a, b) => a.Confirmed - b.Confirmed).slice(-15);
                _15Days.forEach((day) => {
                let getTimeStamp = new Date (Date.parse(day.Date))
                let getDate = getTimeStamp.toDateString()
                date.push(getDate)
                death.push(day.Deaths)
                // console.log(day)
                // recoverdCases.push(day.Recovered)
                })
            return (
            setChartData({
            labels: date,
            datasets: [
                {
                    label: 'Death Reported',
                    data: death,
                    backgroundColor: 'transparent',
                    borderWidth: 1,
                    borderColor: 'blue'
                }
            ]
    
        })
        )
        }
        )
        .catch(err => console.log(err))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.Slug])

  return (
    <>
      <Line data={chartData} option={chartOption}/>
    </>
  )
}

export default CountryDeathChart
