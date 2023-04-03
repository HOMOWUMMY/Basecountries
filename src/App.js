
import Navbar from './layout/Navbar';
import Countries from './components/Countries'
import Test from './components/Test'
import CountriesList from './components/List/CountriesList';
import './App.css';

function App() {
  return (
    <div className="App">
     <Navbar />
     <br/>
     <Countries />
     {/* <Test /> */}
    </div>
  );
}

export default App;
