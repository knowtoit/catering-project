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

import img3 from "../../assets/images/logo/imgCARD11.jpg";

const CardImages = () => {
  return (
    <Fragment>
      <Row>
        <Col xl="12" md="12">
          <Card className="text-white border-0">
            <CardImg top src={img3} alt="card-overlay"  style={{height: "500px" }}
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
                Discover
              </CardTitle>
              <CardText
                className="text-center"
                style={{ fontWeight: "bold", fontSize: "40px" }}
              >
                ROYAL PLATE
              </CardText>

              <CardText className="d-flex justify-content-center align-items-center" style={{ fontWeight: "bold" }}>
                <div style={{ border: "1.5px solid orange",width:"42px"}}></div>
                  <img
                    src="../../../src/assets/images/logo/cooking-removebg-preview.png"
                    alt="img"
                    style={{ maxHeight: "52px" }}
                  ></img>
                                  <div style={{ border: "1.5px solid orange",width:"42px"}}></div>

              </CardText>
              <CardText className="text-center" style={{ fontWeight: "bold",marginTop: "-1.5%"  }}>
                <small className="text-muted">OPENING HOURS</small>
              </CardText>

              <CardText className="text-center">
                <small className="text-muted">
                  Monday-Friday: 08:00AM - 23:00 PM
                </small>
              </CardText>
              <CardText className="text-center" style={{ marginTop: "-1.5%" }}>
                <small className="text-muted">
                  Weekends: 08:00AM - 02:00 PM
                </small>
              </CardText>
            </CardImgOverlay>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default CardImages;
