import Title from "../home/Title";
import AboutMe from "./AboutMe";
import MyServices from "./MyServices";
import FanFact from "./FunFact";


const About = () => {
 return (
    <section id="about" className="w-full">
      <Title title="About" subTitle="Me"/>
      <AboutMe/>
      <Title title="My" subTitle="Services"/>
      <MyServices/>
      <Title title="Fun" subTitle="Fact"/>
      <FanFact/>
    </section>
 );
};

export default About;