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
  const lat = ["22.7443", "20.74", "21.9497", "13", "16.70"]
  // "11.42" ]
  const long = ["69.9550", " 87.00", "89.1833", "92", "82.11"]
  // "79.77"]
  const name = ["gulf-of-kachh", "Bhitarkanika", "sunderbans", "andaman", "Krishna-Godavari"];
  // "Pichavaram"]
  const position = [lat.map((item) => item), long.map((item) => item)]
  return (
    <>
      <div className="content">
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
      </div>
    </>
  );
}

export default Map;
