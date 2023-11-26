import '../community_st.css';
import { useState } from 'react';
import NftJson from './NtfData.json';
import FAQJson from './FAQData.json';

const Notification = () => {
    const [tap, setTap] = useState('NTF');

    function comunityChange(tapname) {
        setTap(tapname);
    }

    return (
        <div className="Notification">
            <div className={`community_top ${tap === 'NTF' ? 'Com_top_animate1' : 'Com_top_animate2'}`}>
                <h1>{tap === 'NTF' ? '독:수리 공지사항' : 'FAQ - 자주하는 질문'}</h1>
                <p>{tap === 'NTF' ? '최신 소식을 가장 빠르게 접해보세요.' : '궁금한 점은 쉽고 빠르게 확인하세요.'}</p>
            </div>
            <div className="community_body">
                <ul className={`community_tap ${tap === 'NTF' ? 'NTFtapVar' : 'FAQtapVar'}`}>
                    <li onClick={() => comunityChange('NTF')}>
                        <i />공지사항
                    </li>
                    <li onClick={() => comunityChange('FAQ')}>
                        <i />자주하는 질문
                    </li>
                    <div></div>
                </ul>
                <div className='community_item'>
                    {tap === 'NTF' ? (
                        NftJson.map(item => (
                            <div key={item.id}><h2>Q.</h2><p>{item.title}</p></div>
                        ))
                    ) : (
                        FAQJson.map(item => (
                            <div key={item.id}><h2>Q.</h2><p>{item.title}</p></div>
                        ))
                    )}
                </div>
            </div>
            <div className='comDetail'>
                <div>
                    <div>
                        <ul>
                            <li>Q.</li>
                            <li></li>
                        </ul>
                        <ul>
                            <li>A.</li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Notification;
