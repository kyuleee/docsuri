import React, {useState, useEffect} from "react";
import "./style/reset.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Page as MainPage } from "./pages/MainPage/Page";
import LoginPage from "./pages/Login/LoginPage";
import Join from "./pages/Login/Join";
import MyPage from "./pages/MyPage/MyPage";
import StudyPage from "./pages/StudyPage/Studypage";
import StudyEbook from "./pages/StudyBook/StudyEbook";
import Notification from "./pages/community/notification/Notification";
import Challenge from "./pages/Challenge/Challenge";
import Sudahark from "./pages/community/Sudahark/SUDAHARK";

import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar/SideBar";
import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  


  return (
    
    <>
    {loading ? <Loading/>:<>
      <Header />
      <SideBar />
      <Routes>
        <Route path="/docsuri/" element={<MainPage />} />
        <Route path="/StudyPage" element={<StudyPage />} />
        <Route path="/StudyEbook" element={<StudyEbook />} />
        <Route path="/Challenge" element={<Challenge />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/join" element={<Join />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/sudahark" element={<Sudahark />} />
      </Routes>
      <Footer /></>}
      {/* <ScrollDirectionDetector/> */}
    </>
  
  );
}

export default App;
