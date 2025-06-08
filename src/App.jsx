import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import DisplayDetails from './components/DisplayDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<RegistrationForm />} />
          <Route path="/details" element={<DisplayDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
