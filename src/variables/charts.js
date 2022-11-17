/*!

=========================================================
* Paper Dashboard React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

const { LandCoverLineYears } = require("data/land_cover_line");
const { LandCoverLineData } = require("data/land_cover_line");
const { LandCoverLineColors } = require("data/land_cover_line");
const { SpeciesPieChartColors } = require("data/species_pie");
const { SpeciesPieChartLabels, SpeciesPieChartData } = require("data/species_pie");

const { LandPieChartColors, LandPieChartData, LandPieChartLabels } = require("data/land_pie");

const { SpeciesLineYears, SpeciesLineData, SpeciesLineColors } = require("data/species_line");

const dashboard24HoursPerformanceChart = {
  data: (canvas) => {
    return {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct"
      ],
      datasets: [
        {
          borderColor: "#6bd098",
          backgroundColor: "#6bd098",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          tension: 0.4,
          fill: true,
          data: [300, 310, 316, 322, 330, 326, 333, 345, 338, 354]
        },
        {
          borderColor: "#f17e5d",
          backgroundColor: "#f17e5d",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          tension: 0.4,
          fill: true,
          data: [320, 340, 365, 360, 370, 385, 390, 384, 408, 420]
        },
        {
          borderColor: "#fcc468",
          backgroundColor: "#fcc468",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          tension: 0.4,
          fill: true,
          data: [370, 394, 415, 409, 425, 445, 460, 450, 478, 484]
        }
      ]
    };
  },
  options: {
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false }
    },
    scales: {
      y: {
        ticks: {
          color: "#9f9f9f",
          beginAtZero: false,
          maxTicksLimit: 5
        },
        grid: {
          drawBorder: false,
          display: false
        }
      },
      x: {
        barPercentage: 1.6,
        grid: {
          drawBorder: false,
          display: false
        },
        ticks: {
          padding: 20,
          color: "#9f9f9f"
        }
      }
    }
  }
};

const SpeciesPieChart = {
  data: (canvas) => {
    const mangrove = localStorage.getItem("currMangrove");
    const labels = SpeciesPieChartLabels(mangrove);
    const data = SpeciesPieChartData(mangrove);
    return {
      labels: labels,
      datasets: [
        {
          label: "Species",
          pointRadius: 0,
          pointHoverRadius: 0,
          backgroundColor: SpeciesPieChartColors(mangrove),
          borderWidth: 0,
          data: data
        }
      ]
    };
  }
};

const LandPieChart = {
  data: (canvas) => {
    const mangrove = localStorage.getItem("currMangrove");
    const labels = LandPieChartLabels(mangrove);
    const data = LandPieChartData(mangrove);
    return {
      labels: labels,
      datasets: [
        {
          label: "Species",
          pointRadius: 0,
          pointHoverRadius: 0,
          backgroundColor: LandPieChartColors(mangrove),
          borderWidth: 0,
          data: data
        }
      ]
    };
  }
};


const LandCoverLine = {
  
  data: (canvas) => {
    const mangrove = localStorage.getItem('currMangrove') 
    const datas = LandCoverLineData(mangrove);
    const years = LandCoverLineYears(mangrove);
    const colors = LandCoverLineColors(mangrove);
    const indices = Array.from({length: datas.length}, (x, i) => i);
    const dataset = indices.map((i) => {
      return {
        data: datas[i],
        fill: false,
        borderColor: colors[i],
        backgroundColor: "transparent",
        pointBorderColor: colors[i],
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8,
        tension: 0.4
      };
    });
    return {
      labels: years,
      datasets: dataset
    };
  }
};

const pieChartOptions = {
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false }
  },
  maintainAspectRatio: false,
  pieceLabel: {
    render: "percentage",
    fontColor: ["white"],
    precision: 2
  },
  scales: {
    y: {
      ticks: {
        display: false
      },
      grid: {
        drawBorder: false,
        display: false
      }
    },
    x: {
      barPercentage: 1.6,
      grid: {
        drawBorder: false,
        display: false
      },
      ticks: {
        display: false
      }
    }
  }
};

const lineChartOptions = {
  plugins: {
    legend: { display: false }
  }
};

const SpeciesLine = {
  data: (canvas) => {
    const mangrove = localStorage.getItem('currMangrove') 
    const datas = SpeciesLineData(mangrove);
    const years = SpeciesLineYears(mangrove);
    const colors = SpeciesLineColors(mangrove);
    const indices = Array.from({length: datas.length}, (x, i) => i);
    const dataset = indices.map((i) => {
      return {
        data: datas[i],
        fill: false,
        borderColor: colors[i],
        backgroundColor: "transparent",
        pointBorderColor: colors[i],
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8,
        tension: 0.4
      };
    });
    return {
      labels: years,
      datasets: dataset
    };
  } 
}

module.exports = {
  dashboard24HoursPerformanceChart,
  SpeciesPieChart,
  LandCoverLine,
  pieChartOptions,
  lineChartOptions,
  LandPieChart,
  SpeciesLine
};