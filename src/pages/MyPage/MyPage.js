import { useRef } from "react";
import users from "../../datas/userData.json";
const MyPage = () => {
  const userRef = useRef({ ...sessionStorage });
  const dataview = () => {
    console.log(sessionStorage);
    console.log(userRef.current);
  };

  return (
    <>
      <button onClick={dataview}>1234</button>
    </>
  );
};

export default MyPage;
