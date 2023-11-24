import './Join.css';

const Join = () => {


    return (
        <div className="Join">
            <div className='joinSection'>
                <h2>회원가입</h2>       
                <form method='post'>   
                    <div className='formList'>
                        <div className='formUser'>
                            <input type='text' placeholder='아이디' name='id' id='id' autoCapitalize='off'/>
                        </div>
                        <div className='formPwd'>
                            <input type='password' placeholder='비밀번호' name='pwd' id='pwd'/>
                        </div>
                        <div className='formRePwd'>
                            <input type='password' placeholder='[선택] 비밀번호 분실 시 확인용 이메일' name='pwdre' id='pwdre'/>
                        </div>
                    </div>
                    <div className='formList'>
                        <div className='formName'>
                            <input type='text' placeholder='이름' name='name' id='name' autoCapitalize='off'/>
                        </div>
                        <div className='formBirth'>
                            <input type='text' placeholder='생년월일 8자리' name='birth' id='birth' autoCapitalize='off' maxLength='8'/>
                        </div>
                        <div className='formStu'>
                            <ul>
                                <li>
                                    <input type='radio' id='student' name='edu'/>
                                    <label for='student'>학생</label>
                                </li>
                                <li>
                                    <input type='radio' id='teacher' name='edu'/>
                                    <label for='teacher'>교사</label>
                                </li>
                                <li>
                                    <input type='radio' id='parent' name='edu'/>
                                    <label for='parent'>학부모</label>
                                </li>
                            </ul>
                        </div>
                        <div className='formPhone'>
                            <input type='text' placeholder='휴대전화번호' name='phone' id='phone' autoCapitalize='off'/>
                        </div>
                    </div>
                </form>  
                <button className='submitJoin'>회원가입</button>
            </div>
        </div>
    );
}

export default Join;