import './App.css';
import Header, { Employee, Intern } from './components/Header';
import { Id } from './pratices/Propes';
function App() {
  return (
    <div className="App">
      <Header />
      <Header />
      <Employee />
      <Intern />
      <Id/>
    </div>
  );
}

export default App;
