import { GiGraduateCap } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import ResumeTitle from "./ResumeTitle";
import ResumeCard from "./ResumeCard";

const Education = () => {
 return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge=""
          title="Web Developer"
          subTitle="Facebook Inc."
          des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, itaque ipsa quae!"
        />
        <ResumeCard
          badge="2024 - 2025"
          title="MERN Stack Developer"
          subTitle="Dhaka"
          des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, itaque ipsa quae!"
        />
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2019 - 2020"
          title="National University"
          subTitle="Dhaka"
          des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, itaque ipsa quae!"
        />
        <ResumeCard
          badge="2024 - 2025"
          title="Programming Course"
          subTitle="Bangladesh"
          des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, itaque ipsa quae!"
        />
      </div>
    </div>
 );
};

export default Education;