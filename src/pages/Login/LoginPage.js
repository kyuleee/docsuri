import './LoginPage.css';
import KakaoLogin from './KakaoLogin';
import { debounce } from "lodash";
import { useMemo, useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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
            sessionStorage.setItem("edu", ID.edu);
            navigator('/mypage');
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
                        <input type='password' placeholder='비밀번호' name='userPwd' id="PASSWORD" onChange={debounceChange} autoComplete='off' />
                    </div>
                    <div className='keepchk'>
                        <label for="chk">
                            <input type="checkbox" id="chk"/>
                                <i class="circle"></i>
                                <span class="keeptxt">로그인 상태 유지</span>
                        </label>
                    </div>
                    <button className='loginbtn' onClick={searchUser}>로그인</button>
                    {/* <KakaoLogin /> */}
                </form>
            </article>
            <ul>
                <li>비밀번호 찾기</li>
                <li>|</li>
                <li>아이디 찾기</li>
                <li>|</li>
                <Link to='/join'><li>회원가입</li></Link>
            </ul>
        </section>
    );
}


export default LoginPage;