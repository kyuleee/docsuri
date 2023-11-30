import { useEffect, useRef } from 'react';
import users from '../../datas/userData.json';
import { useNavigate } from 'react-router-dom';
import './MyPage.css'

const MyPage = () => {
    const navigate = useNavigate();
    const userRef = useRef({ ...sessionStorage });
    const dataview = () => {
        // console.log(sessionStorage);
        console.log(userRef.current);
        // const userData = JSON.stringify(userRef.current);
        const userId = sessionStorage.getItem("ID"); // Assuming you store the user ID in sessionStorage
        const currentUser = users.find((user) => user.id === userId);

        if (currentUser) {
            userRef.current = currentUser;
            const profile = userRef.current.profile;

            if (profile) {
                const image = new Image();
                image.src = profile;
                image.alt = "Profile Image";
                image.width = 150;
                image.height = 150;

                const profileDisplay = document.getElementById("profileDisplay");
                profileDisplay.innerHTML = "";
                profileDisplay.appendChild(image);
            }
        }
    };
    useEffect(() => {
        dataview();
    }, []);
    const logout = ()=>{
        sessionStorage.clear();
        navigate('/login');
    }
    return (
        <div className='myPage w1400'>
            {/* <button onClick={dataview} style={{border:"1px solid red"}}>보기</button> */}
            <h2>마이페이지</h2>
            <article className='sub_cont'>
                <div className='mypage_left'>
                    <div className='myProfile'>
                        <div className='mptop'>
                            <div>
                                <span className='profile_label'>학생</span>
                                <span><strong style={{fontSize:'18px'}}>{userRef.current.name}</strong>님 반갑습니다!</span>
                            </div>
                            <div className='mypageTotal'>
                                <div>
                                    <div id="profileDisplay"></div>
                                    <div className='myage'>
                                        <p>학교 : {userRef.current.school}</p>
                                        <p>학년 : {userRef.current.grade}학년</p>
                                    </div>
                                </div>
                                <div></div>
                            </div>
                        </div>
                        <div className='badgeWrap'>
                            <p>1: {userRef.current.badge && typeof userRef.current.badge === 'string' ? userRef.current.badge.split(",")[0] : ""}</p>
                            <p>2: {userRef.current.badge && typeof userRef.current.badge === 'string' ? userRef.current.badge.split(",")[1] : ""}</p>
                            <p>3: {userRef.current.badge && typeof userRef.current.badge === 'string' ? userRef.current.badge.split(",")[2] : ""}</p>
                            <p>4: {userRef.current.badge && typeof userRef.current.badge === 'string' ? userRef.current.badge.split(",")[3] : ""}</p>
                            <p>5: {userRef.current.badge && typeof userRef.current.badge === 'string' ? userRef.current.badge.split(",")[4] : ""}</p>
                            <p>6: {userRef.current.badge && typeof userRef.current.badge === 'string' ? userRef.current.badge.split(",")[5] : ""}</p>
                        </div>
                    </div>
                    <div className='recommendBook'>
                        <h3>추천도서</h3>
                        <div className='bookWrap'>
                            <img src='./img/수학 하지 않는 수학.jpg' alt='수학하지 않는 수학'></img>
                            <img src='./img/발칙한 수학책.jpg' alt='발칙한 수학책'/>
                            <img src='./img/이런 수학은 처음이야.jpg' alt='이런 수학은 처음이야'/>
                            <img src='./img/법칙, 원리, 공식을 쉽게 정리한 수학 사전.jpg' alt='법칙, 원리, 공식을 쉽게 정리한 수학 사전'/>
                            <img src='./img/신사고 쎈 초등 수학 4-2.jpg' alt='신사고 쎈 초등 수학 4-2'/>
                        </div>
                    </div>
                </div>

                <div className='mypage_right'>
                    
                </div>
            </article>
            
            <p>{userRef.current.name}</p>
            <p>{userRef.current.level}</p>
            <p>{userRef.current.grade}</p>
            <p>{userRef.current.level}</p>
            {/* <p>{userRef.current.badge.split(',')[3]}</p> */}
            <p>Third Badge: {userRef.current.badge && typeof userRef.current.badge === 'string' ? userRef.current.badge.split(",")[2] : ""}</p>
            <button onClick={logout}>로그아웃</button>
        </div>
    );
}

export default MyPage;