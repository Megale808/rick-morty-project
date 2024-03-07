import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from "./components/NavBar";




function App() {
 


  return (
    <>
      <NavBar/> 
      <Outlet/>
      
    </>
  )
}

export default App
