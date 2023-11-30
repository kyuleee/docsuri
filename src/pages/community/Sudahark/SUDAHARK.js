import React, { useState } from 'react';
import './Sudahark_st.css';

const Sudahark = () => {
    const randomNameText = (arr) => {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    };

    const randomName = () => {
        const firstNames = ['김', '이', '박', '최'];
        const middleNames = ['지', '영', '민', '철', '정', '하'];
        const lastNames = ['수', '연', '현', '영', '은'];

        const firstName = randomNameText(firstNames);
        const middleName = randomNameText(middleNames);
        const lastName = randomNameText(lastNames);

        return firstName + middleName + lastName;
    };

    const [newPost, setNewPost] = useState([
        {
            "id": "1",
            "name": randomName(),
            "text": "모르겠는 문제 있습니다.\n 챌린지 3번문제 어떻게 푸는건가요"
        },
        {
            "id": "2",
            "name": randomName(),
            "text": "모르겠는 문제 있습니다.\n 챌린지 3번문제 어떻게 푸는건가요"
        },
        {
            "id": "3",
            "name": randomName(),
            "text": "모르겠는 문제 있습니다.\n 챌린지 3번문제 어떻게 푸는건가요"
        }
    ]);

    return (
        <div className="Sudahark">
            <div class="Sudahark_title">
                <div class="Sudahark_title_back">
                    <div class="sdh_title">수다학 - 질문 페이지</div>
                    <div class="sdh_title_sub">수다 + 수학 = 수다학</div>
                </div>
                <div className="sdh_search">
                    <input placeholder="궁금한 점을 검색해 보세요" />
                    <div className="sdh_search_icon"></div>
                </div>
            </div>
            <div class="sdh_body">
                <div class="sdh_Writing_box">
                    <div className="sdh_Writing">
                        <textarea placeholder="글을 입력하세요" />
                        <button>등록</button>
                    </div>
                    <div class="attach_box">
                        <div class="attach_box_text">
                            <div>첨부파일 (30MB)</div>
                            <div>첨부사진 (30MB)</div>
                        </div>
                        <div class="attach_box_icons">
                            <div class="Attachments_icon">
                            </div>
                            <div class="Attach_image_icon">
                            </div>
                        </div>
                    </div>
                </div>
                {newPost.map(item => (
                    <div key={item.id}>
                        <div>{item.name}</div>
                        <div>{item.text}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sudahark;