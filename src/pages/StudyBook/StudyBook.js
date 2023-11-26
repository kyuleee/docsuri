import React, { useState } from 'react';
import './StudyBook.css'; // 스타일 파일 추가

const StudyBook = () => {
  const totalPageCount = 10; // 전체 페이지 수

  const [currentPage, setCurrentPage] = useState(1);

  const goToNextPage = () => {
    if (currentPage < totalPageCount) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className={`pages page-${currentPage}`}>
      {/* 페이지 라디오 버튼들 */}
      {Array.from({ length: totalPageCount }, (_, index) => (
        <React.Fragment key={index}>
          <input id={`page${index + 1}`} type="radio" name="trigger" checked={currentPage === index + 1} readOnly />
          <div className="pages_page">
            {/* ... (페이지 내용 추가) */}
          </div>
        </React.Fragment>
      ))}

      {/* 이전, 다음 컨트롤 */}
      <div className="controls">
        {currentPage > 1 && (
          <div className="control prev" onClick={goToPreviousPage}>
            이전
          </div>
        )}
        {currentPage < totalPageCount && (
          <div className="control next" onClick={goToNextPage}>
            다음
          </div>
        )}
      </div>
    </div>
  );
}

export default StudyBook;