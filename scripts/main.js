Highcharts.chart('total_enrollment', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'UF Third in Total Student Enrollment'
    },
    subtitle: {
        text: 'UF ranks third out of Florida public universities in student enrollment.'
    },
    xAxis: {
      categories: ['University of Florida', 'University of Central Florida', 'Florida State University', 'Florida Atlantic University', 'University of South Florida', 'Florida International University']
    },
    yAxis: {
      title: {
        text: 'Total Student Enrollment'
      }
    },
    tooltip: {
        headerFormat: '<b>{point.key}</b><br>', // Display university name
        pointFormat: 'Total Enrollment: {point.y}'
    },
    series: [{
      name: 'Total Enrollment',
      data: [55211, 68346, 44161, 29592, 49600, 55609]
    }]
});

// Scatter Plot for Graduation vs Transfer Rates
Highcharts.chart('grad_transfer', {
    chart: {
        type: 'scatter',
        zoomType: 'xy' 
    },
    title: {
        text: 'Graduation VS Transfer Out Rates of Florida Public Universities'
    },
    subtitle: {
        text: 'The University of Florida has the highest graduation rate and the lowest transfer out rate.'
    },
    xAxis: {
        title: {
            text: 'Transfer Out Rate'
        },
        min: 0,
        max: 100
    },
    yAxis: {
        title: {
            text: 'Graduation Rate'
        },
        min: 0,
        max: 100
    },
    tooltip: {
        headerFormat: '<b>{point.name}</b><br>', // Display university name
        pointFormat: 'Transfer Out Rate: {point.x}%<br>Graduation Rate: {point.y}%'
    },
    series: [{
        name: 'Rate Comparison',
        data: [
            { x: 92, y: 95, name: 'University of Florida' },
            { x: 75, y: 87, name: 'University of Central Florida' },
            { x: 64, y: 76, name: 'Florida Atlantic University' },
            { x: 74, y: 78, name: 'Florida International University' },
            { x: 83, y: 86, name: 'Florida State University' },
            { x: 75, y: 82, name: 'University of South Florida' }
        ]
    }]
});