import Carausel from "../components/Landing/Carausel";
import OurServices from "../components/Landing/OurServices";
import TopDestinations from "../components/Landing/TopDestinations";

const Landing = () => {
  return (
    <div className="w-full h-full flex flex-col gap-5 mb-10">
      <Carausel />
      <TopDestinations />
      <OurServices />
    </div>
  );
};

export default Landing;
