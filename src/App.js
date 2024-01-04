import './App.css';

import Chart from "react-apexcharts";
import Tmea from './components/charts/tmea';

function App() {
  const movigrama = {
    options: {
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
      grid: {
        show: false,
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 60, 80, 40, 70, 20, 70, 90]
      }
    ]
  }

  



  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Chart
            options={movigrama.options}
            series={movigrama.series}
            type="line"
            width="500"
          />
        </div>
        <div style={{width: '100%'}}>
          <Tmea />
        </div>

      </header>
    </div>
  );
}

export default App;
