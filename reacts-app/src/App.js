import './App.css';
import SignupForm from './signup';
import LoginForm from './signin'; // Corrected import
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Added Routes

function App() {
  return (
    <Router>
      <div className="App">
        <h1>hello</h1>
        <Routes> {/* Wrap your Routes */}
          <Route path="/login" element={<LoginForm />} /> {/* Use the 'element' prop */}
          <Route path="/" element={<SignupForm />} /> {/* Use the 'element' prop */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

