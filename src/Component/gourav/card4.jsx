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

import Card4A from "../../assets/images/logo/card4-A.webp";
import Card4B from "../../assets/images/logo/card4-B.webp";
import Card4C from "../../assets/images/logo/card4-C.avif";
import Card4D from "../../assets/images/logo/card4-D.avif";
import Card44 from "../../assets/images/logo/card1234.avif";
const Card4 = () => {
  return (
    <Fragment>
      <Row>
        <Col xl="6" md="6">
          <Row>
            <Col xl="6" md="6">
              {" "}
              <CardImg top src={Card4A} alt="card-overlay" />
            </Col>
            <Col xl="6" md="6" style={{ marginLeft: "-5%" }}>
              {" "}
              <CardImg top src={Card4B} alt="card-overlay" />
            </Col>
            <Col xl="6" md="6">
              {" "}
              <CardImg top src={Card4D} alt="card-overlay" />
            </Col>
            <Col xl="6" md="6" style={{ marginLeft: "-5%" }}>
              {" "}
              <CardImg top src={Card4D} alt="card-overlay" />
            </Col>
          </Row>
        </Col>
        <Col xl="6" md="6">
          <Card>
            <CardImg
              top
              src={Card44}
              alt="card-overlay"
              style={{ height: "540px" }}
            />
            <CardImgOverlay className="bg-overlay d-flex flex-column justify-content-center">
              <CardTitle
                className="text-center"
                tag="h4"
                style={{
                  fontFamily: "cursive",
                  fontSize: "20px",
                  color: "orange"
                }}
              >
                From the menu
              </CardTitle>
              <CardText
                className="text-center"
                style={{ fontWeight: "bold", fontSize: "27px", color: "black" }}
              >
                SPECIAL OFFERS
              </CardText>
              <CardText
                className="d-flex justify-content-center align-items-center"
                style={{ fontWeight: "bold" }}
              >
                <div
                  style={{ border: "1px solid orange", width: "42px" }}
                ></div>
                <div
                  style={{
                    borderRadius: "50%",
                    color: "orange",
                    marginLeft: "1%",
                    marginRight: "1%"
                  }}
                >
                  0
                </div>
                <div
                  style={{ border: "1px solid orange", width: "42px" }}
                ></div>
              </CardText>

              <CardText
                className="d-flex justify-content-center align-items-center"
                style={{ fontWeight: "bold" }}
              >
                <div>
                  <Row>
                    <Col>
                      <table
                        style={{
                          borderSpacing: "0 20px",
                          borderCollapse: "separate"
                        }}
                      >
                        <tbody>
                          <tr>
                            <td className="pe-1">
                              <img
                                src="../../../src/assets/images/girl image.avif"
                                style={{
                                  maxHeight: "60px",
                                  borderRadius: "50%"
                                }}
                                alt="imgsdf"
                              ></img>
                            </td>
                            <td className="text-black">
                              ROYAL BREAKFAST
                              <tr>
                                <td>
                                  <small style={{ fontWeight: "initial" }}>
                                    Fried eggs, fried bacon, toast, fresh tomato
                                    salad, cup of coffee or tea
                                  </small>
                                </td>
                              </tr>
                            </td>
                            <td>
                              <span
                                className="fw-bold"
                                style={{
                                  fontFamily: "cursive",
                                  fontSize: "25px",
                                  color:"black",
                                  borderTop: "1px solid black",
                                  borderBottom: "1px solid black"
                                }}
                              >
                                $12
                              </span>
                            </td>
                          </tr>
                        </tbody>
                        <tbody>
                          <tr>
                            <td className="pe-1">
                              <img
                                src="../../../src/assets/images/girl image.avif"
                                style={{
                                  maxHeight: "60px",
                                  borderRadius: "50%"
                                }}
                                alt="imgsdf"
                              ></img>
                            </td>
                            <td className="text-black">
                            ROYAL DINNER
                              <tr>
                                <td>
                                  <small style={{ fontWeight: "initial" }}>
                                  Grilled Beaf steak, roasted red potatos with rosemary, mashrooms sause, vine
                                  </small>
                                </td>
                              </tr>
                            </td>
                            <td>
                              <span
                                className="fw-bold"
                                style={{
                                  fontFamily: "cursive",
                                  fontSize: "25px",
                                  color: "black",
                                  borderTop: "1px solid black",
                                  borderBottom: "1px solid black"
                                }}
                              >
                                $22
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="pe-1">
                              <img
                                src="../../../src/assets/images/girl image.avif"
                                style={{
                                  maxHeight: "60px",
                                  borderRadius: "50%"
                                }}
                                alt="imgsdf"
                              ></img>
                            </td>
                            <td className="text-black">
                            ROYAL BRUNCH
                              <tr>
                                <td>
                                  <small style={{ fontWeight: "initial" }}>
                                  Warm chicken wings, portobello mushrooms, fresh mozzarella, coffe or tea
                                  </small>
                                </td>
                              </tr>
                            </td>
                            <td>
                              <span
                                className="fw-bold"
                                style={{
                                  fontFamily: "cursive",
                                  fontSize: "25px",
                                  color: "black",
                                  borderTop: "1px solid black",
                                  borderBottom: "1px solid black"
                                }}
                              >
                                $15
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </Col>
                  </Row>
                </div>
              </CardText>
            </CardImgOverlay>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Card4;
