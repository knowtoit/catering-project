// ** React Imports
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// ** Reactstrap Imports
import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardImgOverlay,
  CardText,
  Row,
  Col
} from "reactstrap";

import card2Img from "../../assets/images/logo/CARD2.webp";

const Card2 = () => {
  return (
    <Fragment>
      <Row >
      <Col xl="3" md="3" className="d-none d-md-block"><img src="../../../src/assets/images/logo/card2-B.png"></img></Col>
        <Col xl="6" md="6" >
          <Card className="border-0"  >
            <CardImg top src={card2Img} alt="card-overlay" style={{border:"10px solid black",height:"700px"}} />
            <CardImgOverlay className="bg-overlay d-flex flex-column justify-content-center">
              <CardTitle
                className="text-center"
                tag="h4"
                style={{
                  fontFamily: "cursive",
                  fontSize: "30px",
                  color: "orange"
                }}
              >
                Our History
              </CardTitle>
              <CardText
                className="text-center"
                style={{ fontWeight: "bold", fontSize: "34px",color:"black" }}
              >
                LOVE FOR FOOD
              </CardText>

              <CardText
                className="d-flex justify-content-center align-items-center"
                style={{ fontWeight: "bold" }}
              >
                <div
                  style={{ border: "1px solid orange", width: "42px" }}
                ></div>
                <div style={{ borderRadius: "50%", color: "orange",marginLeft:"1%",marginRight:"1%"}}>0</div>
                <div
                  style={{ border: "1px solid orange", width: "42px" }}
                ></div>
              </CardText>
              <CardText className="text-center">
                <small style={{color:"black",maxWidth:"20px"}}>
                  Welcome. This is Royal plate. Elegant & sophisticated
                  restaurant template. Royal plate offers different home page
                  layouts with smart and unique design, showcasing beautifully
                  designed elements every restaurant website should have. Smooth
                  animations, fast loading and engaging user experience are just
                  some of the features this template offers. So, give it a try
                  and dive into a world of royal restaurant websites.
                </small>
              </CardText>
            </CardImgOverlay>
          </Card>
        </Col>
        <Col xl="3" md="3" className="d-none d-md-block"><img src="../../../src/assets/images/logo/card2-A.png"></img></Col>

      </Row>
    </Fragment>
  );
};

export default Card2;
