import "./StudyEbook.css";
import StudyProblem from "./StudyProblem.json";
import HTMLFlipBook from "react-pageflip";
import { Link } from "react-router-dom";
import { useState } from "react";

const StudyEbook = () => {
  
  const [userAnswer, setAnswer] = useState("");
  const [hint, setHint] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function answerInput(e) {
    setAnswer(e.target.value);
  }

  function handlePushAnswer(answer) {
    if (answer === userAnswer) {
      alert("정답입니다.");
    } else {
      alert("오답입니다");
    }
  }



  return (
    <section className="StudyEbook w1400">
      <article className="StudyBook_AllPages">
        <HTMLFlipBook width={600} height={800}>
          {/* 페이지속도조절 flippingTime={1000} */}
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
                  <button className="StudyBook_HintImg" onClick={() => setHint(true)}>?</button>  
                </div>

                <div className="StudyBook_AnswerAll">
                  <input type="text" onChange={answerInput} />                
                </div>


                <button
                  className="StudyBook_AnswerBtn"
                  onClick={() => handlePushAnswer(problem.answer)}
                >
                  정답확인하기
                </button>

                {hint ? <div>{problem.hint}</div> : null}
                   
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

