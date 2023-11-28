import { debounce } from "lodash";
import { useMemo, useRef, useState } from "react";
import users from "../datas/userData.json";
import { useNavigate } from "react-router-dom";
const Test = () => {
  //LOGIN LOGIC
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
    <div>
      <form>
        <input
          id="ID"
          type="text"
          placeholder="아이디"
          onChange={debounceChange}
        />
        <input
          id="PASSWORD"
          type="password"
          placeholder="비밀번호"
          onChange={debounceChange}
        />
      </form>
      <button onClick={searchUser}>로그인</button>
    </div>
  );
};

export default Test;
