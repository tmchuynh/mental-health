(function () {
    const labeling = ["ALL ADULTS", "ASIAN ADULTS", "BLACK ADULTS", "NATIVE HAWAIIAN OR OTHER PACIDIC ISLANDER ADULTS", "HISPANIC OR LATIX ADULTS", "NATIVE ADULTSAMERICAN INDIAN OR ALASKA", "WHITE ADULTS", "ADULTS WHO REPORT MIXED/MULIRACIAL", "LESBIAN, GAY, AND BISECUAL ADULTS"];
    const data = {
        labels: labeling,
        datasets: [{
            data: [21, 14, 17, 17, 18, 19, 22, 32, 44],
            backgroundColor: [
                '#385f37',
                '#B7C0EE',
                '#c39c67',
                '#DFF8EB',
                '#98fb98',
                '#a8a294',
                '#96C9DC',
                '#84868a',
                '#28536B'
            ],
            borderColor: [
                '#fffff',
                '#fffff',
                '#fffff',
                '#fffff',
                '#fffff',
                '#fffff',
                '#fffff'
            ],
            borderWidth: 1
        }]
    };

    const myChart = new Chart(
        document.getElementById('barChart'),
        config = {
            type: 'bar',
            data: data,
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        })
})();
