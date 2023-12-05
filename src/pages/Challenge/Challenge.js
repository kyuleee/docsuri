import React, { useState } from 'react';
import './Challenge.css'
import ChallModal from './ChallModal'
import ChallProblem1 from './ChallProblem';
import ChallProblem2 from './ChallProblem2';
import ChallProblem3 from './ChallProblem3';
const Challenge = () => {

  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalOpen2, setModalOpen2] = useState(false); // 첫번째 챌린지
  const [isModalOpen3, setModalOpen3] = useState(false); // 두번째 챌린지
  const [isModalOpen4, setModalOpen4] = useState(false); // 세번째 챌린지
  const [isModalOpen2_1, setModalOpen2_1] = useState(true); // 시도후 재시도 안됨
  const [isModalOpen3_1, setModalOpen3_1] = useState(true); 
  const [isModalOpen4_1, setModalOpen4_1] = useState(true); 

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const openModal2 = () => setModalOpen2(true); 
  const closeModal2 = () => {
    setModalOpen2(false);
  };

  const openModal3 = () => setModalOpen3(true); 
  const closeModal3 = () => {
    setModalOpen3(false);
  };

  const openModal4 = () => setModalOpen4(true); 
  const closeModal4 = () => {
    setModalOpen4(false);
  };







  const closeModal2_1 = () => {
    setModalOpen2(false);
    setModalOpen2_1(false);
  };

  const closeModal3_1 = () => {
    setModalOpen3(false);
    setModalOpen3_1(false);
  };
  const closeModal4_1 = () => {
    setModalOpen4(false);
    setModalOpen4_1(false);
  };







  const handleChallengeClick = (challengeNumber) => {
    openModal();
  };

  const handleChallengeClick2 = (challengeNumber2) => {
    if (isModalOpen2_1 === true) {
      openModal2();
    }
  };

  const handleChallengeClick3 = (challengeNumber3) => {
    if (isModalOpen3_1 === true) {
      openModal3();
    }
  };

  const handleChallengeClick4 = (challengeNumber4) => {
    if (isModalOpen4_1 === true) {
      openModal4();
    }
  };





    return ( 
        <div className="challenge">
            <div className='w1400'>
                <h2 className='challengeTitle'>챌린지</h2>
                <div className='challengeBox'>
                    <div className='challenge1' onClick={() => handleChallengeClick2(0)}>
                        <div></div>
                    </div>
                    <div className='challenge2' onClick={() => handleChallengeClick3(0)}>
                        <div></div>
                    </div>
                    <div className='challenge3' onClick={() => handleChallengeClick4(0)}>
                        <div></div>
                    </div>
                    <div className='challenge4' onClick={() => handleChallengeClick(4)}>
                        <div className='cha_opc'>챌린지 종료</div>
                        <div></div>
                    </div>
                    <div className='challenge5' onClick={() => handleChallengeClick(5)}>
                        <div className='cha_opc' >챌린지 종료</div>
                        <div></div>
                    </div>
                </div>

            </div>
            <ChallModal  isOpen={isModalOpen} onClose={closeModal}>
                <h2 className='margin'>아쉽게도 종료된 챌린지입니다.</h2>
                <p>다음에 더 좋은 챌린지로 찾아오겠습니다.</p>
            </ChallModal>
            <ChallProblem1 isOpen={isModalOpen2} onClose={closeModal2} onClose2={closeModal2_1}> 
            </ChallProblem1>
            <ChallProblem2 isOpen={isModalOpen3} onClose={closeModal3} onClose2={closeModal3_1}> 
            </ChallProblem2>
            <ChallProblem3 isOpen={isModalOpen4} onClose={closeModal4} onClose2={closeModal4_1}> 
            </ChallProblem3>

        </div>
     );
}
 
export default Challenge;