import logo from './logo.svg';
import './App.css';
import List from "./components/List";
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Cart/>
      <hr/>
      <List/>
    </div>
  );
}

export default App;
