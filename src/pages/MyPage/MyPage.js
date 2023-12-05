import { useEffect, useRef } from 'react';
import users from '../../datas/userData.json';
import { useNavigate } from 'react-router-dom';
import './MyPage.css'
import Progress from '../../components/contentBox/Progress';


const MyPage = () => {
    const navigate = useNavigate();
    const userRef = useRef({ ...sessionStorage });
    const dataview = () => {
        // console.log(sessionStorage);
        // console.log(userRef.current);
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
                // image.width = 150;
                // image.height = 150;
                const profileDisplay = document.getElementById("profileDisplay");
                profileDisplay.innerHTML = "";
                profileDisplay.appendChild(image);
                if (window.innerWidth > 460) {
                    image.width = 150;
                    image.height = 150;
                } else {
                    image.width = 100;
                    image.height = 100;
                }
            }
        }
    };
    useEffect(() => {
        dataview();
    }, []);
    const logout = () => {
        sessionStorage.clear();
        navigate('/login');
    }
    return (
        <div className='myPage'>
            {/* <button onClick={dataview} style={{border:"1px solid red"}}>보기</button> */}
            <div className='mypageTop'>
                <h2>마이페이지</h2>
                <button onClick={logout}>로그아웃</button>
            </div>
            <article className='sub_cont'>
                <div className='mypage_left'>
                    <div className='myProfile'>
                        <div className='mptop'>
                            <div>
                                <span className='profile_label'>{userRef.current.edu}</span>
                                {/* <span className='profile_label'>학생</span> */}
                                <span><strong style={{ fontSize: '18px' }}>{userRef.current.name}</strong>님 반갑습니다!</span>
                            </div>
                            <div className='mypageTotal'>
                                <div>
                                    <div id="profileDisplay"></div>
                                    <div className='myage'>
                                        <p>학교 : {userRef.current.school}</p>
                                        <p>학년 : {userRef.current.grade}학년</p>
                                    </div>
                                </div>
                                <div>{userRef.current.level} 등급</div>
                            </div>
                        </div>
                        <div className='badgeWrap'>
                            {/* <p>{userRef.current.badge && typeof userRef.current.badge === 'string' ? userRef.current.badge.split(",")[0] : ""}</p>
                            <p>{userRef.current.badge && typeof userRef.current.badge === 'string' ? userRef.current.badge.split(",")[1] : ""}</p>
                            <p>{userRef.current.badge && typeof userRef.current.badge === 'string' ? userRef.current.badge.split(",")[2] : ""}</p>
                            <p>{userRef.current.badge && typeof userRef.current.badge === 'string' ? userRef.current.badge.split(",")[3] : ""}</p>
                            <p>{userRef.current.badge && typeof userRef.current.badge === 'string' ? userRef.current.badge.split(",")[4] : ""}</p>
                            <p>{userRef.current.badge && typeof userRef.current.badge === 'string' ? userRef.current.badge.split(",")[5] : ""}</p> */}
                            {Array(6).fill().map((_, index) => (
                                <p key={index} style={{textAlign:'center'}}>
                                    <img src='/docsuri/img/goodjob.png' style={{ width: '100px', height: '100px' }} alt='참 잘했어요 스티커'/>
                                    <p>{userRef.current.badge && typeof userRef.current.badge === 'string' ? userRef.current.badge.split(",")[index] : ""}</p>
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className='recommendBook'>
                        <h3>추천도서</h3>
                        <div className='bookWrap'>
                            <a href='https://www.aladin.co.kr/m/mproduct.aspx?ItemId=256945177' target='_blank' rel="noreferrer"><img src={process.env.PUBLIC_URL + '/img/book1.jpg'} alt='수학하지 않는 수학' /></a>
                            <a href='https://www.aladin.co.kr/m/mproduct.aspx?ItemId=286921418' target='_blank' rel="noreferrer"><img src={process.env.PUBLIC_URL + '/img/book2.jpg'} alt='발칙한 수학책' /></a>
                            <a href='https://www.aladin.co.kr/m/mproduct.aspx?ItemId=255672255' target='_blank' rel="noreferrer"><img src={process.env.PUBLIC_URL + '/img/book3.jpg'} alt='이런 수학은 처음이야' /></a>
                            <a href='https://www.yes24.com/Product/Goods/45545900' target='_blank' rel="noreferrer"><img src={process.env.PUBLIC_URL + '/img/book4.jpg'} alt='법칙, 원리, 공식을 쉽게 정리한 수학 사전' /></a>
                            <a href='https://www.yes24.com/Product/Goods/106188521' target='_blank' rel="noreferrer"><img src={process.env.PUBLIC_URL + '/img/book5.jpg'} alt='신사고 쎈 초등 수학 4-2' /></a>
                        </div>
                    </div>
                </div>

                <div className='mypage_right'>
                    <h3>{userRef.current.grade}학년 1학기</h3>
                    <p>진행중인 공부 내용을 확인하세요 순서대로 배워보세요.</p>
                    <ul>
                        <Progress title='1 - 1 큰수' progress='완료' />
                        <Progress title='1 - 2 각도' progress='완료' />
                        <Progress title='1 - 3 곱셈, 나눗셈' progress='진행중' />
                        <Progress title='1 - 4 막대그래프' progress='미완료' />
                        <Progress title='1 - 5 규칙찾기' progress='미완료' />
                    </ul>
                </div>
            </article>
        </div>
    );
}

export default MyPage;