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
  Col,
  Form,
  Input,
  Button,
  InputGroup,
  InputGroupText,
} from "reactstrap";

import {
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";

import card2Img from "../../assets/images/logo/CARD2.webp";

const Card8 = () => {
  return (
    <Fragment>
      <Row>
        <Col xl="0.5" md="0.5" />
        <Col xl="3" md="3" className="d-none d-md-block">
          <img src="../../../src/assets/images/logo/card8-left.jpg"></img>
        </Col>
        <Col xl="6" md="6">
          <Card className="border-0" style={{ backgroundColor: "transparent" }}>
            <CardImg
              top
              src={card2Img}
              alt="card-overlay"
              style={{ border: "none", height: "540px", marginLeft: "1%" }}
            />
            <CardImgOverlay className="bg-overlay d-flex flex-column justify-content-center">
              <CardTitle
                className="text-center"
                tag="h4"
                style={{
                  fontFamily: "cursive",
                  fontSize: "30px",
                  color: "orange",
                }}
              >
                Reservation
              </CardTitle>
              <CardText
                className="text-center"
                style={{ fontWeight: "bold", fontSize: "34px", color: "black" }}
              >
                Book your table
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
                    marginRight: "1%",
                  }}
                >
                  0
                </div>
                <div
                  style={{ border: "1px solid orange", width: "42px" }}
                ></div>
              </CardText>
              <div style={{margin:"0 20%"}}>
              <CardText className="text-center">
                <Form>
                  <Row>
                    <Input
                      type="date"
                      name="date"
                      id="nameVerticalIcons"
                      maxLength={15}
                      size={10}
                    />
                  </Row>{" "}
                  <br />
                  <Row>
                    <Input
                      type="time"
                      name="time"
                      id="nameVerticalIcons"
                      maxLength={15}
                      size={10}
                    />
                  </Row>{" "}
                  <br />
                  
                  
                  <Row>
                  <UncontrolledButtonDropdown>
                    <Button outline color="white" style={{ width: "670px", color:"grey", backgroundColor:"white" }}>
                      1
                    </Button>
                    <DropdownToggle
                      outline
                      className="dropdown-toggle-split"
                      
                      backgroundColor="white"
                      caret
                      style={{backgroundColor:"white", color:"grey"}}
                    ></DropdownToggle>
                    <DropdownMenu end>
                      <DropdownItem
                        
                        tag="a"
                        onClick={(e) => e.preventDefault()}
                      >
                        1 person
                      </DropdownItem>
                      <DropdownItem
                        
                        tag="a"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 people
                      </DropdownItem>
                      <DropdownItem
                        
                        tag="a"
                        onClick={(e) => e.preventDefault()}
                      >
                        3 people
                      </DropdownItem>
                      <DropdownItem divider></DropdownItem>
                      <DropdownItem
                        
                        tag="a"
                        onClick={(e) => e.preventDefault()}
                      >
                        More than 3 people
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledButtonDropdown>
                  </Row><br/>
                  <Row>
                    <Button
                      className="me-1"
                      color="primary"
                      type="submit"
                      onClick={(e) => e.preventDefault()}
                    >
                      Find a table
                    </Button>
                  </Row>
                </Form>
              </CardText>
              </div>
            </CardImgOverlay>
          </Card>
        </Col>
        <Col xl="3" md="3" className="d-none d-md-block">
          <img src="../../../src/assets/images/logo/card8-right.jpg"></img>
        </Col>
        <Col />
      </Row>
    </Fragment>
  );
};

export default Card8;
