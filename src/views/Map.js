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
import React from "react";
import MarkerClusterGroup from 'react-leaflet-cluster'
import { MapContainer, TileLayer, Marker, Tooltip, Popup } from 'react-leaflet'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import Grid from "@mui/material/Grid";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react"
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { NavLink } from "react-router-dom";
import "./text.css";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;

function Map() {
  const [hotel, sethotel] = useState([]);
  const navigate = useHistory();

  const tileLayer = {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  }
  //create a 2d array of lat and long
  const lat = ["22.7443", "20.74", "21.8348400", "13", "16.70"]
  // "11.42" ]
  const long = ["69.9550", " 87.00", "88.8939847", "92", "82.11"]
  // "79.77"]
  const name = ["gulf-of-kachh", "Bhitarkanika", "sunderbans", "andaman", "Krishna-Godavari"];
  // "Pichavaram"]
  const position = [lat.map((item) => item), long.map((item) => item)]
  return (
    <>
      <div className="content" style={{ 'marginTop': '3vh' }}>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>Mangrove Database of India</CardHeader>
              <CardBody>
                <div
                  id="map"
                  className="map"
                  style={{ position: "relative", overflow: "hidden" }}
                >
                  <MapContainer style={{ height: '70vh', width: '82vw' }}
                    center={[14.8, 77.4]} zoom={5} scrollWheelZoom={true}>
                    <TileLayer {...tileLayer} />
                    <MarkerClusterGroup
                      chunkedLoading
                    >
                      {lat.map((users1, index) =>
                        <>
                          <Marker
                            position={[lat[index], long[index], "abc"]}
                            // onClick={() => navigate.push(`/${name[index]}`)}
                            eventHandlers={{
                              click: (e) => {
                                // // console.log('marker clicked', e)
                                navigate.push(`/admin/${name[index]}`)
                              },
                            }}

                          >
                            <Tooltip>
                              Mangrove: {name[index]}
                            </Tooltip>
                          </Marker>
                        </>
                      )}
                    </MarkerClusterGroup>
                  </MapContainer>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Card>
            <Col md="12">
              <h3 className="head_align">Overview</h3>
              <h5>India has about 3% of the total Mangrove cover in South AsiaThe current assessment shows that mangrove cover in the country is 4,975 sq km [(1.2 million acres)], which is 0.15% of the country’s total geographical area.</h5>
              <h5>West Bengal has the highest percentage of area under total Mangrove cover followed by Gujarat and Andaman Nicobar Islands.</h5>
              <h5>Mangroves face limiting factors like:</h5>
              <ul>
                <li><h5>Lack of Oxygen</h5></li>
                <li><h5>High Salinity</h5></li>
                <li><h5>Diurnal Tidal Inundations</h5></li>
              </ul>
              <h5>India with a long coastline of about 7516.6 km, including the island territories, had a mangrove cover of about 6,749 km2, the fourth largest mangrove area in the world.India lost 40% of its mangrove area during the last century.</h5>
            </Col>
          </Card>

        </Row>
      </div>
    </>
  );
}

export default Map;
