

(function() {
    
    const data = {
        labels: [
            'Major Depression',
            'Schizophrenia',
            'Bipolar Disorder',
            'Aniety Disorder',
            'Postraumatic Stress Disorder',
            'Obsessive Compulsive Disorder',
            'Borderline Personality Disorder'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [23.4, 2.6, 7.28, 49.66, 9.36, 3.12, 3.64],
            backgroundColor: [
                '#1D1A31',
                '#B02E0C',
                '#28536B',
                '#DFF8EB',
                '#B7C0EE',
                '#ECA400',
                '#96C9DC'
            ],
            hoverOffset: 4
        }]
    };

    
    
    const myChart = new Chart(
        document.getElementById('myChart'),
        config = {
            type: 'doughnut',
            data: data,
            options: {
                layout: {
                    padding: 50,
                    width: 100,
                    height: 100
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'ANNUAL PREVALENCE AMONG US ADULTS, BY CONDITION',
                        font: {
                            size: 40
                        }
                    },
                    legends: {
                        labels: {
                            font: {
                                size: 100
                            }
                        }
                    }
                }
            }
        }
    )

    myChart.canvas.parentNode.style.height = '100px';
})();