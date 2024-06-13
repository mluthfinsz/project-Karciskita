import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "../ComponentAdmin/component.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const HorizontalBarChart = () => {
  const totalTickets = 100;
  const soldData = [50, 80];
  const remainingData = soldData.map((sold) => totalTickets - sold);

  const data = {
    labels: ["Festival Standing", "Numbering Seated"],
    datasets: [
      {
        label: "Tickets Sold",
        data: soldData,
        backgroundColor: "rgba(79, 76, 338, 1)",
        borderColor: "rgba(79, 76, 338, 1)",
        borderWidth: 1,
        borderRadius: 11,
        barThickness: 20,
      },
      {
        label: "Remaining Tickets",
        data: remainingData,
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderColor: "rgba(79, 76, 338, 1)",
        borderWidth: 1,
        borderRadius: 11,
        barThickness: 20,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        stacked: true,
        max: 100,
      },
      y: {
        stacked: true,
      },
    },
  };

  return (
    <div className="chart-container">
      <Bar data={data} options={options} />
    </div>
  );
};

export default HorizontalBarChart;
