import './App.css';
import Conditional from './components/Conditional';
import Dept from './components/Dept';
import Empolyeecard from './components/Empolyeecard';

function App() {
  return (
    <div className="App">
      <Empolyeecard name="Shantanu" salary="20k" age="21"/>
      <Empolyeecard name="Golu" salary="10k" age="20" />
      <Dept name="sales" budget="1cr" emply="30" />
      <Conditional login={false} />
      
    </div>
  );
}

export default App;
