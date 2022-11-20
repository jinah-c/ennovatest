import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './Conponents/Page/Navbar/Navbar';
import MainPage from './Conponents/Page/MainPage/MainPage';
import Ennova from './Conponents/Page/Ennova/Ennova';
import FinancialPlatform from './Conponents/Page/FinancialPlatform/FinancialPlatform';
import Service from './Conponents/Page/ServicePage/Service';
import Bottom from './Conponents/Page/Bottom/Bottom';

function App() {
  return (
    <div className='AppHome'>
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path="MainPage" element={<MainPage/>}  />
          <Route path="Ennova" element={<Ennova/>}  />
          <Route path="FinancialPlatform" element={<FinancialPlatform/>}  />
          <Route path="Service" element={<Service/>}  />
        </Routes>
        <Bottom />
      </BrowserRouter>
    </div>
  );
}

export default App;
