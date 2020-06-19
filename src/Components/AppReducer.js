function AppReducer(state, action){
    switch(action.type){
        case 'Selected_Country':
            return {...state, Country: action.Country}
        case 'Country_Stats':
            return state = action.stats 
        case 'No_Stats':
            return state = {...state, TotalConfirmed: 'N/A', TotalDeaths: 'N/A', TotalRecovered: 'N/A'}
        default:
            return state
    }
}

export {AppReducer}