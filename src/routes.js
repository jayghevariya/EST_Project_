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
import Andaman from "views/Andaman.js";
import Sunderbans from "views/sunderbans.js";
import Bhitarkanika from "views/Bhitarkanika.js";
import Krishna from "views/Krishna.js";
import Maps from "views/Map.js";
import Gulfofkachh from "views/gulf-of-kachh.js";
import Dataset from "views/Dataset.js";
import Home from "views/Home.js";

var routes = [
  {
    path: "/maps",
    name: "Home",
    icon: "nc-icon nc-pin-3",
    component: Maps,
    layout: "/"
  },
  {
    path: "/andaman",
    name: "Andaman and Nicobar",
    icon: "nc-icon nc-Tree",
    component: Andaman,
    layout: "/"
  },
  {
    path: "/bhitarkanika",
    name: "Bhitarkanika",
    icon: "nc-icon nc-diamond",
    component: Bhitarkanika,
    layout: "/"
  },
  
  {
    path: "/sunderbans",
    name: "Sunderbans",
    icon: "nc-icon nc-bell-55",
    component: Sunderbans,
    layout: "/"
  },
  {
    path: "/gulf-of-kachh",
    name: "Gulf of Kachh",
    icon: "nc-icon nc-single-02",
    component: Gulfofkachh,
    layout: "/"
  },
  {
    path: "/krishna-godavari",
    name: "Krishna-Godavari",
    icon: "nc-icon nc-tile-56",
    component: Krishna,
    layout: "/"
  },
  {
    path: "/dataset",
    name: "Overall dataset",
    icon: "nc-icon nc-tile-56",
    component: Dataset,
    layout: "/"
  },
  {
    path: "/",
    name: "Home",
    icon: "nc-icon nc-pin-3",
    component: Home,
    layout: "/"
  }
];
export default routes;
