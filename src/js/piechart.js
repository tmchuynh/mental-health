

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
            data: [23.4, 2.6, 7.28, 49.66, 9.36, 3.12, 3.64],
            backgroundColor: [
                '#28536B',
                '#385f37',
                '#96C9DC',
                '#a8a294',
                '#c39c67',
                '#98fb98',
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