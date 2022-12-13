
var barChartOptions = {
    series: [{
        data: [10, 8, 6, 4, 2]
    }],
    chart: {
        type: 'bar',
        height: 350,
        toolbar: {
            show: false
        },
    },
    colors: [
        "#008000",
        "#DAF7A6",
        "#FFC300",
        "#FF5733",
        "#FF0000"
    ],
    plotOptions: {
        bar: {
            distributed: true,
            borderRadius: 4,
            horizontal: false,
            columnWidth: '40%',
        }
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: false
    },
    xaxis: {
        categories: ["Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
    },
    yaxis: {
        title: {
            text: "Gastos"
        }
    }
};

var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
barChart.render();


var areaChartOptions = {
    series: [{
        name: 'Contas a Pagar',
        data: [1, 5, 3, 8, 2, 10, 2]
    }, {
        name: 'Contas a Receber',
        data: [4, 3, 8, 10, 2, 7, 5]
    }],
    chart: {
        height: 350,
        type: 'area',
        toolbar: {
            show: false,
        },
    },
    colors: ["#DAF7A6", "#008000"],
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: 'smooth'
    },
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul"],
    markers: {
        size: 0
    },
    yaxis: [
        {
            title: {
                text: 'Contas a Pagar',
            },
        },
        {
            opposite: true,
            title: {
                text: 'Contas a Receber',
            },
        },
    ],
    tooltip: {
        shared: true,
        intersect: false,
    }
};

var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
areaChart.render();