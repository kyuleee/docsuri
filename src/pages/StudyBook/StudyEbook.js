import { useState } from "react";
import "./StudyEbook.css";
import StudyProblem from "./StudyProblem.json";
import HTMLFlipBook from "react-pageflip";
import { Link, useNavigate } from "react-router-dom";

const StudyEbook = () => {
  const [userAnswer, setAnswer] = useState("");
  const [showComment, setShowComment] = useState(false);
  const [commentContent, setCommentContent] = useState("");
  const [showHintButton, setShowHintButton] = useState(true);
  const [showHintBox, setShowHintBox] = useState(
    Array(StudyProblem.unit1.length).fill(false)
  );

  const [visible, setVisible] = useState(true);

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
    setVisible(!visible);
    const isCorrect = userAnswer === answer;
    setShowModal(true);
    setCurrentProblemIndex(answer, comment);
    setAnswered(isCorrect);

    // "해설보기" 버튼이 클릭되었을 때만 해설을 보이도록 설정
    setShowComment(false);

    setShowHintButton(!isCorrect);

    setHint((prevHints) => {
      const newHints = [...prevHints];
      newHints[currentProblemIndex] = false; // 정답 확인 시 해당 문제의 힌트 상태를 숨김으로 변경
      return newHints;
    });

    if (!isCorrect && comment) {
      handleCommentButtonClick(comment);
    }
  }

  function handleCommentButtonClick(comment) {
    console.log("Comment Button Clicked. Comment:", comment);

    setCommentContent(comment);
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
      return newHints;
    });
  }
  //정답확인 버튼 + 엔터키
  function handleInputKeyPress(e) {
    if (e.key === "Enter") {
      handleAnswerButtonClick(currentProblemIndex, commentContent);
      setVisible(true);
    }
  }
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/StudyPage");
  };

  return (
    <section className="StudyEbook w1400">
      <article>
        <button className="StudyEbook_Out" onClick={goBack}>
          나가기 X
        </button>
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
                  placeholder="정답을 입력하세요"
                  onChange={answerInput}
                  onKeyPress={handleInputKeyPress}
                />
                <button
                  className="StudyBook_AnswerBtn"
                  onClick={() => {
                    handleAnswerButtonClick(
                      currentProblemIndex,
                      commentContent
                    );
                  }}
                >
                  정답확인
                </button>
              </div>
              {visible && (
                <div className="AnswerTwin">
                  <h3 className={answered ? "On_target" : "Off_target"}>
                    {answered ? "정답" : "오답"}
                  </h3>
                </div>
              )}
            </div>
            <div>
              <div>
                {showComment ? (
                  <div className="Target_Comment">
                    {answered ? commentContent : null}
                  </div>
                ) : (
                  <div className="Target_Comment"></div>
                )}
                {answered && !showHintButton && (
                  <button
                    className="Target_CommentBtn"
                    onClick={() => {
                      handleCommentButtonClick(commentContent);
                      setShowComment(true);
                    }}
                  >
                    해설보기
                  </button>
                )}
              </div>
            </div>
          </div>
        </article>
      )}
      <article className="StudyBook_AllPages">
        <HTMLFlipBook width={600} height={750}>
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
                      <Link>{StudyProblem.unit1.length}문제</Link>
                    </h4>
                  </div>
                  <p className="Chapter_Ptext">
                    수학에서 큰 수는 숫자의 중요한 개념 중 하나로, 크기를
                    비교하거나 덧셈과 뺄셈 등 다양한 연산에 활용된다.
                  </p>
                </div>

                <div className="StudyBook_Chapter">
                  <div className="Chapter_Text">
                    <h4>1-2 각도</h4>
                    <h4>
                      <Link>{StudyProblem.unit2.length}문제</Link>
                    </h4>
                  </div>
                  <p className="Chapter_Ptext">
                    각도기와 같은 구체물로 각도를 재거나, 각도끼리 더하거나 빼는
                    활동이 들어있다.{" "}
                  </p>
                </div>

                <div className="StudyBook_Chapter">
                  <div className="Chapter_Text">
                    <h4>1-3 곱셉,나눗셈</h4>
                    <h4>
                      <Link>{StudyProblem.unit3.length}문제</Link>
                    </h4>
                  </div>
                  <p className="Chapter_Ptext">
                    세 자리 수와 두 자리 수의 곱셈과 두 자리 수로 나누는
                    나눗셈을 공부한다.
                  </p>
                </div>

                <div className="StudyBook_Chapter">
                  <div className="Chapter_Text">
                    <h4>1-4 막대그래프</h4>
                    <h4>
                      <Link>{StudyProblem.unit4.length}문제</Link>
                    </h4>
                  </div>
                  <p className="Chapter_Ptext">
                    막대그래프는 변량만큼 막대의 길이를 나타낸 그래프로,
                    가로축과 세로축에 변량을 그래프로 나타내는 단원이다.{" "}
                  </p>
                </div>

                <div className="StudyBook_Chapter">
                  <div className="Chapter_Text">
                    <h4>1-5 규칙찾기</h4>
                    <h4>
                      <Link>{StudyProblem.unit5.length}문제</Link>
                    </h4>
                  </div>
                  <p className="Chapter_Ptext">
                    수, 도형, 계산식 등에서 어떤 규칙이 있는지 찾는 단원이다.
                  </p>
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
                      <Link>{StudyProblem.unit6.length}문제</Link>
                    </h4>
                  </div>
                  <p className="Chapter_Ptext">
                    분모가 같은 분수의 덧셈과 뺄셈을 계산하고 통분이라는 과정을
                    이해한다.
                  </p>
                </div>

                <div className="StudyBook_Chapter">
                  <div className="Chapter_Text">
                    <h4>2-2 삼각형</h4>
                    <h4>
                      <Link>{StudyProblem.unit7.length}문제</Link>
                    </h4>
                  </div>
                  <p className="Chapter_Ptext">
                    변과 각에 따른 특징을 가진 삼각형의 이름, 특징, 모양을
                    배운다.
                  </p>
                </div>

                <div className="StudyBook_Chapter">
                  <div className="Chapter_Text">
                    <h4>2-3 소수의 덧셈과 뺄셈</h4>
                    <h4>
                      <Link>{StudyProblem.unit8.length}문제</Link>
                    </h4>
                  </div>
                  <p className="Chapter_Ptext">
                    소수의 크기를 비교하고 소수끼리 더하거나 빼는 활동을 하면서
                    자연수처럼 소수끼리 연산이 가능함을 배운다.
                  </p>
                </div>

                <div className="StudyBook_Chapter">
                  <div className="Chapter_Text">
                    <h4>2-4 사각형</h4>
                    <h4>
                      <Link>{StudyProblem.unit9.length}문제</Link>
                    </h4>
                  </div>
                  <p className="Chapter_Ptext">
                    여러 가지 사각형에 대한 분류 활동을 통하여 그 성질을
                    이해한다.
                  </p>
                </div>

                <div className="StudyBook_Chapter">
                  <div className="Chapter_Text">
                    <h4>2-5 꺾은선 그래프</h4>
                    <h4>
                      <Link>{StudyProblem.unit10.length}문제</Link>
                    </h4>
                  </div>
                  <p className="Chapter_Ptext">
                    꺽은선그래프를 알고, 그 특징을 이해한다.
                  </p>
                </div>

                <div className="StudyBook_Chapter">
                  <div className="Chapter_Text">
                    <h4>2-6 다각형</h4>
                    <h4>
                      <Link>{StudyProblem.unit11.length}문제</Link>
                    </h4>
                  </div>
                  <p className="Chapter_Ptext">
                    다각형의 의미와 정다각형을 배우고, 대각선이라는 요소를
                    이해한다.
                  </p>
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
                  <div
                    className="StudyBook_ProblemText"
                    dangerouslySetInnerHTML={{ __html: problem.title }}
                  />
                  <button
                    className="StudyBook_HintImg"
                    onClick={() => handlePushHint(index)}
                  >
                    ?
                  </button>
                </div>
                <img
                  src={problem.content}
                  alt={`problem ${problem.id}`}
                  style={{ width: "100%", height: "auto", marginTop: "20px" }}
                />
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
          {StudyProblem.unit2.map((problem, index) => (
            <div className="demoPage" key={index}>
              <div className="StudyBook_ProblemPage">
                <div className="StudyBook_ThreeItems">
                  <div className="StudyBook_Number">{problem.id}.</div>
                  <div
                    className="StudyBook_ProblemText"
                    dangerouslySetInnerHTML={{ __html: problem.title }}
                  />
                  <button
                    className="StudyBook_HintImg"
                    onClick={() => handlePushHint(index)}
                  >
                    ?
                  </button>
                </div>
                <img
                  src={problem.content}
                  alt={`problem ${problem.id}`}
                  style={{ width: "100%", height: "auto", marginTop: "20px" }}
                />
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

          {/* <div className="demoPage">Page 4</div>
          <div className="demoPage">Page 5</div>
          <div className="demoPage">Page 6</div>
          <div className="demoPage">Page 7</div>
          <div className="demoPage">Page 8</div>
          <div className="demoPage">Page 9</div>
          <div className="demoPage">Page 10</div> */}
        </HTMLFlipBook>
      </article>
    </section>
  );
};

export default StudyEbook;
