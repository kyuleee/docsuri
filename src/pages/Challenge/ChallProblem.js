import React, { useState } from 'react';
import './ChallProblem.css'
const ChallProblem1 = ({isOpen, onClose}) => {
    
    const [userAnswer, setUserAnswer] = useState('');
    const [isCorrect, setIsCorrect] = useState(null); // null: 모달창 감춤, true: 정답, false: 오답
    
    const checkAnswer = () => {
        // 여기에서 정답을 비교하고 상태를 업데이트합니다.
        const correctAnswer = "2"; // 예시에서는 답이 2로 가정합니다.
        if (userAnswer === correctAnswer){
            setIsCorrect(true); // 정답인 경우
        } else {
            setIsCorrect(false); // 오답인 경우
        }
    };

    const closeModal = () => {
        setUserAnswer(''); // 모달이 닫힐 때 입력값 초기화
        setIsCorrect(null); // 모달 상태 초기화
    };
    if (!isOpen) return null;
    return ( 
        <div className="ChallProblem" onClick={onClose}>
            <div className='ProblemModal' onClick={(e) => e.stopPropagation()}>
                <div className='ProblemTitle'><h2>[규칙찾기 수학 챌린지]</h2></div>
                <div className='Problem'>
                    <div className='LeftProblem'>
                        <div className='subTitle'>[챌린지 문제]</div>
                        <div className='Question'>
                        <p>7 ♥ 2 = 1</p>
                        <br/>
                        <p>39 ♥ 9 = 3</p>
                        <br/>
                        <p>26 ♥ (9 ♥ 6) = 2</p>
                        <br/>
                        <p>161 ♥ (13♥5) = ?</p>
                        </div>
                    </div>
                    <div className='RightProblem'>
                        <div className='subTitle'></div>
                        <div className='ProblemAnswer'>
                            <div><p>답변 제출</p></div>
                            <textarea className='Answer'
                            value={userAnswer}
                            onChange={(e) => setUserAnswer(e.target.value)}
                            ></textarea>
                        <button onClick={checkAnswer}>제출하기</button>
                        </div>
                    </div>
                </div>
                {/* 모달창 - 정답인 경우 */}
                {isCorrect === true && (
                    <div className="ChallModal" onClick={closeModal}>
                        <div className="ChallModalContent Correct">
                        <div className='Good'>
                            <div className='Stamp'></div>
                            <div className='ment'>
                                <p>챌린지에 성공하셨습니다.</p>
                                <p>축하드립니다 ^^7</p>
                            </div>
                        </div>
                        <button onClick={onClose}>확인</button>
                        </div>
                    </div>
                )}

                {/* 모달창 - 오답인 경우 */}
                {isCorrect === false && (
                    <div className="ChallModal" onClick={closeModal}>
                        <div className="ChallModalContent Incorrect">
                            <div className='Return'>
                                <div className='ment2'>
                                    <p>아쉽게도 정답이 아니였습니다 ㅠㅠ</p>
                                    <p>다음에 다시 도전해주세요!</p>
                                </div>
                            </div>
                            <button onClick={onClose}>확인</button>
                        </div>
                    </div>
                )}

            </div>


        </div>
     );
}
 
export default ChallProblem1;