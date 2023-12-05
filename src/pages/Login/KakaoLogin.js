import { useEffect, useState } from "react";
import kakaologin from '../../asset/img/kakaologin.png';
import './KakaoLogin.css';
import MyPage from "../MyPage/MyPage";

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
        <>
        <MyPage/>
        {/* <div className="kakaoPage">
          <h2>카카오톡 로그인</h2>
          <button onClick={kakaoLogout}>카카오 로그아웃</button>
          <img src={user.profileImg} alt="프로필 이미지" />
          <h2>닉네임 : {user.nickName}</h2>
        </div> */}
        </>
      ) : (
        <button onClick={kakaoLogin} className="kakaologinbtn">
          <img src={kakaologin} alt="카카오톡 로그인"/>
          카카오톡 간편 로그인
        </button>
      )}
    </div>
  );
};

export default Login;
