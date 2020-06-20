import React,{useState, useEffect} from 'react'
import { fetchData } from './Api';
import {HorizontalBar} from 'react-chartjs-2'

const resource = fetchData()

function TopFiveCountries() {

    const fiveCountries = [];
    const countriesStats = [];
    const [chartData, setChartData] = useState({})

    const chart = () => {
        setChartData({
            labels: fiveCountries,
            datasets: [
                {
                    label: 'Infected People',
                    data: countriesStats,
                    backgroundColor: 'rgba(75, 132, 192, 0.6)',
                    borderWidth: 2,
                    borderColor: 'rgb(212, 207, 197)'
                }
            ]

        })
    }

    const chartOption = {
        responsive: true,
        scales: {
            xAxes: [
                {
                    ticks:{
                        beginAtZero: true,
                        
                        fontColor: 'rgb(212, 207, 197)'
                    },
                    gridLines:{
                        display: false,
                        color:'rgb(212, 207, 197)'
                    }
                }
            ],
            yAxes: [{
                ticks: {
                    
                    fontColor: 'rgb(212, 207, 197)'
                },
                gridLines:{
                    color:'rgb(212, 207, 197)'
                }
            }]
        },
        legend: {
            labels: {
                fontColor: 'rgb(212, 207, 197)',
            }
        }
    }

    useEffect(() => {
        chart();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const topInfectedCountries = resource.country.read();
    topInfectedCountries.Countries.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed);
    const topfiveCountries = topInfectedCountries.Countries.slice(0,5);
    topfiveCountries.forEach((c) => {
            fiveCountries.push(c.Country);
            countriesStats.push(c.TotalConfirmed);
    })

  return (
    <>
    <h2>Highly Infected Countries</h2>
      <HorizontalBar data={chartData} options= {chartOption}/>

    </>
  )
}

export default TopFiveCountries
