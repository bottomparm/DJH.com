import React, { Component } from "react";
import Page from "../../resume/myresume.html";
var htmlDoc = { __html: Page };

class Resume extends Component {
  render() {
    return <div dangerouslySetInnerHTML={htmlDoc} />;
  }
}

export default Resume
