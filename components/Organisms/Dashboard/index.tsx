import PieChart from "@/components/Organisms/Charts/PieChart";
import DashboardContainer from "@/components/Molecules/Containers/Dashboard";

const Dashboard = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <DashboardContainer>
        <PieChart
          title="Test1"
          datasets={{
            data: [2112, 3423, 2365, 1985, 987],
            label: "Test1",
          }}
        />
      </DashboardContainer>
      <DashboardContainer>
        <PieChart
          title="Test2"
          labels={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
          datasets={{
            data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
            label: "Test2",
          }}
        />
      </DashboardContainer>
      <DashboardContainer className="w-[82.2%]">
        <div className="flex gap-8">
          <div className="w-1/2">
            <PieChart
              title="Test3"
              datasets={{
                data: [2112, 2365, 1985, 987],
                label: "Test3",
              }}
            />
          </div>
          <div>something something </div>
        </div>
      </DashboardContainer>
      <DashboardContainer className="w-[82.2%]">
        <PieChart
          title="Test4"
          datasets={{
            data: [2112, 2365, 1985, 987],
            label: "Test4",
          }}
        />
      </DashboardContainer>
    </div>
  );
};

export default Dashboard;
