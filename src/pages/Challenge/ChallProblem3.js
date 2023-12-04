import React, { useState } from 'react';
import './ChallProblem.css'
const ChallProblem3 = ({isOpen, onClose, onClose2}) => {
    
    const [userAnswer, setUserAnswer] = useState('');
    const [isCorrect, setIsCorrect] = useState(null); // null: 모달창 감춤, true: 정답, false: 오답
    
    const checkAnswer = () => {
        // 여기에서 정답을 비교하고 상태를 업데이트합니다.
        const correctAnswer = "984명"; // 
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
                <div className='ProblemTitle'><h2>[고학년 심화문제 챌린지]</h2></div>
                <div className='Problem'>
                    <div className='LeftProblem'>
                        <div className='subTitle'>[챌린지 문제]</div>
                        <div className='Question'>
                        <p>민영이네 학교의 작년 학생은 모두 875명이었고,</p>
                        <br/>
                        <p>남학생이 여학생보다 25명 더 많았습니다.</p>
                        <br/>
                        <p>올해 남학생 수는 작년 남학생 수의 1.2배이고,</p>
                        <br/>
                        <p>올해 여학생 수는 작년 여학생 수의 0.96배입니다.</p>
                        <br/>
                        <p>민영이네 학교의 올해 전체 학생은 모두 몇 명인가요?</p>
                        <br/>
                        <p className='red'>(정답칸에 명 까지 입력해주세요.)</p>
                        <p>ex. 100명</p>
                        </div>
                    </div>
                    <div className='RightProblem'>
                        <div className='subTitle'>답변 제출</div>
                        <div className='ProblemAnswer'>
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
                        <button onClick={onClose2}>확인</button>
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
                            <button onClick={onClose2}>확인</button>
                        </div>
                    </div>
                )}

            </div>


        </div>
     );
}
 
export default ChallProblem3;