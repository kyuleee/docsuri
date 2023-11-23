import React from "react";
import "./style/reset.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Page as MainPage } from "./pages/MainPage/Page";
import Login from "./pages/Login/KakaoLogin";
import Join from "./pages/Login/Join";
import MyPage from "./pages/MyPage/MyPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<><MainPage /></>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </>
  );
}

export default App;
