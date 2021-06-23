import './App.css';
import Navbar from './Component/Navbar';
import Calendar from './Component/Calendar/Calendar';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Calendar />
      </header>
    </div>
  );
}

export default App;
