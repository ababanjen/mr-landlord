"use client";
import { Chart } from "tw-elements";
import { useRef } from "react";
import { radomColors } from "@/helpers/styles";
import useInitTE from "@/hooks/global/useInitTE";

const PieChart = ({ title, labels, datasets }: PieChartTypes) => {
  const canvasRef = useRef(null);
  const config = {
    type: "pie",
    data: {
      labels,
      datasets: [
        {
          backgroundColor: radomColors(datasets.data),
          ...datasets,
        },
      ],
    },
  };
  useInitTE({ Chart }, canvasRef, config);

  return (
    <div>
      {title}
      <div className="mx-auto w-3/5 overflow-hidden">
        <canvas id="bar-chart" ref={canvasRef}></canvas>
      </div>
    </div>
  );
};

export default PieChart;

type PieChartTypes = {
  title?: string;
  labels?: (string | number)[];
  datasets: { label?: string; data: (string | number)[] };
};
