import React from "react"
import Chart from "react-apexcharts";
import { SeriesMovigrama3 } from "./movigramaSeries";
import { seriesMovigramaNew } from "./newMovigramaSeries";

const Movigrama2 = () => {  
    const date = seriesMovigramaNew.Movigram.map(item => item[0])

    const settings = {
        series: [
          {
          name: 'Entradas',
          type: 'column',
          // data: SeriesMovigrama3.supply.map(item => item)
          data: [0,0,0,0,0,0,0,0,0,0,]
        }, 
          {
          name: 'Saidas',
          type: 'column',
          // data: SeriesMovigrama3.consumption.map(item => item)
          data: [0,0,0,0,0,0,0,0,0,0,]
        }, 
        {
          name: 'tunel 6',
          type: 'area',
          // data: SeriesMovigrama3.zonegray.map(item => item)
          data: [0,0,0,0,0,0,0,0,0,0,]
        }, 
        {
          name: 'tunel 5',
          type: 'area',
          // data: SeriesMovigrama3.zonered2.map(item => item)
          data: [0,0,0,0,0,0,0,0,0,0,]
        }, 
        {
          name: 'tunel 4',
          type: 'area',
          // data: SeriesMovigrama3.zoneyellow2.map(item => item)
          data: [0,0,0,0,0,0,0,0,0,0,]
        }, 
        {
          name: 'tunel 3',
          type: 'area',
          // data: SeriesMovigrama3.zonegreen.map(item => item)
          data: [0,0,0,0,0,0,0,0,0,0,]
        }, 
        {
          name: 'tunel 2',
          type: 'area',
          // data: SeriesMovigrama3.zoneyellow.map(item => item)
          data: [0,0,0,0,0,0,0,0,0,0,]
        }, 
        {
          name: 'tunel 1',
          type: 'area',
          // data: SeriesMovigrama3.zonered1.map(item => item)
          data: [0,0,0,0,1700,0,0,0,0,0,]
        }, 
        {
          name: 'Saldo',
          type: 'line',
          // data: SeriesMovigrama3.balance.map(item => item)
          data: [0,0,0,0,1200,0,0,0,0,0,]
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
            colors: ['#14651C', '#A50D0D', '#BDBDBD', '#F2CFCF', '#EEF0CA', '#C9EAC9', '#EEF0CA', '#F2CFCF', '#27568E'],
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
              opacity: [0.85, 0.85, 1, 1, 1, 1, 1, 1, 1],
              gradient: {
                inverseColors: false,
                shade: 'light',
                type: "diagonal1",
                opacityFrom: 0.85,
                opacityTo: 0.55,
                stops: [0, 100, 100, 100]
              }
            },
            labels: date,
            xaxis: {
              type: 'date',
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
                    width="700"
                />
            </div>
        </div>
  );
}

export default Movigrama2