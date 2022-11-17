
import { textAlign } from "@mui/system";
import React from "react";
import { Line, Pie } from "react-chartjs-2";
import "./text.css";
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
  useBeforeRender(() => localStorage.setItem('currMangrove', 'Kachchh'), []);


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
            <h3 className="head_align"><u>Gulf of kachchh land and Species Analysis</u></h3><br></br>
            <h5>The stud area extends from 69˚ 37 00 E to 69˚ 45 00 E and 22˚ 24 00 N to 22˚ 30 00 N along the southern shore of the GoK in the Jamnagar District of Gujarat state, India.</h5>
            <h5>The Gulf of Kachchh harbours one of the significant mangrove formations of India, extending to an area of 90.31 km2.
              The mangrove cover of the gulf of kutch seems to have extended from the year 1999 to 2010 going from 30.69 km2 to 38.81 km2 in the study area, respectively</h5>
            <h5>The species A. Marina has shown to withstand harsh environmental conditions and its high tolerance explains why it is abundant in the Gulf of Kachchh.					
Seasonal salinity fluctuations in all the stations are likely to be narrow due to very low rainfall.<br/> Hence, more density at the lower intertidal level could be due to more water logging and lower level of available oxygen, which usually characterize the lower intertidal zone.It is home to two mangrove species with one being very abundant namely Avicennia Marina and an endemic species called Urochondra setulosa which is often found on banks of tidal creeks.</h5>
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
