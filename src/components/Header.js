import React, { useState } from 'react';
import './Header.css';
const Header = () => {
    // 서브메뉴 나오게하기
    const [subNavVisible, setSubNavVisible] = useState(false);
  
    const toggleSubNav = () => {
      setSubNavVisible(!subNavVisible);
    };
  
    
    return ( 
        <div className="Header">
            <div className="headerCont">
                <div className="logo"></div>
                <div>
                    <div className="loginIcon"></div>
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
                    <div>교과학습</div>
                    <div>챌린지</div>
                    <div>마이페이지</div>
                    <div>게시판</div>
                    <div>수다학</div>
                </div>
                <div className="login">
                    <p>로그인</p>
                    <p>|</p>
                    <p>회원가입</p>
                </div>
            </div>
        </div>
     );
}
 
export default Header ;