// ** Reactstrap Imports
import {
  Button,
  Card,
  CardTitle,
  CardBody,
  CardText,
  CardSubtitle,
  CardLink,
  CardImg,
  Row,
  Col,
} from "reactstrap";
import { Linkedin, Facebook, Twitter, Instagram } from "react-feather";
// ** Images
import img1 from "../../assets/images/logo/Royal-logo.png";
// import royal-logo from '../../assets/images/logo/Royal-logo.png'

const Card10 = () => {
  return (
    <Row className="match-height" style={{backgroundColor:"black", height:"500px"}}>
      <Col lg="4" md="6" style={{ marginLeft:"35%", marginTop:"8%"}}>
        
        <Card style={{ backgroundColor:"transparent"}}>
          <CardImg top src={img1} alt="Card cap" style={{height:"130px", width:"150px", alignContent:"center", marginLeft:"30%"}}/>
          <CardBody>
            <div style={{textAlign:"center"}}>
            <CardText >
              22 Royal Street, Sundance Avenue, New York RESERVATIONS NUMBER:
              +00 25 854 78521 <br/> WORKING HOURS: <br/> MON- FRI: 08:00 AM – 10:00 PM <br/> SAT
              – SUN: 10:00 AM – 11:00 PM
            </CardText>
            </div>
          </CardBody>
        </Card>
        
      </Col>
      <CardBody style={{marginLeft:"10%"}}>
        <style jsx>{`
          .iconClass {
            transition: transform 0.3s ease, z-index 0.3s ease;
          }

          .iconClass:hover {
            transform: translateY(-10px);
            z-index: 10;
            color: blue;
          }
        `}</style>
        <Facebook className="iconClass"></Facebook>
        <Instagram
          className="iconClass"
          style={{ marginLeft: "12px" }}
        ></Instagram>
        <Twitter className="iconClass" style={{ marginLeft: "12px" }}></Twitter>
        <Linkedin
          className="iconClass"
          style={{ marginLeft: "12px" }}
        ></Linkedin>
      </CardBody>
      
    </Row>
  );
};

export default Card10;
