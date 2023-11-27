import React from "react";
import "./style/reset.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Page as MainPage } from "./pages/MainPage/Page";
import Login from './pages/Login/LoginPage';
import KakaoLogin from './pages/Login/KakaoLogin'
import Join from "./pages/Login/Join";
import MyPage from "./pages/MyPage/MyPage";
import StudyPage from "./pages/StudyPage/Studypage";
import StudyBook from "./pages/StudyBook/StudyBook";
import Notification from "./pages/community/notification/Notification";
import Challenge from "./pages/Challenge/Challenge";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./pages/SideBar/SideBar";

function App() {
  return (
    <>
      <Header />
      <SideBar/>
      <Routes>
        <Route path="/" element={<><MainPage /></>}/>
        <Route path="/StudyPage" element={<StudyPage/>}/>
        <Route path="/StudyBook" element={<StudyBook/>}/>
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/login/kakao" element={<KakaoLogin />} /> */}
        <Route path="/login" element={<KakaoLogin />} />
        <Route path="/Challenge" element={<Challenge />} />
        <Route path="/join" element={<Join />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/notification" element={<Notification />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
