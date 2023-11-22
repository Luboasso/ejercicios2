import './App.css'
import CounterFunctional from "./components/CounterFunctional/CounterFunctional";
import Greeting from './components/Greeting/Greeting';

function App() {
  return (
    <div>
      <CounterFunctional  initialValue={5} step={2}/>
      <CounterFunctional initialValue={10} step={3}/>
      <Greeting name="Euralio" />
    </div>
  );
}

export default App;
