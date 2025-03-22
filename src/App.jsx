import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies from "./movie-zone/Movies";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Person from "./components/Person";
import Events from "./components/Events";
import Counter from "./components/Counter";
import ShowProducts from "./components/ShowProducts";
import FilterProducts from "./components/FilterProducts";
import LearningUseEffect from "./components/LearningUseEffect";
import SomethingNew1 from "./components/something/SomethingNew1";
import CardComponent from "./components/something/CardComponent";

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar har page par dikhega */}
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/person" element={<Person />} />
        <Route path="/events" element={<Events />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/show-products" element={<ShowProducts />} />
        <Route path="/filter-products" element={<FilterProducts />} />
        <Route path="/movie-zone" element={<Movies />} />
        <Route path="/use-effect" element={<LearningUseEffect />} />
        <Route path="/something-1" element={<SomethingNew1 />} />
        <Route path="/card-component" element={<CardComponent />} />
      </Routes>
      <Footer /> {/* Footer bhi har page par dikhega */}
    </Router>
  );
};

export default App;
