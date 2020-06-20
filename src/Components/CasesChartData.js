
const chartOption = {
    responsive: true,
    scales: {
        xAxes: [
            {
                ticks:{
                    beginAtZero: true,
                    fontSize: '2rem',
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
                fontSize: '2rem',
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
            fontSize: 20
        }
    }
}

export { chartOption }