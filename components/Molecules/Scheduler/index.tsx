/* eslint-disable no-underscore-dangle */
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

const getDaysArray = (year: string, month: string) => {
  const monthIndex = parseInt(month, 10) - 1;
  const date = new Date(parseInt(year, 10), monthIndex, 1);
  const result = [];
  while (date.getMonth() === monthIndex) {
    result.push(moment(date));
    date.setDate(date.getDate() + 1);
  }
  return result;
};
type SchedulesTypes = {
  id: string | number;
  startTime: moment.Moment;
  endTime: moment.Moment;
  description: string;
  date: moment.Moment;
};
type SchedulerTypes = {
  schedules: SchedulesTypes[];
  date: moment.Moment;
  onDrop: (event: DragEvent<HTMLDivElement>, value: any) => void;
};

const Scheduler = ({ schedules, date: cDate, onDrop }: SchedulerTypes) => {
  const dates = getDaysArray(cDate.format("YYYY"), cDate.format("M"));

  const findScheduleSlot = (
    currentDate: moment.Moment,
    scheduleDate: moment.Moment,
    currentSlot: moment.Moment,
    scheduleSlot: moment.Moment
  ) => {
    const timeFormat = "hh a";
    const dateFormat = "MM-DD-YYYY";
    const currentD = currentDate.format(dateFormat);
    const schedD = scheduleDate.format(dateFormat);
    const currentS = currentSlot.format(timeFormat);
    const schedS = scheduleSlot.format(timeFormat);
    return currentD === schedD && currentS === schedS;
  };

  const getSchedule = (date: moment.Moment, slot: moment.Moment) =>
    schedules.find(sched => {
      return findScheduleSlot(date, sched.startTime, sched.startTime, slot);
    }) ?? null;

  const handleOnDrop = (
    event: DragEvent<HTMLDivElement>,
    slot: { id: number; time: moment.Moment },
    date: moment.Moment
  ) => {
    event.preventDefault();
    event.currentTarget.classList.remove("dragged-over");
    const data = event.dataTransfer.getData("text/plain");
    const formattedData = moment(data);
    const prevSlot = getSchedule(formattedData, formattedData);
    const hrSpan = moment
      .duration(prevSlot?.endTime.diff(prevSlot.startTime))
      .asHours();
    const newSlotFormat = `${date.format("YYYY-MM-DD")}T${slot.time.format(
      "HH:mm:ss"
    )}`;
    const newTime = moment(newSlotFormat);
    const newStartTime = moment(newTime.creationData().input);
    const newEndTime = newStartTime.add(hrSpan, "hours");

    onDrop(event, {
      ...prevSlot,
      date,
      startTime: moment(newStartTime.creationData().input),
      endTime: newEndTime,
    });
  };

  const getScheduleDate = (
    currentDate: moment.Moment,
    currentSlot: { id: number; time: moment.Moment },
    schedule: SchedulesTypes | null
  ) => {
    const defaultRes = { reserved: false, schedule: null, style: {} };
    if (!schedule) return defaultRes;
    const timeFormat = "hh:mm:ss a";
    let res;
    const start = moment(schedule.startTime.format(timeFormat), timeFormat);
    const end = moment(schedule.endTime.format(timeFormat), timeFormat);
    const hrSpan = moment.duration(end.diff(start)).asHours();
    if (
      findScheduleSlot(
        currentDate,
        schedule.startTime,
        currentSlot.time,
        schedule.startTime
      )
    ) {
      res = {
        reserved: true,
        schedule,
        style: {
          height: `${6 * hrSpan}rem`,
        },
      };
    }
    return res ?? defaultRes;
  };

  const getDescription = (sched: SchedulesTypes | null) =>
    sched ? sched.description : "";

  return (
    <div className="flex">
      <div className="flex flex-col bg-[#0d212b] text-white">
        <div className="flex flex-col py-5 " />
        {timeSlots.map(slot => (
          <div className="flex flex-col h-[5rem] " key={slot.id}>
            <div className="p-2 min-w-[4rem] max-w-[4rem] flex justify-end items-center h-full">
              {slot.time.format("h a")}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col w-full overflow-auto  bg-[#0d212b] text-white">
        <div className="flex">
          {dates.map(date => (
            <div key={date.format("DD")} className="p-2 min-w-[6rem] flex">
              <span className="w-full flex justify-center capitalize font-semibold">{`${date.format(
                "MMM"
              )} ${date.format("DD")}`}</span>
            </div>
          ))}
        </div>
        <div className="flex">
          <div className="flex flex-col  bg-[#4e4e4e]">
            {timeSlots.map(slot => (
              <div className="flex" key={slot.id}>
                {dates.map(date => {
                  const sched = getSchedule(date, slot.time);
                  const { reserved, style } = getScheduleDate(
                    date,
                    slot,
                    sched
                  );
                  const id = `${moment(sched?.startTime).format(
                    "YYYY-MM-DD"
                  )}T${moment(sched?.startTime).format("HH:mm:ss")}`;
                  return (
                    <Container
                      onDrop={e => handleOnDrop(e, slot, date)}
                      className="flex relative"
                      key={date.format("MM-DD-YYYY")}
                    >
                      <div className="flex flex-col min-h-[5rem] h-auto w-[6rem]">
                        {reserved && id && (
                          <Draggable
                            id={id}
                            key={id}
                            className={clsx({
                              "w-[6rem] absolute min-h-[6rem] rounded": true,
                              "bg-orange-100 hover:bg-orange-200": reserved,
                            })}
                            style={style}
                          >
                            <div className="w-full p-2">
                              <span
                                className={clsx({
                                  "text-black text-xs": true, // truncate block
                                  hidden: !reserved,
                                })}
                              >
                                {getDescription(sched)}
                              </span>
                            </div>
                          </Draggable>
                        )}
                      </div>
                    </Container>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scheduler;
