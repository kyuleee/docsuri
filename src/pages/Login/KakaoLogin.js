import { useEffect, useState } from "react";

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
          <img src={user.profileImg} alt="" />
          <h2>닉네임 : {user.nickName}</h2>
        </div>
      ) : (
        <button onClick={kakaoLogin}>
          <img
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwiperth.me%2F35%2F%3Fq%3DYToxOntzOjEyOiJrZXl3b3JkX3R5cGUiO3M6MzoiYWxsIjt9%26bmode%3Dview%26idx%3D11098399%26t%3Dboard&psig=AOvVaw2Opv5uaQt9MwfF4w9tLAwL&ust=1699338865201000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJj73t7groIDFQAAAAAdAAAAABAD"
            alt="카카오톡 로그인"
          />
          카카오 로그인
        </button>
      )}
    </div>
  );
};

export default Login;
