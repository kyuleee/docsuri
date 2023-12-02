import { useState } from "react";
import "./StudyEbook.css";
import StudyProblem from "./StudyProblem.json";
import HTMLFlipBook from "react-pageflip";
import { Link } from "react-router-dom";
const StudyEbook = () => {
  const [userAnswer, setAnswer] = useState("");

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
    setShowModal(true);
    setCurrentProblemIndex(answer, comment);
    const isCorrect = userAnswer === answer;
    setAnswered(isCorrect);
    console.log(answer);
    console.log(comment);
  }

  function closeModal() {
    setShowModal(false);
    setCurrentProblemIndex(null);
  }

  function handlePushHint(index) {
    setHint((prevHints) => {
      const newHints = [...prevHints];
      newHints[index] = true;
      return newHints;
    });
  }

  return (
    <section className="StudyEbook w1400">
      {showModal && currentProblemIndex !== null && (
        <article className="StudyEbook_AnswerMadal">
          <div className="Modal_Answer">
            <div className="ModalContent">
              <button className="CloseButton" onClick={closeModal}>
                X
              </button>
              <div className="StudyBook_AnswerAll">
                <input type="text" onChange={answerInput} />
                <button
                  className="StudyBook_AnswerBtn"
                  onClick={() => handleAnswerButtonClick(currentProblemIndex)}
                >
                  정답확인하기
                </button>
              </div>
            </div>
            <div>
              <div className="AnswerTwin">
                {answered !== null && (
                  <h3 className={answered ? "On_target" : "Off_target"}>
                    {answered ? "정답" : "오답"}
                  </h3>
                )}
              </div>
              <div>
                <h3>해설</h3>
                <div className="Target_Comment"></div>
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
                {hint[index] ? <div>{problem.hint}</div> : null}

                <button
                  className="AnswerBox"
                  onClick={() =>
                    handleAnswerButtonClick(problem.answer, problem.comment)
                  }
                >
                  정답입력하기
                </button>
              </div>
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
