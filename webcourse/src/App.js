import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  return (
  <BrowserRouter>
      <Routers>
         <Route path="/" element={<Menu/>}/>
              <Route path="Maincourse" element={<Menu/>}/>
              <Route path="Starter" element={<Starter/>}/>





       
          <Route/>
       </Route>
     </Routes>
  </BrowserRouter>
  );
}

export default App;
