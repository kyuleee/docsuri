import React, { useState } from 'react';
import './Sudahark_st.css';

const Sudahark = () => {
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
    const newName = randomName();

    const [newPost, setNewPost] = useState([
        {
            "id": 1,
            "name": randomName(),
            "text": "모르겠는 문제 있습니다.\n 챌린지 3번문제 어떻게 푸는건가요",
            "comments": []
        },
        {
            "id": 2,
            "name": randomName(),
            "text": "모르겠는 문제 있습니다.\n 챌린지 1번문제 어떻게 푸는건가요",
            "comments": []
        },
        {
            "id": 3,
            "name": randomName(),
            "text": "모르겠는 문제 있습니다.\n 챌린지 2번문제 어떻게 푸는건가요",
            "comments": []
        }
    ]);

    const [newComment, setNewComment] = useState('');
    const [textValue, setTextValue] = useState('');

    const PostTextChange = (event) => {
        setTextValue(event.target.value);
    };

    const createPost = () => {
        setNewPost((prePosts) => [
            ...prePosts,
            {
                id: prePosts.length + 1,
                name: newName,
                text: textValue,
                comments: []
            }
        ]);
        setTextValue('');
    };

    const toggleCommentBox = (postId) => {
        setNewPost((prePosts) =>
            prePosts.map((post) =>
                post.id === postId
                    ? { ...post, isCommentBoxOpen: !post.isCommentBoxOpen }
                    : post
            )
        );
    };

    const viewComments = (e) => {
        setNewComment(e.target.value);
    };

    const addComment = (postId) => {
        if (newComment.trim() !== '') {
            setNewPost((prePosts) =>
                prePosts.map((post) =>
                    post.id === postId
                        ? { ...post, comments: [...post.comments, newComment] }
                        : post
                )
            );
            setNewComment('');
        }
    };

    const [searchTerm, setSearchTerm] = useState('');
    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
      };
      const filteredPosts = newPost.filter((post) =>
      post.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
          
    
   
    return (
        <div className="Sudahark">
            <div className="Sudahark_title">
                <div className="Sudahark_title_back">
                    <div className="sdh_title">수다학 - 질문 페이지</div>
                    <div className="sdh_title_sub">수다 + 수학 = 수다학</div>
                </div>
                <div className="sdh_search">
                    <input placeholder="궁금한 점을 검색해 보세요" value={searchTerm} onChange={handleSearchTermChange}/>
                    <div className="sdh_search_icon"></div>
                </div>
            </div>
            <div className="sdh_body">
                <div className="sdh_Writing_box">
                    <div className="sdh_Writing">
                        <textarea value={textValue} onChange={PostTextChange} placeholder="글을 입력하세요" />
                        <button onClick={createPost}>등록</button>
                    </div>
                    <div className="attach_box">
                        <div className="attach_box_text">
                            <div>첨부파일 (30MB)</div>
                            <div>첨부사진 (30MB)</div>
                        </div>
                        <div className="attach_box_icons">
                            <div className="Attachments_icon"></div>
                            <div className="Attach_image_icon"></div>
                        </div>
                    </div>
                </div>
                {filteredPosts.map(item => (
                    <div className='sdh_posts_box' key={item.id}>
                        <div>{item.name}</div>
                        <div className='sdh_postsintext' dangerouslySetInnerHTML={{ __html: item.text.replace(/\n/g, '<br>') }} />
                        <div className='sdh_postsinPile'>첨부파일:</div>
                        <div className='sdh_post_reply'>
                            <div className='sdh_reply_1'><i></i><p>즐겨찾기</p></div>
                            <div>댓글({item.comments.length})</div>
                            <div onClick={() => toggleCommentBox(item.id)} className='sdh_create_reply'><p>댓글등록</p><i></i></div>
                        </div>
                        {item.isCommentBoxOpen ? (
                            <div className='sdh_view_reply'>
                                <div className="sdh_replyWriting">
                                    <textarea placeholder="댓글을 입력하세요" onChange={viewComments} />
                                    <button onClick={() => addComment(item.id)}>등록</button>
                                </div>
                                <div className="sdh_commentboxbox">
                                    {item.comments.map((comment, index) => (
                                        <div className='sdh_comments' key={index}>
                                            <div className='sdh_profile'><i></i>{randomName()}</div>
                                            <div className='sdh_comments_rightbox'>
                                                <div className='sdh_comment' dangerouslySetInnerHTML={{ __html: comment.replace(/\n/g, '<br>') }} />
                                            </div>
                                            <div className='sdh_comments_reply'>
                                                <div className='sdh_reply_1'><i></i><p>즐겨찾기</p></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : null}
                    </div>
                ))}
            </div>
        </div >
    );
}

export default Sudahark;
