
import { textAlign } from "@mui/system";
import { LandCoverLineLabels } from "data/land_cover_line";
import { LandCoverLineColors } from "data/land_cover_line";
import { SpeciesLineLabels } from "data/species_line";
import { SpeciesLineColors } from "data/species_line";
import React from "react";
import { Line, Pie } from "react-chartjs-2";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";
// core components
import {
  LandCoverLine,
  SpeciesPieChart,
  LandPieChart,
  pieChartOptions,
  lineChartOptions,
  SpeciesLine
} from "variables/charts.js";
const { SpeciesPieChartColors } = require("data/species_pie");
const { SpeciesPieChartLabels } = require("data/species_pie");
const { LandPieChartColors, LandPieChartLabels } = require("data/land_pie");

const MangroveSpeciesPieChart = () => {
  const currMangrove = localStorage.getItem('currMangrove');
  const data = (SpeciesPieChart.data);
  const options = pieChartOptions;
  const legendColors = SpeciesPieChartColors(currMangrove);
  const legendLabels = SpeciesPieChartLabels(currMangrove);
  // console.log(legendColors)
  const indices = Array.from({length: legendColors.length}, (_, i) => i);
  const half = Number(Math.ceil(legendColors.length / 2));

  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h5">Species Cover Statistics</CardTitle>
        <p className="card-category">Latest species information</p>
      </CardHeader>
      <CardBody style={{ height: "266px" }}>
        <Pie
          data={data}
          options={options}
        />
      </CardBody>
      <CardFooter>
        <div 
          style={{ 
            display: "flex", 
            flexDirection: "row", 
            justifyContent: "space-around", 
            alignItems: "center"
        }}
        >
          <div className="legend">
            {indices.slice(0, half).map((index) => {
              return (
              <>
                <i className="fa fa-circle" style={{ color: legendColors[index] }} />
                {` ${legendLabels[index]}`}
                <br />
              </>);
            })}
          </div>
          <div className="legend">
            {indices.slice(half).map((index) => {
              return (
              <>
                <i className="fa fa-circle" style={{ color: legendColors[index] }} />
                {` ${legendLabels[index]}`}
                <br />
              </>);
            })}
          </div>
        </div>
        {/* <hr />
        <div className="stats">
          <i className="fa fa-calendar" /> Number of emails sent
        </div> */}
      </CardFooter>
    </Card>
  )
}

function MangroveLandCoverPieChart() {
  const currMangrove = localStorage.getItem('currMangrove');
  const data = (LandPieChart.data);
  const options = pieChartOptions;
  const legendColors = LandPieChartColors(currMangrove);
  const legendLabels = LandPieChartLabels(currMangrove);
  const indices = Array.from({length: legendColors.length}, (_, i) => i);
  const half = Number(Math.ceil(legendColors.length / 2));

  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h5">Land Cover Distribution</CardTitle>
        <p className="card-category">Latest species information</p>
      </CardHeader>
      <CardBody style={{ height: "266px" }}>
        <Pie
          data={data}
          options={options}
        />
      </CardBody>
      <CardFooter>
        <div 
          style={{ 
            display: "flex", 
            flexDirection: "row", 
            justifyContent: "space-around", 
            alignItems: "center"
        }}
        >
          <div className="legend">
            {indices.slice(0, half).map((index) => {
              return (
              <>
                <i className="fa fa-circle" style={{ color: legendColors[index] }} />
                {` ${legendLabels[index]}`}
                <br />
              </>);
            })}
          </div>
          <div className="legend">
            {indices.slice(half).map((index) => {
              return (
              <>
                <i className="fa fa-circle" style={{ color: legendColors[index] }} />
                {` ${legendLabels[index]}`}
                <br />
              </>);
            })}
          </div>
        </div>
        {/* <hr />
        <div className="stats">
          <i className="fa fa-calendar" /> Number of emails sent
        </div> */}
      </CardFooter>
    </Card>
  )
}

function SpeciesLineChart() {
  const options = lineChartOptions;
  const data = SpeciesLine.data
  const currMangrove = localStorage.getItem('currMangrove');
  const legendColors = SpeciesLineColors(currMangrove)
  const legendLabels = SpeciesLineLabels(currMangrove)
  const indices = Array.from({length: legendColors.length}, (_, i) => i);
  const half = Number(Math.ceil(legendColors.length / 2));

  return (
    <>
    <Card className="card-chart">
      <CardHeader>
        <CardTitle tag="h5">Species graph</CardTitle>
        <p className="card-category">Line Chart with Points</p>
      </CardHeader>
      <CardBody>
        <Line
          data={data}
          options={options}
          width={400}
          height={100}
        />
      </CardBody>
      <CardFooter>
      <div 
          style={{ 
            display: "flex", 
            flexDirection: "row", 
            justifyContent: "space-around", 
            alignItems: "center"
        }}
        >
          <div className="legend">
            {indices.slice(0, half).map((index) => {
              return (
              <>
                <i className="fa fa-circle" style={{ color: legendColors[index] }} />
                {` ${legendLabels[index]}`}
                <br />
              </>);
            })}
          </div>
          <div className="legend">
            {indices.slice(half).map((index) => {
              return (
              <>
                <i className="fa fa-circle" style={{ color: legendColors[index] }} />
                {` ${legendLabels[index]}`}
                <br />
              </>);
            })}
          </div>
        </div>
      </CardFooter>
    </Card>
    </>); 
}

function LandCoverLineChart() {
  const options = lineChartOptions;
  const data = LandCoverLine.data;
  const currMangrove = localStorage.getItem('currMangrove');
  const legendColors = LandCoverLineColors(currMangrove);
  const legendLabels = LandCoverLineLabels(currMangrove);
  const indices = Array.from({length: legendColors.length}, (_, i) => i);
  const half = Number(Math.ceil(legendColors.length / 2));

  return (
    <>
    <Card className="card-chart">
      <CardHeader>
        <CardTitle tag="h5">Land Cover Distribution</CardTitle>
        <p className="card-category">Line Chart with Points</p>
      </CardHeader>
      <CardBody>
        <Line
          data={data}
          options={options}
          width={400}
          height={100}
        />
      </CardBody>
      <CardFooter>
      <div 
          style={{ 
            display: "flex", 
            flexDirection: "row", 
            justifyContent: "space-around", 
            alignItems: "center"
        }}
        >
          <div className="legend">
            {indices.slice(0, half).map((index) => {
              return (
              <>
                <i className="fa fa-circle" style={{ color: legendColors[index] }} />
                {` ${legendLabels[index]}`}
                <br />
              </>);
            })}
          </div>
          <div className="legend">
            {indices.slice(half).map((index) => {
              return (
              <>
                <i className="fa fa-circle" style={{ color: legendColors[index] }} />
                {` ${legendLabels[index]}`}
                <br />
              </>);
            })}
          </div>
        </div>
      </CardFooter>
    </Card>
    </>);
}

function Dashboard() {
  const useBeforeRender = (callback, deps) => {
      const [isRun, setIsRun] = React.useState(false);

      if (!isRun) {
          callback();
          setIsRun(true);
      }

      React.useEffect(() => () => setIsRun(false), deps);
  };
  useBeforeRender(() => localStorage.setItem('currMangrove', 'Sundarbans'), []);


  return (
    <>
      <div className="content">
        <Row>
          <Col md="6">
            <MangroveSpeciesPieChart />
          </Col>
          <Col md="6">
            <MangroveLandCoverPieChart />
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <SpeciesLineChart />
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <LandCoverLineChart />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
