"use client";

/* eslint-disable react/require-default-props */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { Chart } from "tw-elements";
import { useRef } from "react";
import { radomColors } from "@/helpers/styles";
import useInitTE from "@/hooks/global/useInitTE";

type PieChartTypes = {
  title: string | undefined;
  labels?: (string | number)[] | undefined;
  datasets: { label?: string; data: (string | number)[] };
};

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
        <canvas id="pie-chart" ref={canvasRef} />
      </div>
    </div>
  );
};

export default PieChart;
