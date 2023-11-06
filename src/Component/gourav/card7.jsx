// ** React Imports
import { Fragment } from "react";
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

import Card3Img from "../../assets/images/logo/card3.webp";
import Card7Img from "../../assets/images/logo/card7.jpg"

const Card7 = () => {
  return (
    <Fragment>
      <Row>
        <Col xl="12" md="12">
          <Card className="border-0">
            <CardImg
              top
              src={Card7Img}
              alt="card-overlay"
style={{height:"400px"}}
            />
            <CardImgOverlay className="bg-overlay d-flex flex-column justify-content-center">
              <CardTitle
                className="text-center"
                tag="h4"
                style={{
                  fontFamily: "cursive",
                  fontSize: "50px",
                  color: "#FCDA9A"
                }}
              >
                Visit us at Royal plate
              </CardTitle>
              <CardText
                className="text-center"
                style={{ fontWeight: "bold", fontSize: "25px", color: "white", font:"suranna"}}
              >
                ENJOYABLE & COMFORTABLE
              </CardText>

              <CardText className="d-flex justify-content-center align-items-center" style={{ fontWeight: "bold" }}>
                <div style={{ border: "1.5px solid orange",width:"62px"}}></div>
                  <img
                    src="../../../src/assets/images/logo/cooking-removebg-preview.png"
                    alt="img"
                    style={{ maxHeight: "42px" }}
                  ></img>
                                  <div style={{ border: "1.5px solid orange",width:"62px"}}></div>

              </CardText>
            </CardImgOverlay>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Card7;
