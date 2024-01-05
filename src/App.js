import './App.css';

import BarLine from './components/charts/BarLine';
import Bar from './components/charts/Bar';
import Movimograma from './components/charts/Movimograma';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Movimograma />
        </div>
        <div style={{width: '100%'}}>
          <Bar />
        </div>
        <div style={{width: '100%'}}>
          <BarLine />
        </div>
      </header>
    </div>
  );
}

export default App;
