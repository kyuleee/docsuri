import { useRef, useState } from "react";

const Test = () => {
  const [test, setTest] = useState();
  const idRef = useRef();
  const passwordRef = useRef();
  function handleClick() {
    sessionStorage.setItem("id", idRef.current.value);
    sessionStorage.setItem("password", passwordRef.current.value);
  }
  function handleClick2() {
    const i = sessionStorage.getItem("id");
    const i2 = sessionStorage.getItem("password");
    console.log(i);
    console.log(i2);0
  }
  return (
    <div>
      <form>
        <input ref={idRef} type="text" placeholder="아이디" />
        <input ref={passwordRef} type="password" placeholder="비밀번호" />
        <button onClick={handleClick}>Login</button>
      </form>
      <button onClick={handleClick2}>123123</button>
    </div>
  );
};

export default Test;
