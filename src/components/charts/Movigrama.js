import React from "react"
import Chart from "react-apexcharts";
import { SeriesMovigrama } from "./movigramaSeries";

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
        ]
    }
    
    const settings = {
        series: [
          {
            name: "Saldo",
            type: "line", 
            data: SeriesMovigrama.balance.map(item => item)
          }, 
          {
            name: 'Entradas',
            type: 'column',
            data: SeriesMovigrama.input.map(item => item)
          },
          {
            name: 'Saidas',
            type: 'column',
            data: SeriesMovigrama.output.map(item => item)
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
              categories: SeriesMovigrama.day.map(item => item),
              overwriteCategories: ['teste', 'teste 2'],
              labels: {
                show: true,
                rotate: -90,
                // rotateAlways: true,
                hideOverlappingLabels: true,
                showDuplicates: false,
                trim: true,
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