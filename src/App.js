
import Navbar from './layout/Navbar';
import Countries from './components/Countries'
import Test from './components/Test'
import CountriesList from './components/List/CountriesList';
import Search from './components/Search';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="">
     <Router>
      <Routes>
      <Route exact path="/" element={<Countries />} />
      
      </Routes>
     </Router>
    </div>
  );
}

export default App;
