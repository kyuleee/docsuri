import "./Footer.css";
const Footer = () => {
    return ( 
        <div className="Footer">
            <div className="footerIcon">
                <div className="footerLogo">
                    <div className="FLogo"></div>
                    <div className="footerTxt">
                        <p>메인</p>
                        <p>|</p>
                        <p>교과 학습</p>
                        <p>|</p>
                        <p>문제 풀이</p>
                        <p>|</p>
                        <p>마이페이지</p>
                        <p>|</p>
                        <p>자주하는 질문</p>
                    </div>
                </div>
                <div>
                    <div className="Ficon"></div>
                    <div className="Yicon"></div>
                    <div className="Iicon"></div>
                    <div className="Kicon"></div>
                </div>
            </div>
            <div className="adress">
                Copyright ⓒ 2023 독수리 어쩌고 All rights reserved.
            </div>
        </div>
     );
}
 
export default Footer;