import Chart from 'chart.js';
var MyChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
});

export {MyChart}