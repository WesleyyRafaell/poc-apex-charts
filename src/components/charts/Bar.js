import React from "react"
import Chart from "react-apexcharts";

const Bar = () => {
    const data = {
        categories: ['0', '100', '200', '300', '400', '500'],
        options: [
            {
              color: "#2D3B62",
              name: 'A (Valioso)',
              values: [40, 55, 41, 67, 22, 43]
            },
            {
              color: "#7CAEEC",
              name: 'B (Intermediário)',
              values: [13, 23, 20, 8, 13, 27]
            },
            {
              color: "#DBF1FD",
              name: 'C (Ordinário)',
              values:  [11, 17, 15, 15, 21, 14]
            },
        ]
    } 
    
    const settings = {
        options: {
          chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            toolbar: {
                show: false
            },
            zoom: {
                enabled: true
            }
          },
          plotOptions: {
            bar: {
                horizontal: false,
                dataLabels: {
                  total: {
                    enabled: true,
                    style: {
                      fontSize: '13px',
                      fontWeight: 900
                    }
                  }
                }
              },
          },
          stroke: {
            width: 0,
            colors: ["#fff"],
            height: "1px",
          },
          xaxis: {
            type: 'category',
            categories: data.categories,
          },
          legend: {
            position: 'bottom',
          },
          colors: data.options.map(item => item.color)
        }, 
        series: data.options.map(item => ({ name: item.name, data: item.values}))
    }

    return (
        <div className="App">
            <p>Bar</p>
            <div style={{width: '100%'}}>
                <Chart
                    options={settings.options}
                    series={settings.series}
                    type="bar"
                    height={350}
                    width={800}
                />
            </div>
        </div>
  );
}

export default Bar