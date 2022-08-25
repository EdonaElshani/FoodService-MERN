import './App.css';
import './form.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateFood from './components/CreateFood';
import Details from './components/Details';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import EditFood from './components/EditFood';
import NotFound from './components/NotFound';
import AboutUs from './components/AboutUs';
import DisplayAllFood from './components/DisplayAllFood';


    function App() {
      return (
        <div className="container">
          <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/new" element={<CreateFood />} />
              <Route path="/NotFound" element={<NotFound />} />
              <Route path="/edit/:id" element={<EditFood />} />
              <Route path="/details/:id" element={<Details />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/allFood" element={<DisplayAllFood />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      );
    }


export default App;
