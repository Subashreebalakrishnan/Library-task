import logo from './logo.svg';
import './App.css';
import bootstrap from "bootstrap/dist/css/bootstrap.min.css"
import Sidebar from './Sidebar';
import Nav from './Nav';
import Lib from './Lib';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Create from './Create';
import View from './View';
import Edit from './Edit';


function App() {
  return (
    
    <BrowserRouter>
        <div id="wrapper">
          <Sidebar></Sidebar>
           <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <Nav></Nav>
                <Routes>
                  <Route path="/library" element={<Lib />}> </Route>
                  <Route path="/Create" element={<Create/>}> </Route>
                  <Route path="/lib/:id" element={<View/>}> </Route>
                  <Route path="/lib/edit/:id" element={<Edit/>}> </Route>
               </Routes>
           </div>
     </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
