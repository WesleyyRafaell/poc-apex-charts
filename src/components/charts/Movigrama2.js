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

console.log('sas', generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
  min: 10,
  max: 60
}))

const Movigrama2 = () => {    
    const settings = {
        series: [
          {
          name: 'Entradas',
          type: 'column',
          // data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
          data: SeriesMovigrama.input.map(item => item)
        }, 
          {
          name: 'Saidas',
          type: 'column',
          // data: [-20, -15, -60, -37, -13, -22, -37, -21, -44, -22, -30]
          data: SeriesMovigrama.output.map(item => item)
        }, 
        {
          name: 'tunel 3',
          type: 'area',
          // data: [95, 85, 85, 85, 85, 90, 90, 90, 70, 70, 70]
          data: SeriesMovigrama.tunel3.map(item => item.value)
        }, 
        {
          name: 'tunel 2',
          type: 'area',
          // data: [85, 75, 75, 75, 75, 80, 80, 80, 60, 60, 60]
          data: SeriesMovigrama.tunel2.map(item => item.value)
        }, 
        {
          name: 'tunel 1',
          type: 'area',
          // data: [75, 65, 65, 65, 65, 70, 70, 70, 50, 50, 50]
          data: SeriesMovigrama.tunel1.map(item => item.value)
        }, 
        {
          name: 'Saldo',
          type: 'line',
          // data: [30, 25, 36, 30, 22, 35, 64, 85, 59, 27, 39]
          data: SeriesMovigrama.balance.map(item => item)
        }],
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
            colors: ['#14651C', '#A50D0D', '#C9EAC9', '#EEF0CA', '#F2CFCF', '#27568E'],
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
            fill: {
              opacity: [0.85, 0.85, 1, 1, 1, 1],
              gradient: {
                inverseColors: false,
                shade: 'light',
                type: "diagonal1",
                opacityFrom: 0.85,
                opacityTo: 0.55,
                stops: [0, 100, 100, 100]
              }
            },
            annotations: {
              xaxis: [
                {
                  x: 0,
                  x2: 101,
                  fillColor: '#BDBDBD',
                  opacity: 0.35,
                },
                {
                  x: 239,
                  x2: 253,
                  fillColor: '#BDBDBD',
                  opacity: 0.35,
                },
            ]
            },
            labels: SeriesMovigrama.day.map(item => item),
            xaxis: {
              type: 'category',
              tickAmount: 25,
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

export default Movigrama2