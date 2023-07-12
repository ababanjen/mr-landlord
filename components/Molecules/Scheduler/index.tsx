/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import moment from "moment";
import clsx from "clsx";
import { DragEvent } from "react";
import Container, {
  Draggable,
} from "@/components/Molecules/Containers/Draggable";

const timeLabels = [...Array(24)].map((_, key) => {
  const data = { id: key + 1, time: `${key} am`, format: key + 1 };
  if (key <= 1) {
    return { ...data, time: `${key === 0 ? 12 : 1} am` };
  }
  if (key > 12) {
    return { ...data, time: `${key + 1 - 12} pm` };
  }
  return data;
});

const getDaysArray = (year: number, month: number) => {
  const monthIndex = month - 1;
  const date = new Date(year, monthIndex, 1);
  const result = [];
  while (date.getMonth() === monthIndex) {
    result.push({
      date: moment(date).format("DD"),
      day: moment(date).format("ddd"),
      month: moment(date).format("MMM"),
    });
    date.setDate(date.getDate() + 1);
  }
  return result;
};

const Scheduler = () => {
  const dates = getDaysArray(2023, 7);

  const onDrop = (
    e: DragEvent<HTMLDivElement>,
    d: boolean,
    s: { id: number; time: string; format: number }
  ) => console.log("HANDLE Drop", { e, d, s });

  return (
    <div className="flex flex-col w-full border border-solid overflow-auto">
      <div className="flex">
        <div className="min-w-[4rem]" />
        {dates.map(date => (
          <div
            key={date.date}
            className="border border-solid p-2 min-w-[6rem] flex"
          >
            <span className="w-full">{`${date.month} ${date.date}`}</span>
          </div>
        ))}
      </div>
      <div className="flex">
        <div className="flex flex-col">
          {timeLabels.map(label => (
            <div className="flex" key={label.id + label.time}>
              <div className="border border-solid p-2 min-w-[4rem] max-w-[4rem] flex justify-end items-center">
                {label.time}
              </div>
              <Container onDrop={e => onDrop(e, true, label)} className="flex">
                {dates.map(date => (
                  <div
                    key={date.date}
                    className="border border-solid p-1 flex flex-col h-[5rem] w-[6rem]"
                  >
                    {[...Array(4)].map((_, key) => {
                      const reserved =
                        [0, 1, 3].some(slot => slot === key) &&
                        date.date === "03" &&
                        label.id === 2; // TODO
                      return (
                        <Draggable
                          id={label.time + date.date}
                          key={`${date.date}-${key + 1}`}
                          className={clsx({
                            "w-full h-full": true,
                            "bg-orange-100 hover:bg-orange-200": reserved, // TODO
                          })}
                        >
                          <div className="w-full">
                            <span
                              className={clsx({
                                "text-black text-xs truncate block": true,
                                hidden: !reserved,
                              })}
                            >
                              Meeting with something
                            </span>
                          </div>
                        </Draggable>
                      );
                    })}
                  </div>
                ))}
              </Container>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Scheduler;
