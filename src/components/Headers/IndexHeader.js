/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/whitney@dawn.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="category">
            <img
              alt="..."
              className="rounded-circle img-raised n-logo"
              src={require("assets/img/happy_face.JPG")}
            ></img>
            <h1 className="h1-seo">Dylan Jack Hrebenach</h1>
            <h3>This website serves as a window into my life. I've tried to incorporate as many viewing angles as possible.</h3>
          </div>
          <h6 className="designed-by">
            Designed by Dylan Hrebenach
          </h6>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
