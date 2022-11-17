
import { textAlign } from "@mui/system";
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
import "./text.css";
import {
  LandCoverLine,
  SpeciesPieChart,
  LandPieChart,
  pieChartOptions,
  lineChartOptions
} from "variables/charts.js";
import { LandCoverLineLabels } from "data/land_cover_line";
import { LandCoverLineColors } from "data/land_cover_line";
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
  const indices = Array.from({ length: legendColors.length }, (_, i) => i);
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
  // console.log(legendColors)
  const indices = Array.from({ length: legendColors.length }, (_, i) => i);
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

function LandCoverLineChart() {
  const options = lineChartOptions;
  const data = LandCoverLine.data;
  const currMangrove = localStorage.getItem('currMangrove');
  const legendColors = LandCoverLineColors(currMangrove);
  const legendLabels = LandCoverLineLabels(currMangrove);
  const indices = Array.from({ length: legendColors.length }, (_, i) => i);
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
  useBeforeRender(() => localStorage.setItem('currMangrove', 'Bhitarkanika'), []);


  return (
    <>
      <div className="content" style={{'marginTop': '3vh'}}>
        <Row>
          <Col md="6">
            <MangroveSpeciesPieChart />
          </Col>
          <Col md="6">
            <MangroveLandCoverPieChart />
          </Col>
        </Row>
        <Row>
          <Card>
            <Col md="12">
              <h3 className="head_align"><u>Bhitarkanika Land and Species analysis</u></h3><br/>
              <h5>Bhitarkanika mangrove foresr is sprean in an area of 672 km2.
                Most of the landscapes are occupied by mangrove forests whose area increased from 2000 to 2006 and decreased from 2006 to 2015.Of India's 58 recorded species of mangroves, 55 species are found in Bhitarkanika.</h5>
              <h5>The mangrove forests of Bhitarkanika mangrove ecosystem are the one of the largest mangrove forests of mainland India.Brahmani river receives inputs of untreated domestic and industrial wastes (including organic matter, oil and heavy metal).
                <br />Pollution in Brahmani river and extraction of freshwater from it has altered the salinity of the water. Mangroves of Bhitarkanika, grow in brackish water, are sensitive to changes in salinity.</h5>
            </Col>
          </Card>
        </Row>
        <Row>
          <Col md="12">
            <LandCoverLineChart />
          </Col>
        </Row>
        {/* <Row>
          <Col md="12">
            <LandCoverLineChart />
          </Col>
        </Row> */}
      </div>
    </>
  );
}

export default Dashboard;
