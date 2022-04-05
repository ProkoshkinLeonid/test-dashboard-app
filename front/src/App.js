import { Header } from './Components/Header/Header';
import { Navbar } from './Components/Navbar/Navbar';
import { Route, Routes } from "react-router-dom";
import { AnalyzePage } from './Pages/AnalyzePage/AnalyzePage';
import './App.css'

function App() {
  return (
     <div className='App'>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<AnalyzePage/>}/>
      </Routes>
     </div>
  );
}

export default App;
