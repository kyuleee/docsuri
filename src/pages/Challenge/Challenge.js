import React, { useState } from 'react';
import './Challenge.css'
import ChallModal from './ChallModal'
import ChallProblem1 from './ChallProblem';
const Challenge = () => {

    const [isModalOpen, setModalOpen] = useState(false);
    const [isModalOpen2, setModalOpen2] = useState(false); //첫번째 챌린지
  
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const openModal2 = () => setModalOpen2(true);
    const closeModal2 = () => setModalOpen2(false);



  
    const handleChallengeClick = (challengeNumber) => {
      openModal();
      console.log(`challenge${challengeNumber} 클릭!`);
    };

    const handleChallengeClick2 = (challengeNumber2) => {
        openModal2();
      console.log(`challenge${challengeNumber2} 클릭!`);
    };

    





    return ( 
        <div className="challenge">
            <div className='w1400 '>
                <h2 className='challengeTitle'>챌린지</h2>
                <div className='challengeBox'>
                    <div className='challenge1' onClick={() => handleChallengeClick2(4)}>
                        <div></div>
                    </div>
                    <div className='challenge2'>
                        <div></div>
                    </div>
                    <div className='challenge3'>
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
            <ChallProblem1 isOpen={isModalOpen2} onClose={closeModal2}> 
            </ChallProblem1>

        </div>
     );
}
 
export default Challenge;