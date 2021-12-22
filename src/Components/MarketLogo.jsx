import { Col, Container, Image, Row } from "react-bootstrap";
import MarketPlaceLogo from "../Images/MarketPlaceLogo.png";

const MarketLogo = () => {
  return (
    <Container>
      <Row>
        <Col className="text-center pt-2 pb-2">
          <Image src={MarketPlaceLogo} />
        </Col>
      </Row>
    </Container>
  );
};

export default MarketLogo;
