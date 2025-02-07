import RoundFive from "./components/roundDesgins/RoundFive";
import RoundFour from "./components/roundDesgins/RoundFour";
import RoundOne from "./components/roundDesgins/RoundOne";
import RoundThree from "./components/roundDesgins/RoundThree";
import RoundTwo from "./components/roundDesgins/RoundTwo";
import Home from "./Home";


const App = () => {
  return (
    <div className="w-full lgl:h-screen font-bodyFont overflow-hidden text-textColor bg-black relative">
      <div className="max-w-screen-2xl h-full mx-auto flex justify-center items-center">
        <Home/>
      </div>
      <div className="w-full h-full absolute top-0 left-0 z-10">
       <RoundOne/>
       <RoundTwo/>
       <RoundThree/>
       <RoundFour/>
       <RoundFive/>
      </div>
    </div>
  );
};

export default App;