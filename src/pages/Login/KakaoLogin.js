import { useEffect, useState } from "react";
import kakaologin from '../../asset/img/kakaologin.png';
import './KakaoLogin.css';

const Login = () => {
  const [user, setUser] = useState();
  const [isLogin, setIsLogin] = useState(false);
  const { Kakao } = window;
  const initKakao = async () => {
    const jsKey = process.env.REACT_APP_KAKAO_KEY2;
    if (Kakao && !Kakao.isInitialized()) {
      await Kakao.init(jsKey);
      console.log("카카오 초기화" + Kakao.isInitialized());
    }
  };
  const kakaoLogin = async () => {
    await Kakao.Auth.login({
      success(res) {
        Kakao.Auth.setAccessToken(res.access_token);
        Kakao.API.request({
          url: "/v2/user/me",
          success(res) {
            setIsLogin(true);
            const kakaoAccount = res.kakao_account;
            localStorage.setItem("nickname", kakaoAccount.profile.nickname);
            localStorage.setItem(
              "profileimage",
              kakaoAccount.profile.profile_image_url
            );
          },
        });
      },
      fail(err) {
        console.log(err);
      },
    });
  };
  const kakaoLogout = () => {
    Kakao.Auth.logout((res) => {
      localStorage.removeItem("nickname");
      localStorage.removeItem("profileimage");
      setUser(null);
    });
  };
  useEffect(() => {
    initKakao();
    Kakao.Auth.getAccessToken() ? setIsLogin(true) : setIsLogin(false);
  });
  useEffect(() => {
    if (isLogin) {
      setUser({
        nickName: localStorage.getItem("nickname"),
        profileImg: localStorage.getItem("profileimage"),
      });
    }
  }, [isLogin]);

  return (
    <div>
      {user ? (
        <div>
          <button onClick={kakaoLogout}>카카오 로그아웃</button>
          <img src={user.profileImg} alt="프로필 이미지" />
          <h2>닉네임 : {user.nickName}</h2>
        </div>
      ) : (
        <section className='loginPage'>
          <article className='frmLogin'>
            <h3>로그인</h3>
            <form method='post'>
              <div>
                <input type='text' placeholder='아이디' name='userId' id='userId' />
              </div>
              <div>
                <input type='text' placeholder='비밀번호' name='userPwd' id='userPwd' />
              </div>
              <div className='keepchk'>
                <input type='checkbox' id='keep' name='nvlong' />
                <label for='keep' className='keeptxt'>로그인 상태 유지</label>
              </div>
              <button className='loginbtn'>로그인</button>
              {/* <KakaoLogin/> */}
              <button onClick={kakaoLogin} className="kakaologinbtn">
                <img src={kakaologin} alt="카카오톡 로그인" />
                카카오톡 간편 로그인
              </button>
            </form>
          </article>
        </section>
        // <button onClick={kakaoLogin} className="kakaologinbtn">
        //   <img src={kakaologin} alt="카카오톡 로그인"/>
        //   카카오톡 간편 로그인
        // </button>
      )}
    </div>
  );
};

export default Login;
