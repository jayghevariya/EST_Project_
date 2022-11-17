
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
  useBeforeRender(() => localStorage.setItem('currMangrove', 'Krishna'), []);


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
        <Card>
        <Col md="12">
        <h3 className="head_align">
          <u>Krishna Land and Species Analysis</u>
        </h3><br/>
        <h5>KWS is part of the Krishna delta (lying between 15° 42′ N and 15° 55′ N in latitude and 80° 42′−81° 01′ E in longitude)
          AP state ranks fourth in terms of mangrove wetlands which are mainly found along the east coast in the delta region of the River Godavari (332 km2 ) and Krishna (250 km2 ) accounting to a total area of 582 km2.</h5>
        <h5>In 1972 the mangrove cover within the KWS was about 82.76 km2, which decreased to 80.47 km2 in 1981, and dropped to 69.52 km2 in 1990. Comparatively, an area of 13.22 km2 was lost between 1972–1990.<br />
          Overall, an increase of 88.64 km2 of mangrove area was observed from 1990 to 2014. If we consider the 1972 area (82.76 km2) as a baseline, then there is an increase of 75.4 km2 up to 2014 in KWS. The Reasons behind the increase are both natural and human restoration activities.</h5>
        <h5>Mangrove vegetation of KWS shows a complex association of species biodiversity constituting both flora and fauna
          Avicennia marina and Excoecaria agallocha are dominant species, followed by Rhizophora spp and Bruguiera cylindrica in this sanctuary</h5>
          <br/>
          </Col>
          </Card>
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
