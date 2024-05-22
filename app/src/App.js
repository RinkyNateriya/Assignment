
import './App.css';
import Dashbord from './component/Dashbord';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import CustomerRegistration from './component/CustomerRegistration';
import AdminRegistration from './component/AdminRegistration';
import AdminLogin from './component/AdminLogin';
import Home from './component/Home';

function App() {
  return (
    <div className="App">
   
  

      <Router>
      <Dashbord/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/CustomerRegistration" element={<CustomerRegistration/>}></Route>
        <Route path="/AdminRegistration" element={<AdminRegistration/>}></Route>
        <Route path="/AdminLogin" element={<AdminLogin/>}></Route>
      </Routes>
      </Router>
   
    </div>
  );
}

export default App;
