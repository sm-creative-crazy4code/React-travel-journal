
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import "./style.css"
import TravelCard from './Components/TravelCard';
import travelDescription from "./TravelDescription"
function App() {
  const displayDescription= travelDescription.map((travel)=>{
    return <TravelCard travel={travel}/>
  })
  return (
    <div className="App">
     
    <Header/>
    {displayDescription}
    </div>
  );
}

export default App;
