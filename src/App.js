import './App.css';

import BarLine from './components/charts/BarLine';
import Bar from './components/charts/Bar';
import Movigrama from './components/charts/Movigrama';
import Movigrama2 from './components/charts/Movigrama2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Movigrama2 />
        </div>
        {/* <div>
          <Movigrama />
        </div> */}
        {/* <div style={{width: '100%'}}>
          <Bar />
        </div>
        <div style={{width: '100%'}}>
          <BarLine />
        </div> */}
      </header>
    </div>
  );
}

export default App;
