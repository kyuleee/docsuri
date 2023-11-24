import './LoginPage.css';
import KakaoLogin from './KakaoLogin';

const LoginPage = () => {
    return ( 
        <section className='loginPage'>
            <article className='frmLogin'>
                <h3>로그인</h3>
                <form method='post'>
                    <div>
                        <input type='text' placeholder='아이디' name='userId' id='userId'/>
                    </div>    
                    <div>
                        <input type='text' placeholder='비밀번호' name='userPwd' id='userPwd'/>
                    </div>    
                    <div className='keepchk'>
                        <input type='checkbox' id='keep' name='nvlong'/>
                        <label for='keep' className='keeptxt'>로그인 상태 유지</label>
                    </div>
                    <button className='loginbtn'>로그인</button>
                    <KakaoLogin/>
                </form>
            </article>
        </section>
     );
}

 
export default LoginPage;