
import "./App.css";
import Cart from "./components/Cart/Cart";
import List from "./components/List/List";
import logo from "./images/myntra-logo.png";

function App() {
  return (
    <div className="App dark">
      <header className="App-header">
        <img src={logo} alt="img" />
        <div className="right-header">
          <Cart />
        </div>
      </header>
      <div className="body-container">
        <List />
      </div>
    </div>
  );
}

export default App;