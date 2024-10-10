
import './App.css';
import Login from './componates/login/Login';
import Navbar from './componates/navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './componates/shop/Shop';
import Service from './Service';
import Work from './componates/work/Work';
import ProjectForm from './componates/offers/ProjectForm';
import Merci from './componates/merci/Merci'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/service' element={<Service />} />
        <Route path='/portfolio' element={<Work />}/>
        <Route path='/projectform' element={<ProjectForm />}/>
        <Route path='/merci' element={<Merci />} />
        <Route path='/login' element={<Login/>} />
        
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
