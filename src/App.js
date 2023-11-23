import React from "react";
import "./style/reset.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Page as MainPage } from "./pages/MainPage/Page";
import Login from "./pages/Login/KakaoLogin";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainPage />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    <Footer/>
    </>
  );
}

export default App;
