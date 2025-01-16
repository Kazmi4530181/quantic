import React from "react";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from "react-chartjs-2";

Chart.register(CategoryScale, LinearScale, BarController, BarElement, PointElement, LineElement, Tooltip, Legend);


function UserDashboard() {

  const salesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Cash",
        data: [3000, 4000, 3200, 4500, 3800, 5000, 5200, 4800, 6000, 7000, 7500, 8000],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Credit Card",
        data: [300, 4200, 3000, 500, 300, 1000, 2200, 2800, 5000, 7000, 7500, 8000],
        backgroundColor: "rgba(255, 87, 34, 0.6)",
        borderColor: "rgba(255, 87, 34, 1)",
        borderWidth: 1,
      },
    ],
  };

  const eventData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Total Months",
        data: [2, 1, 15, 11, 9, 3, 5, 12, 5, 1, 7, 8],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };


  const cancellationData = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Cancellations",
        data: [12, 19, 3, 5, 2, 3, 8, 6, 4, 7, 10, 9],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };


  const cancellationOptions = {
    indexAxis: "x",
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Total Cancellations by Month",
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="container-flex w-100">
      <div className="content mt-3">
        <h3 className="title">Monthly Sales</h3>
        <div className="row d-flex justify-content-center">
          <div className="bar-chart">
            <Bar data={salesData} />
          </div>
        </div>
      </div>
      <div className="content mt-3">
        <h3 className="title">Monthly Events</h3>
        <div className="row d-flex justify-content-center">
          <div className="bar-chart">
            <Bar data={eventData} style={{ width: '100%' }} />
          </div>
        </div>
      </div>
      <div className="content mt-3">
        <h3 className="title">Cancellations</h3>
        <div className="row d-flex justify-content-center">
          <div className="bar-chart">
            <Bar data={cancellationData} options={cancellationOptions} style={{ width: '100%' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
