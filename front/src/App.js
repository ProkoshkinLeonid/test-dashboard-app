import { Header } from './Components/Header/Header';
import { Navbar } from './Components/Navbar/Navbar';
import { Route, Routes } from "react-router-dom";
import { AnalyzePage } from './Pages/AnalyzePage/AnalyzePage';

function App() {
  return (
     <>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<AnalyzePage/>}/>
      </Routes>
     </>
  );
}

export default App;
