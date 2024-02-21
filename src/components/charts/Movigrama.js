import React from "react"
import Chart from "react-apexcharts";
import { SeriesMovigrama } from "./movigramaSeries";

var generateDayWiseTimeSeries = function (baseval, count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = baseval;
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push([x, y]);
    baseval += 86400000;
    i++;
  }
  return series;
}

// console.log('sas', generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
//   min: 10,
//   max: 60
// }))

const Movigrama = () => {
    const data = {
        levels: [
            {
                y: 80,
                y2: 100,
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
        ]
    }
    
    const settings = {
        series: [
          {
            name: "Saldo",
            type: "line", 
            // data: [[1, 10], [2, 25], [3, 45], [4, 56], [5, 13], [6, 72], [7, 38], [8, 25], [9, 10], [10, 22]]
            // data: [20, 50, 80, 90, 45, 72, 29, 25, 45, 22]
            data: SeriesMovigrama.balance.map(item => item)
          }, 
          {
            name: 'Entradas',
            type: 'column',
            // data: [[1, 10], [2, 25], [3, 45], [4, 56], [5, 13], [6, 72], [7, 38], [8, 25], [9, 10], [10, 22],]
            // data: [70, 85, 80, 90, 45, 72, 29, 25, 45, 22]
            data: SeriesMovigrama.input.map(item => item)
          },
          {
            name: 'Saidas',
            type: 'column',
            // data: [15, 12, 25, 82, 45, 72, 29, 25, 45, 22]
            data: SeriesMovigrama.output.map(item => item)
          }
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
              id: 'areachart-2',
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
            // xaxis: {
            //   type: 'datetime'
            // },
            xaxis: {
              type: 'categories',
              categories: SeriesMovigrama.day.map(item => item),
              // categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
              tickAmount: 25,
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