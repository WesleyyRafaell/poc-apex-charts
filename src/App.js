import './App.css';

import Chart from "react-apexcharts";

function App() {
  const options = {
    chart: {
      toolbar: {
        show: false
      },
      id: "chart"
    },
    stroke: {
      curve: 'stepline',
    },
    dataLabels: {
      enabled: false
    },
    title: {
      text: 'Movigrama',
      align: 'left'
    },
  }

  const series = [
    {
      name: "series-1",
      data: [30, 60, 80, 40, 70, 20, 70, 90]
    }
  ]


  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Chart
            options={options}
            series={series}
            type="line"
            width="500"
          />
        </div>

      </header>
    </div>
  );
}

export default App;
