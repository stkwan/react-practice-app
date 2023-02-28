import './App.css';
import { Greeting } from './pages/greeting';

function App() {
  return (
    <div id="app">
      <Greeting firstName="Bob">
        <li>First</li>
        <li>Second</li>
        <li>Third</li>
      </Greeting>
    </div>
  );
}

export default App;
