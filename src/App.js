import './App.css';
import Info from './Components/CorporateInfo/Info';
import Employees from './Components/Employees/Employees';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Menubar from './Components/MenuBar/Menubar';
import Pagebar from './Components/Pagebar/Pagebar';
import Videobar from './Components/Videobar/Videobar';
import Vision from './Components/Vision/Vision';


function App() {
  return (
    <div className="App">
      <Header/>
      <Menubar/>
      <Pagebar/>
      <div className="Appbar">
      <Home/>
      <Employees/>
      <Vision/>
      <Info/>
      <Videobar/>
      </div>
      <Footer/>
     
      
    </div>
  );
}

export default App;
