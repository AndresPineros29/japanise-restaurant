import React from "react";
import { Home, Reservations, Contact, AboutUs } from "./";

import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

const Main = () => {
  const location = useLocation();

  return (
    <AnimatePresence initial={true} mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Main;
