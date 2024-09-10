import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Home from "./routes/Home";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Search from "./routes/Search";
import Services from "./components/Services";
import ChatBot from "./chatbotfrontend-main/src/chatbot";
import PaymentPage from "../../Payment/client/vite-project/src/App";
export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/chatbot" element={<ChatBot />} />
        <Route path="/ticket" element={<PaymentPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
