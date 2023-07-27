import "./App.css";
import TicTacToe from "./components/TicTacToe";

function App() {
  return (
    <div className="App">
      <h1 className="heading">Tic Tac Toe ⭕❌</h1>
      <TicTacToe />
      <div className="rule"></div>
      <p className="txt">
        By Dikshant Luthra , All rights reserved &#169; 2023
      </p>
    </div>
  );
}

export default App;
