import React from "react"
import Chart from "react-apexcharts";
import { movigramSummaryDoc } from "./movigramaSeriesSprint4";

const Movigrama2 = () => { 
  const generateArrayFromResume = (arrayToGenerate, type) => {
    const arrayUnformatted = arrayToGenerate.map((item, index) => {
      if(!arrayToGenerate[index + 1]) return item
      let startDate = new Date(arrayToGenerate[index][0]);
      let endDate = new Date(arrayToGenerate[index + 1][0]);

      const range = generateDateRange(startDate, endDate)
      // if(type === 'tunnel'){
      //   console.log(`range`, range)
      // }

      if(range.length > 1){
        return range.map(itensRange => {
          if(type === 'transaction'){
            return [itensRange, item[1], item[2], item[3]]
          }

          return  [itensRange, item[1], item[2], item[3], item[4], item[5]]
        })
      }
      return item
    })

  
    function generateDateRange(startDate, endDate) {
      const dateArray = [];
      const currentDate = new Date(startDate);
      const end = new Date(endDate);
      
      while (currentDate < end) {
          dateArray.push(`${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`);
          currentDate.setDate(currentDate.getDate() + 1);
      }
      
      return dateArray;
    }
  
    function isArrayOfArrays(arr) {
      if (!Array.isArray(arr)) {
          return false;
      }
      
      for (let i = 0; i < arr.length; i++) {
          if (!Array.isArray(arr[i])) {
              return false;
          }
      }
      
      return true;
    }
  
    const expandedArray = []

    arrayUnformatted.forEach(item => {
      if(isArrayOfArrays(item)) {
        item.forEach(array => expandedArray.push(array))
        return
      }
      expandedArray.push(item) 
    })

    return expandedArray
  }

  const transactions = generateArrayFromResume(movigramSummaryDoc.transactions, 'transaction')  
  const tunnels = generateArrayFromResume(movigramSummaryDoc.tunnel, 'tunnel')  


  const dates = transactions.map((item) => item[0]).flatMap(array => array)

  const balance = transactions.map((item) => item[1]).flatMap(array => array)
  const supply = transactions.map((item) => item[2]).flatMap(array => array)
  const consumption = transactions.map((item) => item[3]).flatMap(array => array)

  const zonered1 = tunnels.map((item) => item[1]).flatMap(array => array)
  const zoneyellow = tunnels.map((item) => item[2]).flatMap(array => array)
  const zonegreen = tunnels.map((item) => item[3]).flatMap(array => array)
  const zoneyellow2 = tunnels.map((item) => item[4]).flatMap(array => array)
  const zonered2 = tunnels.map((item) => item[5]).flatMap(array => array)


    const settings = {
        series: [
          {
          name: 'Entradas',
          type: 'column',
          data: supply.map(item => item)
        }, 
          {
          name: 'Saidas',
          type: 'column',
          data: consumption.map(item => item)
        }, 
        {
          name: 'tunel 6',
          type: 'area',
          // data: SeriesMovigrama3.zonegray.map(item => item)
          data: []
        }, 
        {
          name: 'tunel 5',
          type: 'area',
          data: zonered2.map(item => item)
          // data: []
        }, 
        {
          name: 'tunel 4',
          type: 'area',
          data: zoneyellow2.map(item => item)
          // data: []
        }, 
        {
          name: 'tunel 3',
          type: 'area',
          data: zonegreen.map(item => item)
          // data: []
        }, 
        {
          name: 'tunel 2',
          type: 'area',
          data: zoneyellow.map(item => item)
          // data: []
        }, 
        {
          name: 'tunel 1',
          type: 'area',
          data: zonered1.map(item => item)
          // data: []
        }, 
        {
          name: 'Saldo',
          type: 'line',
          data: balance.map(item => item)
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
              animations: {
                enabled: false
              },
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
            annotations: {
              xaxis: [
                {
                  x: "22/05/2023",
                  x2: "10/02/2023",
                  fillColor: '#BDBDBD',
                  opacity: 0.65
                }
              ]
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
            labels: dates.map(item => item),
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