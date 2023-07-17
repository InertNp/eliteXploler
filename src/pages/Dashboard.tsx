import SideBar from "../components/Dashboard/SideBar";

const Dashboard = () => {
  return (
    <div className="flex flex-row">
      <SideBar />
      <div>contents</div>
    </div>
  );
};

export default Dashboard;
