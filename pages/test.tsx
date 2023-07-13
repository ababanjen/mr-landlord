/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import moment from "moment";
import Scheduler from "@/components/Molecules/Scheduler";

const TestPage = () => {
  const sched = [
    {
      id: "id-1",
      date: moment(),
      starTime: moment("2023-07-01T04:00:00"),
      endTime: moment("2023-07-01T09:30:00"),
      description: "Meeting with the boss",
    },
    {
      id: "id-2",
      date: moment(),
      starTime: moment("2023-07-01T00:30:00"),
      endTime: moment("2023-07-01T02:00:00"),
      description: "Meeting with the boss",
    },
  ];
  return (
    <div className=" overflow-auto">
      <Scheduler schedules={sched} />
    </div>
  );
};

export default TestPage;
