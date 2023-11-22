import './App.css'
import CounterFunctional from "./components/CounterFunctional/CounterFunctional";

function App() {
  return (
    <div>
      <CounterFunctional  initialValue={5} step={2}/>
      <CounterFunctional initialValue={10} step={3}/>
    </div>
  );
}

export default App;
