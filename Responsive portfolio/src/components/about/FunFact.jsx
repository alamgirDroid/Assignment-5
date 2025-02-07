import { BsTrophyFill } from "react-icons/bs";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import { IoLogoYoutube } from "react-icons/io";
import FunCard from "./FunCard";


const FunFact = () => {
 return (
    <div className="px-0 grid grid-cols-2 md:grid-cols-4 pb-10">
      <FunCard icon={<BsTrophyFill/>} des="10 Awards Won"/>      
      <FunCard icon={<SiAntdesign/>} des="20 Finished Projects"/>      
      <FunCard icon={<BiCodeAlt/>} des="1000 hours of coding"/>      
      <FunCard icon={<IoLogoYoutube/>} des="200 Subscription"/>      
    </div>
 );
};

export default FunFact;