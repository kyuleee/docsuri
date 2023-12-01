import "./StudyPage.css"
import grade4 from '../../asset/img/Study_Ebook4.jpg';
import grade5 from '../../asset/img/Study_Ebook5.jpg';
import grade6 from '../../asset/img/Study_Ebook6.jpg';
import { Link } from "react-router-dom";

const StudyPage = () => {
     return (
        <section className="StudyPage">
             <article className="Study_Allpage ">
                <h2>교과학습</h2>
                <div className="Study_Ebooks">
                  <Link to='/StudyEbook'><img src={grade4} alt="Grade_e-book4"/></Link>
                  <Link to='/StudyEbook'><img src={grade5} alt="Grade_e-book5"/></Link>
                  <Link to='/StudyEbook'><img src={grade6} alt="Grade_e-book6"/></Link>
                </div>
             </article>
        </section>
       
    );
}
 
export default StudyPage;