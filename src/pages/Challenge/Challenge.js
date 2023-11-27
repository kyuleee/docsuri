import React, { useState } from 'react';
import './Challenge.css'
import ChallModal from './ChallModal'
const Challenge = () => {

    const [isModalOpen, setModalOpen] = useState(false);
  
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
  
    const handleChallengeClick = (challengeNumber) => {
      openModal();
      console.log(`challenge${challengeNumber} 클릭!`);
    };






    return ( 
        <div className="challenge">
            <div className='w1400 '>
                <h2 className='challengeTitle'>챌린지</h2>
                <div className='challengeBox'>
                    <div className='challenge1'>
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
            

        </div>
     );
}
 
export default Challenge;