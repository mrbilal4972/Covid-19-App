import React, {useEffect, useState, Suspense} from 'react'
import GlobalInfections from './GlobalInfections'
import GlobalDeaths from './GlobalDeaths'
import GlobalRecoveries from './GlobalRecoveries';
import TopFiveCountries from './TopFiveCountries'
import axios from 'axios';



function WorldStats() {

    const [cases, setCases] =  useState({
        infected: 0,
        recoverd: 0,
        death: 0
    })

    useEffect(() => {
        axios.get('https://api.covid19api.com/world/total')
        .then(res => {
            setCases({infected: res.data.TotalConfirmed,
                        recoverd: res.data.TotalRecovered,
                        death: res.data.TotalDeaths  
            })
        })
        .catch(err => console.log(err))
    }, [])

  return (
    <>
        <div className='container-fluid mt-0 p-5 globalStat'>
            <div className='row'>
                <div className='col-lg-3 my-auto border-right border-light'>
                <div className="column">
                <GlobalInfections infected={cases.infected}/>
                <GlobalRecoveries recoverd={cases.recoverd}/>
                <GlobalDeaths death={cases.death}/>
                </div>
                </div>
                <div className='col-lg-9'>
                    <Suspense fallback= {<h4>Loading......</h4>}>
                        <TopFiveCountries />
                    </Suspense>
                </div>
            </div>
        </div>
    </>
  )
}

export default WorldStats
