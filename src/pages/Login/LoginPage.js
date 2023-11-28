import './LoginPage.css';
import KakaoLogin from './KakaoLogin';
import { debounce } from "lodash";
import { useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import users from '../../datas/userData.json';


const LoginPage = () => {
    const [readId, setReadId] = useState(null);
    const [readPassword, setReadPassWord] = useState(null);
    const navigator = useNavigate();
    const debounceChange = useMemo((e) =>
        debounce((e) => {
            const userData = e.target;
            if (userData.id === "ID") {
                sessionStorage.setItem("ID", userData.value);
            }
            if (userData.id === "PASSWORD") {
                sessionStorage.setItem("PASSWORD", userData.value);
            }
        }, 200)
    );

    function searchUser() {
        const INPUT_ID = sessionStorage.getItem("ID");
        const INPUT_PASSWORD = sessionStorage.getItem("PASSWORD");
        const ID = users.find(
            (user) => user.id === INPUT_ID && user.password === INPUT_PASSWORD
        );
        if (ID) {
            sessionStorage.setItem("name", ID.name);
            sessionStorage.setItem("grade", ID.grade);
            sessionStorage.setItem("level", ID.level);
            sessionStorage.setItem("school", ID.school);
            sessionStorage.setItem("badge", ID.badge);
            navigator('/mypage')
        } else {
            sessionStorage.clear();
        }
    }
    return (
        <section className='loginPage'>
            <article className='frmLogin'>
                <h3>로그인</h3>
                <form method='post'>
                    <div>
                        <input type='text' placeholder='아이디' name='userId' id="ID" onChange={debounceChange} />
                    </div>
                    <div>
                        <input type='text' placeholder='비밀번호' name='userPwd' id="PASSWORD" onChange={debounceChange} />
                    </div>
                    <div className='keepchk'>
                        <input type='checkbox' id='keep' name='nvlong' />
                        <label for='keep' className='keeptxt'>로그인 상태 유지</label>
                    </div>
                    <button className='loginbtn' onClick={searchUser}>로그인</button>
                    {/* <KakaoLogin /> */}
                </form>
            </article>
        </section>
    );
}


export default LoginPage;