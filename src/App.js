import logo from './logo.svg';
import './App.css';
import Employee from './Employee';
import POST from './POST';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome !</h1>
        <Employee/>
        <POST/>
      </header>
      
    </div>
  );
}

export default App;
