/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import moment from "moment";
import { useState } from "react";
import Scheduler from "@/components/Molecules/Scheduler";

const sched = [
  {
    id: "id-1",
    date: moment(),
    startTime: moment("2023-07-01T00:00:00"),
    endTime: moment("2023-07-01T10:15:00"),
    description: "Meeting with  Mike",
  },
  {
    id: "id-2",
    date: moment(),
    startTime: moment("2023-07-01T03:00:00"),
    endTime: moment("2023-07-01T04:00:00"),
    description: "Meeting with  Jen",
  },
  {
    id: "id-3",
    date: moment(),
    startTime: moment("2023-07-01T13:00:00"),
    endTime: moment("2023-07-01T14:30:00"),
    description: "Meeting with Jes",
  },
];
const TestPage = () => {
  const [schedules, setSchedules] = useState(sched);
  const onDrop = (_: any, value: any) => {
    setSchedules(
      schedules.map(s => {
        if (s.id === value.id) return value;
        return s;
      })
    );
  };
  return (
    <div className="h-[40rem] w-1/2  overflow-auto">
      <Scheduler schedules={schedules} date={moment()} onDrop={onDrop} />
    </div>
  );
};

export default TestPage;
