import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate,useLocation } from 'react-router-dom';
import users from '../datas/userData.json';
import './Header.css';
const Header = () => {
    // 서브메뉴 나오게하기
    const [subNavVisible, setSubNavVisible] = useState(false);
    const navigate = useNavigate();
    const locationSection = useLocation();
    //   const userRef = useRef({ ...sessionStorage });
    const userId = sessionStorage.getItem("ID");
    const currentUser = users.find((user) => user.id === userId);
    const toggleSubNav = () => {
        setSubNavVisible(!subNavVisible);
    };
    const changePath = () => {
        if (currentUser) {
            navigate('/mypage');
        } else {
            navigate('/login')
        }
    }   
    useEffect(()=>{
        locationSection.pathname !== '/docsuri/' && window.scrollTo({top:0,left:0,behavior: "smooth"})
    })

    return (
        <div className="Header">
            <div className="headerCont">
                <Link to='/docsuri/'><div className="logo"></div></Link>
                <div>
                    <div className="loginIcon" onClick={changePath}></div>
                    <div className="menuBar" onClick={toggleSubNav}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </div>
            </div>
            <div className={`subNav ${subNavVisible ? 'visible' : ''}`}>
                <div className="subMenu">
                    <h2>MENU</h2>
                    <div className="close" onClick={toggleSubNav}></div>
                </div>
                <div className="subLink">
                    <Link to='/StudyPage'><div>교과학습</div></Link>
                    <Link to='/Challenge'><div>챌린지</div></Link>
                    <Link to='/notification'><div>게시판</div></Link>
                    <Link to='/sudahark'><div>수다학</div></Link>
                </div>
                <div className="login">
                    <Link to='/login'>
                        <p>로그인</p>
                    </Link>
                    <p>|</p>
                    <Link to='/join'>
                         <p>회원가입</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;