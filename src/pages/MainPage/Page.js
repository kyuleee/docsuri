import "./Page.css";
import { IntroSection, AboutSection, ChallengeSection} from "./section";
import SideBar from './../SideBar/SideBar';

const Page = () => {
  return (
    <>
      <SideBar/>
      <IntroSection />
      <AboutSection />
      <ChallengeSection />
    </>
  );
};

export { Page };
