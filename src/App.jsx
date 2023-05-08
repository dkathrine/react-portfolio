import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LandingPage, ProjectsPage, MainPage } from './pages/index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
