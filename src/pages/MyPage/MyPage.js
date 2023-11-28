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
        const userData = JSON.stringify(userRef.current);
        const userId = sessionStorage.getItem("ID"); // Assuming you store the user ID in sessionStorage
        const currentUser = users.find((user) => user.id === userId);

        if (currentUser) {
            userRef.current = currentUser;
            const profile = userRef.current.profile;

            if (profile) {
                const image = new Image();
                image.src = profile;
                image.alt = "Profile Image";
                image.width = 100;
                image.height = 100;

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
        <div className='myPage'>
            <button onClick={dataview}>1234</button>

            <p id="profileDisplay"></p>
            <hr />
            <p>{userRef.current.PASSWORD}</p>
            <p>{userRef.current.ID}</p>
            <p>{userRef.current.name}</p>
            <p>{userRef.current.grade}</p>
            <p>{userRef.current.level}</p>
            {/* <p>{userRef.current.badge.split(',')[3]}</p> */}
            <p>Third Badge: {userRef.current.badge && typeof userRef.current.badge === 'string' ? userRef.current.badge.split(",")[2] : ""}</p>
            <button onClick={logout}>로그아웃</button>
        </div>
    );
}

export default MyPage;