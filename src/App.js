import React from "react";
import "./style/reset.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Page as MainPage } from "./pages/MainPage/Page";
import Login from "./pages/Login/KakaoLogin";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
