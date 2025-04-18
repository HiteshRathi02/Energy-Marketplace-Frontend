import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import predicted_data from "../dataset/prediction.json";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Bar_graph() {
  return (
    <div id="webcrumbs">
      <div className="min-h-screen w-full bg-primary-50 p-4 sm:p-4 flex ">
        <div className="bg-white rounded-md shadow-sm w-full max-w-3xl mx-auto overflow-hidden transform transition-all hover:shadow-md">
          <div className="border-b border-gray-100">
            <h1 className="text-2xl md:text-2xl font-bold text-center py-2 text-primary-700">
              Predicted Data
            </h1>
          </div>
          <div className="p-4 md:p-6">
            <Bar
              data={{
                labels: predicted_data.map((data) => data.label),
                datasets: [
                  {
                    label: "Consumption (KWh)",
                    data: predicted_data.map((data) => data.value1),
                    backgroundColor: "palegreen",
                    borderColor: "white",
                    borderWidth: 1,
                  },
                  {
                    label: "Production (KWh)",
                    data: predicted_data.map((data) => data.value2),
                    backgroundColor: "lightblue",
                    borderColor: "white",
                    borderWidth: 1,
                  },
                ],
              }}
            />
          </div>

          <div className="p-4 md:p-6">
            <Bar
              data={{
                labels: predicted_data.map((data) => data.label),
                datasets: [
                  {
                    label: "Available Energy (KWh)",
                    data: predicted_data.map((data) => {
                      return data.value2 - data.value1;
                    }),
                    backgroundColor: "lightblue",
                    borderColor: "white",
                    borderWidth: 1,
                  },
                ],
              }}
            />
          </div>
          <div className="bg-gray-50 px-4 py-2 flex justify-between items-center border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Data last updated: Today at 10:45 AM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bar_graph;
