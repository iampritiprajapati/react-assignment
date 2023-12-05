import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import About from './About';
import Register from './Register';
import Login from './Login';
import Contact from './Contact';
import NotFound from './NotFound';
import Admin from './Admin';
import Aboutus from './Aboutus';
import CheckBoxe from './CheckBoxe';
import Hello from './Hello';
import View from './View';
import Post from './Post';
import Map from './Map';
import WeatherComponent from './WeatherComponent';
import WeatherComponentStatic from './WeatherComponentStatic';
import Weathercs from './Weathercs';
import Log from './Log';
     function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Layout/>}/>
             <Route path="Home" element={<Home/>}/>
             <Route path="About" element={<About/>}/>
             <Route path="Register" element={<Register/>}/>
             <Route path="Login" element={<Login/>}/>
             <Route path="Contact" element={<Contact/>}/>
             <Route path="Admin" element={<Admin/>}/>
             <Route path="Aboutus" element={<Aboutus/>}/>
             <Route path="CheckBoxe" element={<CheckBoxe/>}/>
             <Route path="Hello" element={<Hello/>}/>
             <Route path="View" element={<View/>}/>
             <Route path="Post" element={<Post/>}/>
             <Route path="Map" element={<Map/>}/> 
             <Route path="WeatherComponent" element={<WeatherComponent/>}/>
             <Route path="WeatherComponentStatic" element={<WeatherComponentStatic/>}/>
             <Route path="Weathercs" element={<Weathercs/>}/>
             <Route path="Log" element={<Log age="22" name="Preeti"/>}/>
             <Route path="*" element={<NotFound/>}>
             
          </Route>
</Routes>
    </BrowserRouter>
  );
}
export default App;
