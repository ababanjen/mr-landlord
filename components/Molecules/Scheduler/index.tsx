/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import moment from "moment";
import clsx from "clsx";
import { DragEvent } from "react";
import Container, {
  Draggable,
} from "@/components/Molecules/Containers/Draggable";

const timeSlots = [...Array(24)].map((_, key) => {
  const formatHRs = `${moment().format("YYYY-MM-DD")}T`;
  return {
    id: key + 1,
    time: moment(`${formatHRs}${key < 10 ? "0" : ""}${key}:00:00`),
  };
});

const getDaysArray = (year: number, month: number) => {
  const monthIndex = month - 1;
  const date = new Date(year, monthIndex, 1);
  const result = [];
  while (date.getMonth() === monthIndex) {
    result.push(moment(date));
    date.setDate(date.getDate() + 1);
  }
  return result;
};
type SchedulesTypes = {
  id: string | number;
  date: moment.Moment;
  starTime: moment.Moment;
  endTime: moment.Moment;
  description: string;
};
type SchedulerTypes = {
  schedules: SchedulesTypes[];
};

const Scheduler = ({ schedules }: SchedulerTypes) => {
  const dates = getDaysArray(2023, 7);

  const onDrop = (
    e: DragEvent<HTMLDivElement>,
    d: boolean,
    s: { id: number; time: any }
  ) => console.log("HANDLE Drop", { e, d, s });

  const isReserved = (
    currentDate: moment.Moment,
    currentSlot: { id: number; time: moment.Moment }
  ) => {
    const timeFormat = "hh:mm:ss a";
    const formatDate = currentDate.format("MM-DD-YYYY");
    let res;
    schedules.forEach(sched => {
      const schedDate = sched.endTime.format("MM-DD-YYYY");
      const time = moment(currentSlot.time.format(timeFormat), timeFormat);
      const start = moment(sched.starTime.format(timeFormat), timeFormat);
      const end = moment(sched.endTime.format(timeFormat), timeFormat);
      const hrSpan = moment.duration(end.diff(start)).asHours();
      const reserved = time.isBetween(start, end);
      if (reserved && formatDate === schedDate) {
        res = {
          reserved,
          description: sched.description,
          classes: `h-[${6 * hrSpan}rem]`,
        };
      }
    });

    return res ?? { reserved: false, description: "", classes: "" };
  };

  return (
    <div className="flex">
      <div className="flex flex-col">
        <div className="flex flex-col py-5 " />
        {timeSlots.map(slot => (
          <div className="flex flex-col h-[5rem] " key={slot.id}>
            <div className="border-l-2 p-2 min-w-[4rem] max-w-[4rem] flex justify-end items-center h-full">
              {slot.time.format("h a")}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col w-full border border-solid overflow-auto bg-white">
        <div className="flex">
          {dates.map(date => (
            <div
              key={date.format("DD")}
              className="border-l-2 border-b-2 p-2 min-w-[6rem] flex"
            >
              <span className="w-full flex justify-center capitalize font-semibold">{`${date.format(
                "MMM"
              )} ${date.format("DD")}`}</span>
            </div>
          ))}
        </div>
        <div className="flex">
          <div className="flex flex-col">
            {timeSlots.map(slot => (
              <div className="flex" key={slot.id}>
                <Container onDrop={e => onDrop(e, true, slot)} className="flex">
                  {dates.map(date => {
                    const { reserved, description, classes } = isReserved(
                      date,
                      slot
                    );

                    return (
                      <div
                        key={date.format("MM-DD-YYYY")}
                        className="border-l-2 flex flex-col min-h-[5rem] h-auto w-[6rem]"
                      >
                        <Draggable
                          id={slot.time + date.format("MM-DD-YYYY")}
                          key={`${date.date}`}
                          className={clsx({
                            "w-[6rem] absolute min-h-[6rem]": true,
                            "bg-orange-100 hover:bg-orange-200": reserved, // TODO
                            [classes]: true,
                          })}
                        >
                          <div className="w-full">
                            <span
                              className={clsx({
                                "text-black text-xs p-2": true, // truncate block
                                hidden: !reserved,
                              })}
                            >
                              {description}
                            </span>
                          </div>
                        </Draggable>
                      </div>
                    );
                  })}
                </Container>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scheduler;
