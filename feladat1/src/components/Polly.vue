<script>

import { Line } from 'vue-chartjs';
import { Chart } from 'chart.js';
methods: {
  renderChart() {
    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: [-0.3, -0.2, -0.1, 0, 0.1, 0.2, 0.3],
        datasets: [{
          data: [0.3, 0.2, 0.1, 0, -0.1, -0.2, -0.3],
          borderColor: '#3e95cd',
          fill: false
        }]
      },
      options: {
        scales: {
          xAxes: [{
            ticks: {
              min: -0.5,
              max: 0.5
            }
          }],
          yAxes: [{
            ticks: {
              min: -0.5,
              max: 0.5
            }
          }]
        }
      }
    });
  }
}
</script>

<template>
  <canvas id="myChart"></canvas>
</template>