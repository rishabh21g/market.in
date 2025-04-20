import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Loader from "./components/Loader";
const Home = lazy(()=>import("./pages/Home"));
const Search = lazy(()=>import("./pages/Search"));
const Cart = lazy(()=>import("./pages/Cart"));


const App = () => {
  return (
  <Suspense fallback={<Loader/>}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  </Suspense>
  );
};

export default App;
