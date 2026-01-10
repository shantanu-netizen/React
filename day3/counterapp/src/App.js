

import Fruits from './components/Fruits';
import Author from "./components/Author";
function App() {
   let arr = ["Grapes","Apple", "Mango", "Oranges", "PineApple", "Watermelon"];
  return (
    <div className="App">
      <Fruits list={arr} />
       <Author/>
    </div>
  );
}

export default App;
