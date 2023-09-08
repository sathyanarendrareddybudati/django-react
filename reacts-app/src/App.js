import './App.css';
import SignupForm from './signup';
import LoginForm from './signin'; 
import Dashboard from './dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <div className="App">
        <h1>hello</h1>
        <Routes> 
          <Route path="/login" element={<LoginForm />} /> 
          <Route path="/" element={<SignupForm />} /> 
          <Route path="/dashboard" element={<Dashboard />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;

