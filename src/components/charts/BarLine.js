import React from "react"
import Chart from "react-apexcharts";

const BarLine = () => {

  const data = [
    {
      color: "#D9D9D9",
      name: 'item 1',
      values: [3]
    },
    {
      color: "#F6C8E4",
      name: 'item 2',
      values: [7]
    },
    {
      color: "#EBBED7",
      name: 'item 3',
      values: [10]
    },
    {
      color: "#D3AAC1",
      name: 'item 4',
      values: [5]
    },
    {
      color: "#CBA4BA",
      name: 'item 5',
      values: [20]
    },
    {
      color: "#EC92C5",
      name: 'item 6',
      values: [10]
    },
    {
      color: "#EB82C1",
      name: 'item 7',
      values: [5]
    },
    {
      color: "#EC5EBA",
      name: 'item 8',
      values: [20]
    },
    {
      color: "#CF2B95",
      name: 'item 9',
      values: [10]
    },
  ]


    const settings = {
        options: {
          chart: {
            toolbar: {
              show: false
            },
            type: "bar",
            stacked: true,
          },
          plotOptions: {
            bar: {
              horizontal: true,
              barHeight: 20,
            },
          },
          stroke: {
            width: 0,
            colors: ["#fff"],
            height: "1px",
          },
          xaxis: {
            labels: {
              show: false
            },
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
          },
          yaxis: {
            labels: {
              show: false
            },
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
          },
          grid: {
            show: false,
          },
          legend: {
            show: false,
          },
          tooltip: {
            enabled: true,
            x: {
              show: false,
          }
          },
          dataLabels: {
            enabled: false
          },
          colors: data.map(item => item.color),
        }, 
        series: data.map(item => ({ name: item.name, data: item.values}))
      }

    return (
        <div className="App">
            <p>Bar line</p>
            <div style={{width: '100%'}}>
                <Chart
                    options={settings.options}
                    series={settings.series}
                    type="bar"
                    width='100%'
                    height={100}
                />
            </div>
        </div>
  );
}

export default BarLine