import './community_st.css';
import { useState } from 'react';
import NftJson from './NtfData.json';
import FAQJson from './FAQData.json';

const Notification = () => {
    const [tap, setTap] = useState('NTF');
    const [modalTap, setModalTap] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    function modalWindowTap(item) {
        setSelectedItem(item);
        setModalTap(true)
    }

    return (
        <div className="Notification">
            <div className="community_top">
                <h1>{tap === 'NTF' ? '독:수리 공지사항' : 'FAQ - 자주하는 질문'}</h1>
                <p>{tap === 'NTF' ? '최신 소식을 가장 빠르게 접해보세요.' : '궁금한 점은 쉽고 빠르게 확인하세요.'}</p>
            </div>
            <div className="community_body">
                <ul className={`community_tap ${tap === 'NTF' ? 'NTFtapVar' : 'FAQtapVar'}`}>
                    <li onClick={() => setTap('NTF')}>
                        <i />공지사항
                    </li>
                    <li onClick={() => setTap('FAQ')}>
                        <i />자주하는 질문
                    </li>
                    <div className='comTapPoint'></div>
                </ul>
                <div className='community_item'>
                    {tap === 'NTF' ? (
                        NftJson.map(item => (
                            <div key={item.id} onClick={() => modalWindowTap(item)}>
                                <div className='com_Qust'><h3></h3><p>{item.title}</p></div>
                                <div className='comTTAAGG' dangerouslySetInnerHTML={{ __html: item.tag }} />
                                <div className='Com_Answer' dangerouslySetInnerHTML={{ __html: item.detail }} />
                            </div>
                        ))
                    ) : (
                        FAQJson.map(item => (
                            <div key={item.id} onClick={() => modalWindowTap(item)}>
                                <div className='com_Qust'><h3>Q.</h3><p>{item.title}</p></div>
                                <div className='comTTAAGG' dangerouslySetInnerHTML={{ __html: item.tag }} />
                                <div className='Com_Answer' dangerouslySetInnerHTML={{ __html: item.detail }} />
                            </div>
                        ))
                    )}
                </div>
            </div>
            {modalTap &&
                <div className='comDetail'>
                    <div onClick={() => setModalTap()}>
                        <div className='comDetailPop'>
                            <ul className='comDetailTop'>
                                <li>Q.</li>
                                <li>{selectedItem.title}</li>
                            </ul>
                            <ul className='comDetail_A'>
                                <li>A.</li>
                                <li><div dangerouslySetInnerHTML={{ __html: selectedItem.detail.replace(/\n/g, '<br>') }} /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            }
        </div >
    );
}

export default Notification;