import logo from './logo.svg';
import './App.css';
import Takedata from './components/Takedata';
import Fetchdata from './components/Fetchdata';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header/>
      <Router>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/fetchdata" element={<Fetchdata/>}/>
        <Route path="/putdata" element={<Takedata/> }/>
       </Routes>
      </Router>
      <Footer/>
      </header>
    </div>
  );
}

export default App;
