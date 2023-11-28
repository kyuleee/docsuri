import users from "../../datas/userData.json"
const MyPage = () => {
    const userData = {...sessionStorage};
    const dataview = ()=>{
        console.log(sessionStorage)
        console.log(userData)
    }

    return ( 
        <>
            <button onClick={dataview}>item</button>
        </>
    );
}
 
export default MyPage;