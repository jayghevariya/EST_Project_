
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
import "./text.css";
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

function SpeciesLineChart() {
  const options = lineChartOptions;
  const data = SpeciesLine.data
  const currMangrove = localStorage.getItem('currMangrove');
  const legendColors = SpeciesLineColors(currMangrove)
  const legendLabels = SpeciesLineLabels(currMangrove)
  const indices = Array.from({ length: legendColors.length }, (_, i) => i);
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
  useBeforeRender(() => localStorage.setItem('currMangrove', 'Sundarbans'), []);


  return (
    <>
      <div className="content"style={{'marginTop': '3vh'}}>
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
              <h3 className="head_align"><u>Sunderbans Land and Species Analysis</u></h3><br></br>
              <h5>It is situated on the estuary created by the Hooghly, Brahmaputra, Ganges and Meghna rivers in the Bay of Bengal.
                located between 21°32′ and 22°40′ N and 88°05′ and 89°51′ E.
                The elevation of Sundarbans is 2m above the sea level on an average.</h5>
              <h5>Sundarbans has a total area of around 10000 sq. km
                We saw a decrease of 1.3% in dense mangrove forests per year, out of which 1975-1990 and 2005-2020 showed a decrease in dense forest cover at an annual rate of 2.75% and 2.25%.<br /> However, it increased at a yearly rate of 0.40% from 1990 to 2005.
                The highest percentages of dense forests were developed from 1990 to 2005 by replacing moderate dense to dense forest(5.65%) and sparse to dense forest (3.61%).</h5>
              <h5>Sundarbans mangrove forest has changed little in net area (approximately 0.81%) despite having one of the highest population densities in the world in its immediate vicinity, but the forest health, structure and species composition have changed substantially in the last 38 years (1977–2015).<br></br>
                Between 1977-2015, both H. fomes(a.k.a. Sundari Tree) and E. agallocha(a.k.a. Poisonfish Tree) decreased by 9.9%, whereas, C. decandra(a.k.a. Griffith), X. mekongensis(a.k.a. Puzzlenut Tree) and        S. apelatala(a.k.a. Panama Tree) has been increased by 12.9%,57.3% and 380.4% respectively.</h5>
            </Col>
          </Card>
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
