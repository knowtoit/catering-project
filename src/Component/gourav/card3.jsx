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

const Card3 = () => {
  return (
    <Fragment>
      <Row>
        <Col xl="12" md="12">
          <Card className="border-0">
            <CardImg
              top
              src={Card3Img}
              alt="card-overlay"
              style={{ height: "550px" }}
            />
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
                Exquisite cuisine
              </CardTitle>
              <CardText
                className="text-center"
                style={{ fontWeight: "bold", fontSize: "27px", color: "white" }}
              >
                A FEAST FOR YOUR SENSES
              </CardText>

              <CardText
                className="d-flex justify-content-center align-items-center"
                style={{ fontWeight: "bold" }}
              >
                <div
                  style={{ border: "1.5px solid orange", width: "62px" }}
                ></div>
                <img
                  src="../../../src/assets/images/logo/cooking-removebg-preview.png"
                  alt="img"
                  style={{ maxHeight: "42px" }}
                ></img>
                <div
                  style={{ border: "1.5px solid orange", width: "62px" }}
                ></div>
              </CardText>
            </CardImgOverlay>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Card3;
