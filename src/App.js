import './App.css';
import Navbar from './Component/Navbar';
import Calendar from './Component/Calendar/Calendar';
import ShowingTask from './Component/TeacherData/ShowingTask';
import Form from './Component/Form/Form';
import { useState } from 'react';

function App() {

  const [show, hide] = useState(false);
  const showModal = () => {
    hide({ show: true });
  };

  const hideModal = () => {
    hide({ show: false });
    console.log(show);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <button className="create" onClick={showModal}  ><span>+</span> Create </button>
        <Form show={show} handleClose={hideModal} />
        <div className="calendar__header">
          <Calendar />
          <ShowingTask />
        </div>
      </header>
    </div>
  );
}

export default App;
