import WelcomePage from './pages/WelcomePage';
import PersonalInfo from './pages/PersonalInfo';
import NoPage from './pages/NoPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
      <div>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<WelcomePage />}/>
          <Route path="personal-information" element={<PersonalInfo />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
