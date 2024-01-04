import React from "react"
import Chart from "react-apexcharts";

const BarLine = () => {

  const data = [
    {
      color: "#D9D9D9",
      data: [3]
    },
    {
      color: "#F6C8E4",
      data: [7]
    },
    {
      color: "#EBBED7",
      data: [10]
    },
    {
      color: "#D3AAC1",
      data: [5]
    },
    {
      color: "#CBA4BA",
      data: [20]
    },
    {
      color: "#EC92C5",
      data: [10]
    },
    {
      color: "#EB82C1",
      data: [5]
    },
    {
      color: "#EC5EBA",
      data: [20]
    },
    {
      color: "#CF2B95",
      data: [10]
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
            enabled: false
          },
          dataLabels: {
            enabled: false
          },
          colors: data.map(item => item.color),
        }, 
        series: data.map(item => ({ data: item.data }))
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