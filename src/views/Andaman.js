
import { textAlign } from "@mui/system";
import { LandCoverLineLabels } from "data/land_cover_line";
import { LandCoverLineColors } from "data/land_cover_line";
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
        <CardTitle tag="h5">Species Cover Distribution</CardTitle>
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
  useBeforeRender(() => localStorage.setItem('currMangrove', 'Andaman'), []);


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
              <h3 className="head_align"><u>Andaman and Nicobar Land and Species Analysis</u></h3><br/>
              <h5>Total area under mangrove vegetation in India is 4639 sq.km, as per the latest estimate of the Forest Survey of India (2009). Out of this, 615 sq.km, area is mangrove vegetation occur in Andaman and Nicobar Islands.The mangrove vegetation of these islands constitutes 7.5% of the land area of 8.6% of the total forest area. </h5>
              <h5>
                There are eight mangrove species recorded only in Andaman and Nicobar Islands, and they are
                Lumnitzera littorea, Rhizophora lamarckii, Rhizophora mohanii, Sonneratia urama, Sonneratia gulngai, Sonneratia griffithii, S. lanceolata and S. ovata.</h5>
              <h5>Three mangrove species, which are categorized as threatened species according to IUCN red list, viz.,<br/> Phoenix paludosa (Near Threatened),<br/> Sonneratia ovata (Near Threatened), <br/>Sonneratia griffithii (Critically Endangered) were found in the Andaman Islands. </h5>
              <h5>Of these, Phoenix paludosa was distributed in North, Middle and South Andaman Islands, whereas Sonneratia ovata and S. griffithii were found in Ritchie’s Archipelago and Middle Andaman, respectively.
<br/>Of the 25 species recorded, IVI of Rhizophora apiculata was the highest and three genera viz., Rhizophora, Bruguiera and Ceriopstogether constituted 67% of the IVI . This shows the dominance of family Rhizophoraceae in the Andaman Islands.</h5>
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
