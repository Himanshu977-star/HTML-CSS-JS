window.onload = function() {
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart1= document.getElementById('myChart1').getContext('2d');
  var myChart2= document.getElementById('myChart2').getContext('2d');
  var myChart3= document.getElementById('myChart3').getContext('2d');
  var myChart4= document.getElementById('myChart4').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['China','India','Russia','United States','France'],
      datasets: [{
        label: 'Wheat Production [MMT]',
        data: [138.4,112.5,92.5,45.3,37.5],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255,1)',
          'rgba(255, 159, 64, 1)'
        ],
        
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  
  var myChart = new Chart(myChart1, {
    type: 'bar',
    data: {
      labels: ['India','United States','China','Brazil','Australia'],
      datasets: [{
        label: 'Agricultural Land (million sq. km)',
        data: [1.8,1.6,1.4,2.2,3.9],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255,1)',
          'rgba(255, 159, 64, 1)'
        ],
        
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  var myChart = new Chart(myChart2, {
    type: 'polarArea',
    data: {
      labels: ['Services Sector','Industrial Sector','Agriculture Sector','Construction Sector'],
      datasets: [{
        label: 'GDP Share in %:',
        data: [53,25,18,7],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255,1)',
        ],
        
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  var myChart = new Chart(myChart3, {
    type: 'line',
    data: {
      labels: ['China','India','Indonesia','Bangladesh'],
      datasets: [{
        label: 'Rice Production [MMT] 2023:',
        data: [145.3 ,145.0,54.7,39.1],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255,1)',
        ],
        
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  var myChart = new Chart(myChart4, {
    type: 'line',
    data: {
      labels: ['Brazil','India','Thailand','China'],
      datasets: [{
        label: 'Sugar Production [MMT] 2023:',
        data: [45.54,34.3,14.87,11.76],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255,1)',
        ],
        
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
};