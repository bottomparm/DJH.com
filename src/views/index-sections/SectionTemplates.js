import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components

// sections for this page
import Images from "./Images.js";
import BasicElements from "./BasicElements.js";
import Navbars from "./Navbars.js";
import Tabs from "./Tabs.js";
import Pagination from "./Pagination.js";
import Notifications from "./Notifications.js";
import Typography from "./Typography.js";
import Javascript from "./Javascript.js";
import Carousel from "./Carousel.js";
import NucleoIcons from "./NucleoIcons.js";
import CompleteExamples from "./CompleteExamples.js";
import SignUp from "./SignUp.js";
import Examples from "./Examples.js";
import Download from "./Download.js";

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <div className="main">
        <Images />
        <BasicElements />
        <Navbars />
        <Tabs />
        <Pagination />
        <Notifications />
        <Typography />
        <Javascript />
        <Carousel />
        <NucleoIcons />
        <CompleteExamples />
        <SignUp />
        <Examples />
        <Download />
      </div>
    </>
  );
}

export default Index;
