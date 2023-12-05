import { useState } from "react";
import "./StudyEbook.css";
import StudyProblem from "./StudyProblem.json";
import HTMLFlipBook from "react-pageflip";
import { Link } from "react-router-dom";

const StudyEbook = () => {
  const [userAnswer, setAnswer] = useState("");
  const [showComment, setShowComment] = useState(false);
  const [commentContent, setCommentContent] = useState("");
  const [showHintButton, setShowHintButton] = useState(true);
  const [showHintBox, setShowHintBox] = useState(
    Array(StudyProblem.unit1.length).fill(false)
  );

  
  const [visible,setVisible] =useState(false);
  

  const [hint, setHint] = useState(
    Array(StudyProblem.unit1.length).fill(false)
  );
  const [answered, setAnswered] = useState(
    Array(StudyProblem.unit1.length).fill(false)
  );
  const [showModal, setShowModal] = useState(false);
  const [currentProblemIndex, setCurrentProblemIndex] = useState(null);

  function answerInput(e) {
    setAnswer(e.target.value);
  }

  function handleAnswerButtonClick(answer, comment) {
    setVisible(true);
    setShowModal(true);
    setCurrentProblemIndex(answer, comment);
    const isCorrect = userAnswer === answer;
    setAnswered(isCorrect);

    if (isCorrect) {
      setShowComment(true);
      setCommentContent(comment);
      setShowHintButton(false);
    } else {
      setShowComment(true);
      setCommentContent("");
      setShowHintButton(true);
    }

    setHint((prevHints) => {
      const newHints = [...prevHints];
      newHints[currentProblemIndex] = false; // 정답 확인 시 해당 문제의 힌트 상태를 숨김으로 변경
      console.log("Updated hint state:", newHints);
      return newHints;
    });
  }

  function closeModal() {
    setShowModal(false);
    setCurrentProblemIndex(null);
    setAnswer(""); // 모달창이 닫혔을 때 userAnswer 초기화
    setAnswered(false); // 모달창이 닫힐 때 answered 초기화
  }

  function handlePushHint(index) {
    setShowHintBox((prevShowHintBox) => {
      const newShowHintBox = [...prevShowHintBox];
      newShowHintBox[index] = true; // 힌트상자 보이게
      console.log("Updated showHintBox state:", newShowHintBox);
      return newShowHintBox;
    });

    setHint((prevHints) => {
      const newHints = [...prevHints];
      newHints[index] = true;
      console.log("Updated hint state:", newHints);
      return newHints;
    });
  }

  function handleCloseHintBox(closeIndex) {
    setShowHintBox((prevShowHintBox) => {
      const newShowHintBox = [...prevShowHintBox];
      newShowHintBox[closeIndex] = false; // 힌트 상자 숨기기
      console.log(`Closing hint box for index: ${closeIndex}`);
      console.log("Updated showHintBox state:", newShowHintBox);
      return newShowHintBox;
    });

    setHint((prevHints) => {
      const newHints = [...prevHints];
      newHints[closeIndex] = false; // 힌트 상태도 숨김으로 변경
      console.log("Updated hint state:", newHints);
      return newHints;
    });
  }
  //정답확인 버튼 + 엔터키
  function handleInputKeyPress(e) {
    if (e.key === "Enter") {
      handleAnswerButtonClick(currentProblemIndex);
      setVisible(true);
    }
  }

  return (
    <section className="StudyEbook w1400">
      <article>
        <button className="StudyEbook_Out">나가기 X</button>
      </article>
      {showModal && currentProblemIndex !== null && (
        <article className="StudyEbook_AnswerMadal">
          <div className="Modal_Answer">
            <div className="ModalContent">
              <button className="CloseButton" onClick={closeModal}>
                X
              </button>
              <div className="StudyBook_AnswerAll">
                <input
                  type="text"
                  onChange={answerInput}
                  onKeyPress={handleInputKeyPress}
                />
                <button
                  className="StudyBook_AnswerBtn"
                  onClick={() => handleAnswerButtonClick(currentProblemIndex)}
                >
                  정답확인하기
                </button>
                {visible && <div className='AnswerTwin'>
                <h3 className={answered ? "On_target" : "Off_target"}>
                    {answered ? "정답" : "오답"}
                  </h3>
                {/* {userAnswer !== "" && userAnswer !== null ? (
                  <h3 className={answered ? "On_target" : "Off_target"}>
                    {answered ? "정답" : "오답"}
                  </h3>
                ) : (
                  <h3 className="NotEntered">미입력</h3>
                )} */}
              </div>}
              </div>
            </div>
            <div>
              {/* <div className="AnswerTwin" ref={grading}>
                {userAnswer !== "" && userAnswer !== null ? (
                  <h3 className={answered ? "On_target" : "Off_target"}>
                    {answered ? "정답" : "오답"}
                  </h3>
                ) : (
                  <h3 className="NotEntered">미입력</h3>
                )}
              </div> */}
              <div>
                {/* <h3 className="Comment_Text">해설</h3> */}
                {showComment ? (
                  <div className="Target_Comment">
                    {answered ? commentContent : null}
                  </div>
                ) : (
                  <div className="Target_Comment"></div>
                )}
                {answered && !showHintButton && (
                  <button className="Target_CommentBtn">해설보기</button>
                )}
              </div>
            </div>
          </div>
        </article>
      )}

      <article className="StudyBook_AllPages">
        <HTMLFlipBook width={600} height={800}>
          {/* 페이지 속도 조절 flippingTime={1000} */}
          <div className="demoPage">
            <div className="StudyBook_LeftPage">
              <h3>4학년 목차</h3>
              <div className="StudyBook_LevelText">
                <h5>1학기</h5>
              </div>

              <div className="StudyBook_All-Level">
                <div className="StudyBook_Chapter">
                  <div className="Chapter_Text">
                    <h4>1-1 큰수</h4>
                    <h4>
                      <Link>문제수</Link>
                    </h4>
                  </div>
                  <p className="Chapter_Ptext">블라블라 - 이론내용</p>
                </div>

                <div className="StudyBook_Chapter">
                  <div className="Chapter_Text">
                    <h4>1-2 각도</h4>
                    <h4>
                      <Link>문제수</Link>
                    </h4>
                  </div>
                  <p className="Chapter_Ptext">블라블라 - 이론내용</p>
                </div>

                <div className="StudyBook_Chapter">
                  <div className="Chapter_Text">
                    <h4>1-3 곱셉,나눗셈</h4>
                    <h4>
                      <Link>문제수</Link>
                    </h4>
                  </div>
                  <p className="Chapter_Ptext">블라블라 - 이론내용</p>
                </div>

                <div className="StudyBook_Chapter">
                  <div className="Chapter_Text">
                    <h4>1-4 막대그래프</h4>
                    <h4>
                      <Link>문제수</Link>
                    </h4>
                  </div>
                  <p className="Chapter_Ptext">블라블라 - 이론내용</p>
                </div>

                <div className="StudyBook_Chapter">
                  <div className="Chapter_Text">
                    <h4>1-5 규칙찾기</h4>
                    <h4>
                      <Link>문제수</Link>
                    </h4>
                  </div>
                  <p className="Chapter_Ptext">블라블라 - 이론내용</p>
                </div>
              </div>
            </div>
          </div>
          <div className="demoPage">
            <div className="StudyBook_RightPage">
              <div className="StudyBook_LevelText-1">
                <h5>2학기</h5>
              </div>

              <div className="StudyBook_All-Level">
                <div className="StudyBook_Chapter">
                  <div className="Chapter_Text">
                    <h4>2-1 분수의 덧셈과 뺄셈</h4>
                    <h4>
                      <Link>문제수</Link>
                    </h4>
                  </div>
                  <p className="Chapter_Ptext">블라블라 - 이론내용</p>
                </div>

                <div className="StudyBook_Chapter">
                  <div className="Chapter_Text">
                    <h4>2-2 삼각형</h4>
                    <h4>
                      <Link>문제수</Link>
                    </h4>
                  </div>
                  <p className="Chapter_Ptext">블라블라 - 이론내용</p>
                </div>

                <div className="StudyBook_Chapter">
                  <div className="Chapter_Text">
                    <h4>2-3 소수의 덧셈과 뺄셈</h4>
                    <h4>
                      <Link>문제수</Link>
                    </h4>
                  </div>
                  <p className="Chapter_Ptext">블라블라 - 이론내용</p>
                </div>

                <div className="StudyBook_Chapter">
                  <div className="Chapter_Text">
                    <h4>2-4 사각형</h4>
                    <h4>
                      <Link>문제수</Link>
                    </h4>
                  </div>
                  <p className="Chapter_Ptext">블라블라 - 이론내용</p>
                </div>

                <div className="StudyBook_Chapter">
                  <div className="Chapter_Text">
                    <h4>2-5 꺾은선 그래프</h4>
                    <h4>
                      <Link>문제수</Link>
                    </h4>
                  </div>
                  <p className="Chapter_Ptext">블라블라 - 이론내용</p>
                </div>

                <div className="StudyBook_Chapter">
                  <div className="Chapter_Text">
                    <h4>2-6 다각형</h4>
                    <h4>
                      <Link>문제수</Link>
                    </h4>
                  </div>
                  <p className="Chapter_Ptext">블라블라 - 이론내용</p>
                </div>
              </div>
            </div>
          </div>
          {/* 1-1 큰수 */}
          {StudyProblem.unit1.map((problem, index) => (
            <div className="demoPage" key={index}>
              <div className="StudyBook_ProblemPage">
                <div className="StudyBook_ThreeItems">
                  <div className="StudyBook_Number">{problem.id}.</div>
                  <div className="StudyBook_ProblemText">{problem.title}</div>
                  <button
                    className="StudyBook_HintImg"
                    onClick={() => handlePushHint(index)}
                  >
                    ?
                  </button>
                </div>

                <button
                  className="AnswerBox"
                  onClick={() =>
                    handleAnswerButtonClick(problem.answer, problem.comment)
                  }
                >
                  정답입력하기
                </button>
              </div>
              {hint[index] ? (
                <div className="Ebook_HintBoX">
                  <h3 className="HintBoX_text">힌트</h3>
                  <div className="EBook_HintContainer">{problem.hint}</div>
                  <button
                    className="Ebook_HintClose"
                    onClick={() => handleCloseHintBox(index)}
                  >
                    확인
                  </button>
                </div>
              ) : null}
            </div>
          ))}

          <div className="demoPage">Page 4</div>
          <div className="demoPage">Page 5</div>
          <div className="demoPage">Page 6</div>
          <div className="demoPage">Page 7</div>
          <div className="demoPage">Page 8</div>
          <div className="demoPage">Page 9</div>
          <div className="demoPage">Page 10</div>
        </HTMLFlipBook>
      </article>
    </section>
  );
};

export default StudyEbook;