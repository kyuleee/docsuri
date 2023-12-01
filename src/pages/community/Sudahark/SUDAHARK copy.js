import React, { useState } from 'react';

const Sudahark = () => {
    const [textValue, setTextValue] = useState('');
    const [newPost, setNewPost] = useState([]);

    const randomNameText = (arr) => {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    };

    const randomName = () => {
        const firstNames = ['김', '이', '박', '최'];
        const middleNames = ['지', '영', '민', '철', '정', '하', '서', '건'];
        const lastNames = ['수', '연', '현', '영', '은', '준'];

        const firstName = randomNameText(firstNames);
        const middleName = randomNameText(middleNames);
        const lastName = randomNameText(lastNames);

        return firstName + middleName + lastName;
    };

    const handleTextareaChange = (event) => {
        setTextValue(event.target.value);
    };

    const createPost = () => {
        setNewPost((prePosts) => [
            ...prePosts,
            {
                id: prePosts.length + 1,
                name: randomName(),
                text: textValue,
                comments: []
            }
        ]);
        setTextValue('');
    };

    return (
        <div className="Sudahark">
            {/* 다른 코드들... */}
            <div className="sdh_Writing">
                <textarea
                    value={textValue}
                    onChange={handleTextareaChange}
                    placeholder="글을 입력하세요"
                />
                <button onClick={createPost}>등록</button>
            </div>
            {/* 다른 코드들... */}
        </div>
    );
};

export default Sudahark;
