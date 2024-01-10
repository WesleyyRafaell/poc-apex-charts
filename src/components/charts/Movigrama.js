import React from "react"
import Chart from "react-apexcharts";

const Movigrama = () => {
    const data = {
        levels: [
            {
                y: 0,
                y2: 20,
                color: '#E3052E',
            },
            {
                y: 20,
                y2: 50,
                color: '#EFE706',
            },
            {
                y: 50,
                y2: 60,
                color: '#01F707',
            },
        ],
        series: [
        [1327359600000, -500],
        [1327446000000, 0],
        [1327532400000, 100.5],
        [1327618800000, 200.7],
        [1327878000000, 255],
        [1327964400000, 375.45],
        [1328050800000, 600.15],
        [1328137200000, 1012],
        [1328223600000, 2500],
        [1328482800000, 4018.19],
        [1328569200000, 6487.20],
        ]
    }

    // data.series.map(item => item)

    // [
    //   {
    //     x: new Date(1327359600000),
    //     y: -500,
    //   },
    //   {
    //     x: new Date(1327446000000),
    //     y: 0
    //   },
    //   {
    //     x: new Date(1327532400000),
    //     y: 100.5,
    //   },
    //   {
    //     x: new Date(1327618800000),
    //     y: 200.7
    //   },
    //   {
    //     x: new Date(1327878000000),
    //     y: 255
    //   },
    //   {
    //     x: new Date(1327964400000),
    //     y: 375.45
    //   },
    //   {
    //     x: new Date(1328050800000),
    //     y: 600.15
    //   },
    //   {
    //     x: new Date(1328137200000),
    //     y: 1012
    //   },
    //   {
    //     x: new Date(1328223600000),
    //     y: 2500
    //   },
    //   {
    //     x: new Date(1328482800000),
    //     y: 4018.19
    //   },
    //   {
    //     x: new Date(1328569200000),
    //     y: 6487.20
    //   },
    //   ]

    
    const settings = {
        series: [{
            name: "Saldo",
            type: "line", 
            data: [0, 25, 36, 30, 45, 35, 64, 52, 59, -36, 39]
          }, 
          {
            name: 'Entradas',
            type: 'column',
            data: [30, 0, 22, 27, 13, 22, 37, 21, 44, 22, 30]
          },
          {
            name: 'Saidas',
            type: 'column',
            data: [-30, -40, -22, -50, -13, -85, -70, -21, -44, -60, -30]
          },
        ],
          options: {
            chart: {
                toolbar: {
                    show: true,
                    tools: {
                        download: false,
                        selection: false,
                        pan: false,
                        zoom: true,
                        zoomin: true,
                        zoomout: true,
                    }
                },
              height: 350,
              type: 'line',
              id: 'areachart-2'
            },
            annotations: {
              yaxis: data.levels.map(item => (
                {
                    y: item.y,
                    y2: item.y2,
                    borderColor: '#000',
                    fillColor: item.color,
                    opacity: 0.2,
                }
              )),
              xaxis: [{
                x: '08/01/2003',
                x2: '09/01/2003',
                fillColor: '#c2c2c2'
              }],
            },
            dataLabels: {
              enabled: false
            },
            colors: ['#27568E', '#14651C', '#A50D0D'],
            stroke: {
              width: [1],
              curve: 'stepline'
            },
            grid: {
              padding: {
                right: 30,
                left: 20
              }
            },
            xaxis: {
              type: 'categories',
              categories: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
                '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
              ],
              labels: {
                show: true,
                rotate: -90,
                rotateAlways: true,
              },
              tooltip: {
                enabled: false,
              }
            },
            tooltip: {
                x: {
                    show: true,
                    format: 'dd MMM yyyy',
                    formatter: undefined,
                } 
            }
          },
      }
    return (
        <div className="App">
            <p>Movigrama</p>
            <div style={{width: '100%'}}>
                <Chart
                    options={settings.options}
                    series={settings.series}
                    type="line"
                    width="800"
                />
            </div>
        </div>
  );
}

export default Movigrama