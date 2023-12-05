import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
    return ( 
        <div className="Footer">
            <div>
                <div className="footerIcon">
                    <div className="footerLogo">
                        <Link to='/docsuri/'><div className="FLogo"></div></Link>
                    </div>
                    <div className="iconLink">
                        <div className="Ficon"></div>
                        <div className="Yicon"></div>
                        <div className="Iicon"></div>
                        <div className="Kicon"></div>
                    </div>
                </div>
                <div className="adress">
                    Copyright ⓒ 2023 독수리 All rights reserved.
                </div>
            </div>
        </div>
     );
}
 
export default Footer;