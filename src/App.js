import logo from './logo.svg';
import './App.css';
import uitc from "./img/uitc_logo.png";
import Home from "./pages/Home"
import Navbar from './componets/Navbar';
import Function,{FunctionMini} from "./2-dars/Function";
import Class from "./2-dars/Class";
import {MainSection2,MainSection} from "./2-dars/AllComponets"
import Props from "./2-dars/Props"
import Map from './2-dars/Map';
function App() {
  const all = { name1:"Bahrom",name2:"Humoyun" }
  return (
    <div className="App">
      {/* <Function/>
      <Class/>
      <MainSection2/>
      <MainSection/>
      <FunctionMini/> */}
    {/* <Props name="Bahrom" all={all} age="21"/>
    <Props name="Humoyun" age/> */}
    <Map/>

    </div>
  );
}

export default App;
