import "./StudyPage.css"
import grade4 from '../../asset/img/Study_Ebook4.jpg';
import grade5 from '../../asset/img/Study_Ebook5.jpg';
import grade6 from '../../asset/img/Study_Ebook6.jpg';

const StudyPage = () => {
     return (
        <section className="StudyPage w1400">
             <article className="Study_Allpage">
                <h2>교과학습</h2>
                <div className="Study_Ebooks">
                  <img src={grade4} alt="Grade_e-book4"/>
                  <img src={grade5} alt="Grade_e-book5"/>
                  <img src={grade6} alt="Grade_e-book6"/>
                </div>
             </article>
        </section>
       
    );
}
 
export default StudyPage;