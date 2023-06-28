import dynamic from "next/dynamic";

const PieChart = dynamic(() => import("@/components/Molecules/Charts/PieChart"), {
  ssr: false,
});
export default PieChart;
