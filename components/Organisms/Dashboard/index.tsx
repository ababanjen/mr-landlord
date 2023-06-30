import PieChart from '@/components/Organisms/Charts/PieChart';
import Box from '@/components/Molecules/Containers/Box';

const Dashboard = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <Box>
        <PieChart
          title="Test1"
          datasets={{
            data: [2112, 3423, 2365, 1985, 987],
            label: 'Test1',
          }}
        />
      </Box>
      <Box>
        <PieChart
          title="Test2"
          labels={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
          datasets={{
            data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
            label: 'Test2',
          }}
        />
      </Box>
      <Box className="w-[82.2%]">
        <div className="flex gap-8">
          <div className="w-1/2">
            <PieChart
              title="Test3"
              datasets={{
                data: [2112, 2365, 1985, 987],
                label: 'Test3',
              }}
            />
          </div>
          <div>something something </div>
        </div>
      </Box>
      <Box className="w-[82.2%]">
        <PieChart
          title="Test4"
          datasets={{
            data: [2112, 2365, 1985, 987],
            label: 'Test4',
          }}
        />
      </Box>
    </div>
  );
};

export default Dashboard;
