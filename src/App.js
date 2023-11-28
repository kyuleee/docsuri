import React from "react";
import "./style/reset.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Page as MainPage } from "./pages/MainPage/Page";
import Login from "./pages/Login/KakaoLogin";
import Join from "./pages/Login/Join";
import MyPage from "./pages/MyPage/MyPage";
import StudyPage from "./pages/StudyPage/Studypage";
import StudyBook from "./pages/StudyBook/StudyBook";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Test from "./test/MyComponent";

function App() {
  return (
    <>
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/StudyPage" element={<StudyPage />} />
        <Route path="/StudyBook" element={<StudyBook />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
